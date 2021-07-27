import React from 'react';

const defaultValue = {
    cart: 0,
    setCart: null
};

const ValueContext = React.createContext(defaultValue);

export default ValueContext;