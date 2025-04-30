import { createContext, useContext } from "react";

export const GlobalDataContext = createContext([]);

export const useGlobalData = () => useContext(GlobalDataContext);
