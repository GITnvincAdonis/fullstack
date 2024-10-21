import { create } from "zustand";
// import { GetAnItem } from "../APIs";
// import { useQuery } from "@tanstack/react-query";

type fetchedAndReturned = {
  fdata: number[];
  incrementAsync: (id: number) => Promise<void>;
  decrement: (id: number) => void;
};

export const useCheckoutData = create<fetchedAndReturned>((set) => ({
  fdata: [0],
  incrementAsync: async (id: number) => {
    set((state) => ({ fdata: [...state.fdata,id] }));
  },
  decrement: (id: number) => {
    set((state) => ({
      fdata: state.fdata.filter((item) => item !== id),
    }));
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
