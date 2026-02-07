// import { useState } from "react";
// import styles from "./App.module.scss";
// // import Text from "./components/Text";

// function App() {
//   const [url, setUrl] = useState("");
//   const [text, setText] = useState("");
//   const [loading, setLoading] = useState(false);

//   const handleScrape = async () => {
//     setLoading(true);

//     const res = await fetch("http://localhost:3001/scrape", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ url }),
//     });

//     const data = await res.json();
//     setText(data.text);
//     setLoading(false);
//   };

//   const downloadPDF = async () => {
//     if (!text) return; // evitar descargar vacío

//     const res = await fetch("http://localhost:3001/generate/pdf", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ text }),
//     });

//     const blob = await res.blob();
//     const url = window.URL.createObjectURL(blob);

//     const a = document.createElement("a");
//     a.href = url;
//     a.download = "resultado.pdf";
//     a.click();

//     window.URL.revokeObjectURL(url);
//   };

//   return (
//     <div
//       className="min-h-screen flex flex-col items-center justify-center"
//       id="container"
//     >
//       <div
//         className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md h-48 mb-6"
//         id="card"
//       ></div>
//       <h2>Scrapear imagenes</h2>
//       <input
//         className={styles.input}
//         style={{ width: "60%" }}
//         placeholder="https://ejemplo.com"
//         value={url}
//         onChange={(e) => setUrl(e.target.value)}
//       />
//       <br />
//       <br />
//       <button onClick={handleScrape} disabled={loading}>
//         {loading ? "Procesando..." : "Scrapear"}
//       </button>
//       {/* <Text text={text} loading={loading} /> */}
//       {text.length > 0 && (
//         <button className={styles.button} onClick={downloadPDF}>
//           Descargar PDF
//         </button>
//       )}
//       &nbsp;
//     </div>
//   );
// }

// export default App;
