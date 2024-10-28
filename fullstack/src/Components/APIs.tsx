interface itemInfo {
  id: number;
  name: string;
  price: number;
  starcount: number;
  review_count: number;
  image_pub_id: string;
}
export const GetItems = async (): Promise<itemInfo[]> => {
  try {
    const items = await fetch(`${import.meta.env.VITE_FETCH_ORIGIN}/products`);
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
    image_pub_id: "yoo",
  };
  try {
    const items = await fetch(
      `${import.meta.env.VITE_FETCH_ORIGIN}/products/${id}`
    );
    const data = items.json();

    //console.log(data);
    return data;
  } catch (error) {
    //console.log(error);
    return DefaultItem;
  }
};
