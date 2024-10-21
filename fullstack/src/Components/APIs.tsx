interface itemInfo {
  id: number;
  name: string;
  price: number;
  starcount: number;
  review_count: number;
}
export const GetItems = async (): Promise<itemInfo[]> => {
  try {
    const items = await fetch(
      `https://fullstack-production-95cf.up.railway.app/products`
    );
    const data = items.json();

    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const GetAnItem = async (id: number): Promise<itemInfo> => {
  const DefaultItem: itemInfo = {
    id: 1,
    name: "yy",
    price: 11,
    starcount: 11,
    review_count: 1,
  };
  try {
    const items = await fetch(
      `https://fullstack-production-95cf.up.railway.app/products/${id}`
    );
    const data = items.json();

    //console.log(data);
    return data;
  } catch (error) {
    //console.log(error);
    return DefaultItem;
  }
};
