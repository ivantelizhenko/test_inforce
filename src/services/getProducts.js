export async function getProducts() {
  try {
    const res = await fetch("http://localhost:3000/products");
    if (!res.ok) throw new Error("Fetch was failed");
    const data = await res.json();
    return data;
  } catch (err) {
    console.error("⛔️", err);
  }
}
