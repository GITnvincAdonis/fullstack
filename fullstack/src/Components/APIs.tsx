export async function GetItems() {
  try {
    const items = await fetch(
      `https://fullstack-production-95cf.up.railway.app/products`
    );
    console.log(items.json());
    return items.json();
  } catch (error) {
    return console.log(error);
  }
}
