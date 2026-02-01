const express = require("express");
const cors = require("cors");
const puppeteer = require("puppeteer");
const axios = require("axios");
const Tesseract = require("tesseract.js");
const PDFDocument = require("pdfkit");

const app = express();
const PORT = 3001;

/* -------------------- MIDDLEWARES -------------------- */
app.use(cors());
app.use(express.json());

/* -------------------- HEALTH CHECK -------------------- */
app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

/* -------------------- SCRAPE + OCR -------------------- */
app.post("/scrape", async (req, res) => {
  const { url } = req.body;

  if (!url) {
    return res.status(400).json({ error: "URL requerida" });
  }

  try {
    /* 1️⃣ Lanzar navegador */
    const browser = await puppeteer.launch({
      headless: "new",
    });

    const page = await browser.newPage();
    await page.goto(url, { waitUntil: "networkidle2", timeout: 30000 });

    // Revisar y actualizar localStorage dentro de la página
    await page.evaluate(() => {
      const key = "num_per_page";
      const current = localStorage.getItem(key);
      localStorage.setItem(key, "20");
    });

    // Ahora recarga la página para que el cambio tenga efecto
    await page.reload({ waitUntil: "networkidle2" });

    /* 2️⃣ Obtener imágenes */
    const imageUrls = await page.evaluate(() => {
      return Array.from(document.images)
        .map((img) => img.src)
        .filter((src) => src && src.startsWith("http"));
    });

    await browser.close();

    /* 3️⃣ OCR */
    let extractedText = "";

    const MAX_IMAGES = 20; // Limitar a 20 imágenes para evitar sobrecarga

    for (const imgUrl of imageUrls.slice(0, MAX_IMAGES)) {
      try {
        const imageResponse = await axios.get(imgUrl, {
          responseType: "arraybuffer",
          timeout: 15000,
        });

        const ocrResult = await Tesseract.recognize(
          imageResponse.data,
          "eng+spa",
        );

        extractedText += ocrResult.data.text + "\n";
      } catch (imgError) {
        console.warn("Error procesando imagen:", imgUrl);
      }
    }

    /* 4️⃣ Respuesta */
    res.json({
      imagesFound: imageUrls.length,
      imagesProcessed: Math.min(imageUrls.length, MAX_IMAGES),
      text: extractedText.trim(),
    });
  } catch (error) {
    console.error("ERROR GENERAL:", error.message);
    res.status(500).json({
      error: "Error al procesar la web",
    });
  }
});

app.post("/generate/pdf", (req, res) => {
  const { text } = req.body;

  if (!text) {
    return res.status(400).json({ error: "Texto requerido" });
  }

  // Crear PDF y enviarlo como descarga
  const doc = new PDFDocument();
  res.setHeader("Content-Type", "application/pdf");
  res.setHeader("Content-Disposition", "attachment; filename=resultado.pdf");

  doc.pipe(res); // canaliza el PDF directo al response

  // Dibujar fondo oscuro
  doc.rect(0, 0, doc.page.width, doc.page.height).fill("#1e1e1e"); // gris oscuro

  // Configurar color y fuente del texto
  doc
    .fillColor("#ffffff") // blanco
    .fontSize(12)
    .font("Courier") // fuente monoespaciada tipo terminal
    .text(text, {
      align: "left",
      lineGap: 4,
    });

  doc.end();
});

/* -------------------- SERVER -------------------- */
app.listen(PORT, () => {
  console.log(`🚀 Backend corriendo en http://localhost:${PORT}`);
});
