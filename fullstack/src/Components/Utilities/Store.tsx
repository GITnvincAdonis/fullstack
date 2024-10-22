import { create } from "zustand";
import { GetAnItem } from "../APIs";
import { useMutation, useQueries } from "@tanstack/react-query";
import { subscribeWithSelector } from "zustand/middleware";
import { useEffect, useState } from "react";

interface itemInfo {
  id: number;
  name: string;
  price: number;
  starcount: number;
  review_count: number;
}

type checkoutItem = {
  id: number;
  count: number;
};
interface fetchedAndReturned {
  fdata: checkoutItem[];
  fdata_count: number;
  incrementAsync: (id: number) => Promise<void>;
  decrement: (id: number) => void;
}

export const useCheckoutData = create(
  subscribeWithSelector<fetchedAndReturned>((set, get) => ({
    fdata: [],
    fdata_count: 0,

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
        set((state) => ({ fdata_count: state.fdata_count + 1 }));
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
        set((state) => ({ fdata_count: state.fdata_count - 1 }));
      }
    },
  }))
);

export function GetCheckoutItems(arrayOfItems: checkoutItem[]) {
  const DefaultItem: itemInfo = {
    id: 1,
    name: "yyyy",
    price: 11,
    starcount: 11,
    review_count: 1,
  };

  const Newqueries = useQueries({
    queries: arrayOfItems.map((item) => ({
      queryFn: () => GetAnItem(item.id),
      queryKey: ["item", item.id],
      staleTime: Infinity,
    })),
  });

  const { mutateAsync: updateCart } = useMutation({
    mutationFn: async () => console.log("mutated"),
    mutationKey: ["item"],
  });

  const isLoading = Newqueries.some((query) => query.isLoading);
  const isError = Newqueries.some((query) => query.isError);
  const data = Newqueries.map((query) => query.data).filter(
    Boolean
  ) as itemInfo[];

  // Use specific state variables as dependencies, not the whole `queries` object
  if (isLoading) console.log("some things are loading");
  if (isError) console.log("error somewhere");
  if (!isError && data) {
    //console.log("store dest");
    //console.log(data);
    return { updateCart, data };
  } else {
    return { updateCart, DefaultItem };
  }
}

export function useCartItem() {
  const Checkoutitems = useCheckoutData((state) => state.fdata);
  const { updateCart, data } = GetCheckoutItems(Checkoutitems);

  const [localdata, setData] = useState<itemInfo[]>(data || []);

  useEffect(() => {
    //initallially loads state with data
    setData(data || localdata);
    const unsubscribe = useCheckoutData.subscribe((state, prevState) => {
      if (prevState.fdata_count != state.fdata_count) {
        console.log(
          `previous State: ${prevState.fdata_count}, current State: ${state.fdata_count}`
        );
        updateCart();
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    //console.log("first useeffect dest");
    //console.log(data);
    if (data) setData(data);
  }, [data?.length]);

  return { localdata, Checkoutitems };
}

type feedinfo = {
  isClicked: boolean;
  //duration: number;
  toggleClickOn: (target: boolean) => void;
  //interruptOnToggle: () => void;
};
export const useAddfeedback = create<feedinfo>((set) => ({
  isClicked: false,
  toggleClickOn: (target) => {
    set(() => ({ isClicked: target }));
  },
}));
