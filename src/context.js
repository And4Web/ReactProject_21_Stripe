import React, {useContext, useState} from 'react';
import sublinks from './data';

export const AppContext = React.createContext();

export const AppContextProvider = ({children}) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const [location, setLocation] = useState({});
  const [page, setPage] = useState({page: "", links: []});

  const openSidebar = () => {setIsSidebarOpen(true)};
  const closeSidebar = () => {setIsSidebarOpen(false)};

  const openSubmenu = (text, coordinates) => {
    const page = sublinks.find(link=>link.page === text);
    setPage(page);

    const {submenuCenter, submenuBottom} = coordinates;
    setLocation({submenuCenter, submenuBottom})
    setIsSubmenuOpen(true)
  };

  const closeSubmenu = () => {setIsSubmenuOpen(false)};
  


  return <AppContext.Provider value={{
    isSubmenuOpen, isSidebarOpen, openSubmenu, openSidebar, closeSubmenu, closeSidebar, location, page
  }}>{children}</AppContext.Provider>
}

// custom useContext Hook:
export const useGlobalContext = () => {
  return useContext(AppContext);
}