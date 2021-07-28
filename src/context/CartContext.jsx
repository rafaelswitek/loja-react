import React, { useContext, useState } from 'react';

const CartContext = React.createContext({});

const CartProvider = ({ children }) => {
    const dataStorage = localStorage.getItem("cartData");

    const initialData = dataStorage ? JSON.parse(dataStorage) : [];

    const [cartData, setCartData] = useState(initialData);

    const changeCartData = (data) => {
        setCartData(data);
        localStorage.setItem("cartData", JSON.stringify(data));
    }

    const valueData = {
        cartData,
        changeCartData
    };

    return <CartContext.Provider value={valueData} >{children}</CartContext.Provider>

}

function useCart() {

    const context = useContext(CartContext);

    if (!context) {
        throw new Error('useContext must be used in CartProvider');
    }

    return context;

}

export { CartContext, CartProvider, useCart };