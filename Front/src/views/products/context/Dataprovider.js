import React from "react";
import { createContext, useState, useEffect  } from "react";
import Data from './Data.js';
export const DataContext = createContext ();
export const DataProvider = (props) => {
    const [productos, setProductos] = useState([])

    useEffect(() =>{
        const producto = Data
        setProductos(producto)
    },[])

    const value = {
        productos : [productos]
    }

    return(
        <DataContext.Provider value={value}>
            {
                props.children
            }
        </DataContext.Provider>
    )
}