import { create } from "zustand";
// import { GetAnItem } from "../APIs";
// import { useQuery } from "@tanstack/react-query";

type checkoutItem = {
  id: number;
  count: number;
};
type fetchedAndReturned = {
  fdata: checkoutItem[];
  incrementAsync: (id: number) => Promise<void>;
  decrement: (id: number) => void;
};

export const useCheckoutData = create<fetchedAndReturned>((set, get) => ({
  fdata: [{ id: 2, count: 1 }],
  incrementAsync: async (id: number) => {
    const stateData = get().fdata;
    const itemAtId = stateData.find((item) => item.id === id);
    if (itemAtId) {
      const updatedFdata = stateData.map((item) => {
        if (item.id === id) {
          return {
            ...item, // Spread the current properties of the item
            count: item.count + 1, // Increment the count property
          };
        }
        return item; // Return the item unchanged if the id doesn't match
      });

      // Update the state with the modified array
      set((_state) => ({ fdata: updatedFdata }));
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
    if (itemAtId && itemAtId?.count > 1) {
      const updatedFdata = stateData.map((item) => {
        if (item.id === id) {
          return {
            ...item, // Spread the current properties of the item
            count: item.count - 1, // Increment the count property
          };
        }
        return item; // Return the item unchanged if the id doesn't match
      });

      // Update the state with the modified array
      set((_state) => ({ fdata: updatedFdata }));
    }
    if (itemAtId && itemAtId.count == 1) {
      console.log("at 0");
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
