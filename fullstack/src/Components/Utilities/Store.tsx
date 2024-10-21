import { create } from "zustand";
// import { GetAnItem } from "../APIs";
// import { useQuery } from "@tanstack/react-query";

interface checkoutItem {
  id: number;
  count: number;
}
type fetchedAndReturned = {
  fdata: checkoutItem[];
  incrementAsync: (id: number) => Promise<void>;
  decrement: (id: number) => void;
};

export const useCheckoutData = create<fetchedAndReturned>((set, get) => ({
  fdata: [],
  incrementAsync: async (id: number) => {
    const stateData = get().fdata;
    const itemAtId = stateData.find((item) => item.id === id);
    if (itemAtId) {
      itemAtId.count++;
    } else {
      const newItem: checkoutItem = {
        id: id,
        count: 1,
      };
      set((state) => ({ fdata: [...state.fdata, newItem] }));
    }
  },
  decrement: (id: number) => {
    const stateData = get().fdata;
    const itemAtId = stateData.find((item) => item.id === id);
    if (itemAtId) {
      itemAtId.count--;
    }
    if (itemAtId?.count === 0) {
      set((state) => ({
        fdata: state.fdata.filter((item) => item !== itemAtId),
      }));
    }
  },
}));

// function GetCheckoutItem(stateID: number) {
//   const DefaultItem: itemInfo = {
//     id: 1,
//     name: "yyyy",
//     price: 11,
//     starcount: 11,
//     review_count: 1,
//   };
//   const { isError, isLoading, data, error } = useQuery({
//     queryFn: () => GetAnItem(stateID),
//     queryKey: ["item", stateID],
//   });
//   if (isLoading) console.log("is loading");
//   if (isError) {
//     console.log("error occurred: " + error);
//     return DefaultItem;
//   }
//   if (!isError) {
//     console.log("store dest");
//     console.log(data);
//     return data;
//   }
// }
