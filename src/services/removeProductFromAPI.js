import { getProductsFromAPI } from "./getProductsFromAPI";

export async function removeProductFromAPI(id) {
  try {
    const res = await fetch(`http://localhost:3000/products/${id}`, {
      method: "DELETE",
    });
    if (!res.ok) throw new Error("Deleting was failed");

    const data = await getProductsFromAPI();
    return data;
    return newData;
  } catch (err) {
    console.error("⛔️", err);
  }
}
