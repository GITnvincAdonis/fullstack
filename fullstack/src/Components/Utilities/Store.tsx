import { create } from "zustand";
import { GetAnItem } from "../APIs";
import { useQuery } from "@tanstack/react-query";

interface itemInfo {
  id: number;
  name: string;
  price: number;
  starcount: number;
  review_count: number;
}

type fetchedAndReturned = {
  fdata: itemInfo[];
  incrementAsync: (id: number) => Promise<void>;
  decrement: (id: number) => void;
};

export const useCheckoutData = create<fetchedAndReturned>((set) => ({
  fdata: [
    {
      id: 1,
      name: "yy",
      price: 11,
      starcount: 11,
      review_count: 1,
    },
  ],
  incrementAsync: async (id: number) => {
    try {
      const fetchedI = GetCheckoutItem(id);
      console.log("zustand dest / fetched item: ");
      console.log(fetchedI);
      if (fetchedI) set(() => ({ fdata: [fetchedI] }));
    } catch (error) {
      console.log(error);
    }
  },
  decrement: (id: number) => {
    set((state) => ({
      fdata: state.fdata.filter((item) => item.id !== id), // Remove item by id
    }));
  },
}));

function GetCheckoutItem(stateID: number) {
  const DefaultItem: itemInfo = {
    id: 1,
    name: "yyyy",
    price: 11,
    starcount: 11,
    review_count: 1,
  };
  const { isError, isLoading, data, error } = useQuery({
    queryFn: () => GetAnItem(stateID),
    queryKey: ["item", stateID],
  });
  if (isLoading) console.log("is loading");
  if (isError) {
    console.log("error occurred: " + error);
    return DefaultItem;
  }
  if (!isError) {
    console.log("store dest");
    console.log(data);
    return data;
  }
}
