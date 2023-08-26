import React, {useContext} from 'react';

export const AppContext = React.createContext();

export const AppContextProvider = ({children}) => {
  return <AppContext.Provider value={{
    firstEl: "this is first element",
    secondEl: "this is second element",
    thirdEl: "this is third element"
  }}>{children}</AppContext.Provider>
}

// custom useContext Hook:
export const useGlobalContext = () => {
  return useContext(AppContext);
}