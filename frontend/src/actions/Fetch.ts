const FetchFunction = async (url: string, data?: unknown) => {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    throw new Error("Error fetching data");
  }
  return response.json();
};

export default FetchFunction;
