export const downloadPDF = async (text: string) => {
  const res = await fetch("http://localhost:3001/generate/pdf", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text }),
  });

  const blob = await res.blob();
  const url = window.URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = "resultado.pdf";
  a.click();

  window.URL.revokeObjectURL(url);
};
