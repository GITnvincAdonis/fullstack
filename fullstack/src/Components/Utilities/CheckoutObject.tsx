import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { GetAnItem } from "../APIs";

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

//local array
const item: IndexedItem[] = [
  { id: 1, count: 1 },
  { id: 2, count: 2 },
];
const returnedItem: itemInfo[] = [];

async function GetCheckoutItems() {
  const fetchedItemsPromises = item.map(async (item) => {
    const fetchedItems = await GetAnItem(item.id);

    const inReturnArray = returnedItem.find(
      (return_item) => return_item.id === item.id
    );

    if (!inReturnArray) returnedItem.push(fetchedItems[0]);
    console.log(item.count); // Optional log
  });

  // Wait for all promises to resolve
  await Promise.all(fetchedItemsPromises);
}


export function CheckOutDataContainer() {
  const { isError, error, isLoading } = GlobalUseQuery();
  if (isError) console.log(`error occurred: ${error}`);
  if (isLoading) console.log(`is loading`);

  return returnedItem;
}




const GlobalUseQuery = () => {
  const { isError, isLoading, error } = useQuery({
    queryFn: async () => {
      GetCheckoutItems();
    },
    queryKey: ["checkout"],
  });
  return { isError, isLoading, error };
};


const GlobalMutate = () => {
  const querClient = useQueryClient();
  const { mutateAsync } = useMutation({
    mutationFn: async () => {
      console.log("mutated");
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
