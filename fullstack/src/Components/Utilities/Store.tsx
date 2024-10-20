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
    const fetchedI = await GetCheckoutItem(id);
    if (fetchedI) set((state) => ({ fdata: [...state.fdata, fetchedI] }));
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
    name: "yy",
    price: 11,
    starcount: 11,
    review_count: 1,
  };
  const { isError, isLoading, data } = useQuery({
    queryFn: () => GetAnItem(stateID),
    queryKey: ["item", stateID],
  });
  if (!isLoading && !isError) return data;
  else return DefaultItem;
}
