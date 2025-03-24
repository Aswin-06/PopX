import { createContext, useState } from "react";


export const DataContext = createContext();


export function DataProvider({ children }) {
    
    const [data,changedata]=useState({name:"Marry Doe",phone:"Marry Doe",email:"Marry Doe",password:"Marry Doe",comp:"Marry Doe"});

    return (
        <DataContext.Provider value={{ data, changedata }}>
            {children}
        </DataContext.Provider>
    );
}
