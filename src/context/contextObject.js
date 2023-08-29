import React from 'react'

const ContextObject = React.createContext({
    currentCategory: "Home",
    changeCategory: () => {},
    showSidebar: true,
    toggleSidebar: () => {},
});

export default ContextObject