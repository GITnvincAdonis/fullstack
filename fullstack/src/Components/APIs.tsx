
export async function GetItems() {
  try {
    
    const items = await fetch(
      `https://fullstack-production-95cf.up.railway.app/products`
    );
    const data = items.json();

    
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
    return [1, 1, 1, 1];
  }
}
