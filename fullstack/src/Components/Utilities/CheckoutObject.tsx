import { useMutation, useQueryClient, useQueries } from "@tanstack/react-query";
import { GetAnItem } from "../APIs";
import { useState, useEffect } from "react";

interface IndexedItem {
  id: number;
  count: number;
}
interface itemInfo {
  id: number;
  name: string;
  price: number;
  starcount: number;
  review_count: number;
}

// Local array for item counts
const initialItems: IndexedItem[] = [
  { id: 1, count: 1 },
  { id: 2, count: 2 },
];

// Main Checkout Data Component
export function CheckOutDataContainer() {
  const [itemArray, _setItemArray] = useState<IndexedItem[]>(initialItems);
  const [returnedItem, setReturnedItem] = useState<itemInfo[]>([]);

  // Fetch data for each item using useQueries
  const queries = useQueries({
    queries: itemArray.map((item) => ({
      queryFn: () => GetAnItem(item.id), // Ensure this function returns a promise
      queryKey: ["checkout", item.id],
      staleTime: Infinity,
    })),
  });

  const isLoading = queries.some((query) => query.isLoading);
  const isError = queries.some((query) => query.isError);
  const data = queries
    .map((query) => query.data)
    .filter(Boolean) as unknown as itemInfo[];

  // Use specific state variables as dependencies, not the whole `queries` object
  useEffect(() => {
    if (isLoading) {
      console.log("is loading");
      return;
    }

    if (isError) {
      console.log("error occurred");
      return;
    }

    // If there's new data, update returnedItem
    if (data.length > 0) {
      console.log("changing queries object");
      setReturnedItem(data);
    }
  }, [isLoading, isError, data.length]);

  return returnedItem.flat(1);
}

// Mutation for invalidating queries
const useGlobalMutate = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async () => {
      console.log("mutated");
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["checkout"] });
    },
  });
};

// Function to add item to the local array and trigger mutation
export function AddToLocalArray() {
  const { mutateAsync } = useGlobalMutate();
  const [itemArray, setItemArray] = useState<IndexedItem[]>(initialItems);

  const addItem = async (index: number) => {
    const itemToUpdate = itemArray.find((item) => item.id === index);
    if (itemToUpdate) {
      setItemArray((prev) =>
        prev.map((item) =>
          item.id === index ? { ...item, count: item.count + 1 } : item
        )
      );
    } else {
      const newItem: IndexedItem = { id: index, count: 1 };
      setItemArray((prev) => [...prev, newItem]);
    }

    // Trigger mutation to invalidate queries
    await mutateAsync();
  };

  return { addItem, itemArray };
}

// Function to decrement item count or remove from array
export function DecrementLocalArray() {
  const [itemArray, setItemArray] = useState<IndexedItem[]>(initialItems);

  const decrementItem = (index: number) => {
    const itemToUpdate = itemArray.find((item) => item.id === index);
    if (itemToUpdate && itemToUpdate.count > 1) {
      setItemArray((prev) =>
        prev.map((item) =>
          item.id === index ? { ...item, count: item.count - 1 } : item
        )
      );
    } else if (itemToUpdate && itemToUpdate.count === 1) {
      setItemArray((prev) => prev.filter((item) => item.id !== index));
    }
  };

  return { decrementItem, itemArray };
}
