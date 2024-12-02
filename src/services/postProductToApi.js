import { getProductsFromAPI } from "./getProductsFromAPI";

export async function postProductToAPI(data) {
  try {
    // TODO: error handler for empty data

    const res = await fetch("http://localhost:3000/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!res.ok) throw new Error("Sending was failed");

    const data = await getProductsFromAPI();
    return data;
  } catch (err) {
    console.error("⛔️", err);
  }
}
