import { createContext, useContext } from "react";

export const MenuContext = createContext<Boolean | undefined>(undefined);
export const SearchMenuContext = createContext<Boolean | undefined>(undefined);

export function useMenuContext() {
  const menuinView = useContext(MenuContext);
  if (menuinView === undefined) {
    throw new Error("useMenuContext must be used with MenuContext");
  }
  return menuinView;
}

export function useSearchMenuContext() {
  const searchContext = useContext(SearchMenuContext);
  if (searchContext === undefined) {
    throw new Error("useSearchMenuContext");
  }
  return searchContext;
}
