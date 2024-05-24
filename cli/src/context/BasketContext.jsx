import { createContext, useState } from "react";

export const BsketContext = createContext()
export const BsketContextProvider = ({ children }) => {
    const localBasket = JSON.parse(localStorage.getItem('basket'))
    if (!localBasket) {
        localStorage.setItem('basket', JSON.stringify([]))
    }
    const [basket, setBasket] = useState(localBasket || [])
    return (
        <BsketContext.Provider value={{basket, setBasket}}>
            {children}
        </BsketContext.Provider>
    )
}