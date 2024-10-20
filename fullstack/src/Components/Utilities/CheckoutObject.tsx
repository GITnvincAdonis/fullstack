import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { GetAnItem } from "../APIs";

interface IndexedItem {
  id: number;
  count: number;
}
// interface itemInfo {
//   id: number;
//   name: string;
//   price: number;
//   starcount: number;
//   review_count: number;
// }

//local array
const item: IndexedItem[] = [
  { id: 1, count: 1 },
  { id: 2, count: 2 },
];
//const returnedItem: itemInfo[] = [];

export function CheckOutDataContainer() {
  const { data, isError, error, isLoading } = GlobalUseQuery(1);
  if (isError) console.log(`error occurred: ${error}`);
  if (isLoading) console.log(`is loading`);

  return data;
}

const GlobalUseQuery = (id: number) => {
  const { data, isError, isLoading, error } = useQuery({
    queryFn: async () => {
      return await GetAnItem(id);
    },
    queryKey: ["checkout", id],
  });
  return { data, isError, isLoading, error };
};

const GlobalMutate = () => {
  const querClient = useQueryClient();
  const { mutateAsync } = useMutation({
    mutationFn: async () => {
      //console.log("mutated");
    },
    onSuccess: () => {
      querClient.invalidateQueries({ queryKey: ["checkout"] });
    },
  });
  return { mutateAsync };
};

export function AddToLocalArray(index: number) {
  const itemToUpdate = item.find((item) => item.id === index);
  if (itemToUpdate) {
    itemToUpdate.count++;
  } else {
    const newItem: IndexedItem = { id: index, count: 1 };
    item.push(newItem);
    GlobalMutate();
  }
}

export function decrementLocalArray(index: number) {
  const itemToUpdate = item.find((item) => item.id === index);

  if (itemToUpdate !== undefined && itemToUpdate.count > 1) {
    itemToUpdate.count--;
  } else if (itemToUpdate && itemToUpdate.count == 1) {
    const indexOfItem = item.findIndex((item) => item.id === index);
    item.splice(indexOfItem, 1);
  }
}
