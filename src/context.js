import React, {useContext, useState} from 'react';
import sublinks from './data';

export const AppContext = React.createContext();

export const AppContextProvider = ({children}) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(true);
  
  const openSidebar = () => {setIsSidebarOpen(true)};
  const closeSidebar = () => {setIsSidebarOpen(false)};

  const openSubmenu = () => {setIsSubmenuOpen(true)};
  const closeSubmenu = () => {setIsSubmenuOpen(false)};

  


  return <AppContext.Provider value={{
    isSubmenuOpen, isSidebarOpen, openSubmenu, openSidebar, closeSubmenu, closeSidebar
  }}>{children}</AppContext.Provider>
}

// custom useContext Hook:
export const useGlobalContext = () => {
  return useContext(AppContext);
}