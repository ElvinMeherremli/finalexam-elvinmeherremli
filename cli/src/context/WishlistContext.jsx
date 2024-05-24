import { createContext, useState } from "react";

export const WishlistContext = createContext()
export const WishlistContextProvider = ({ children }) => {
    const localWish = JSON.parse(localStorage.getItem('wish'))
    if (!localWish) {
        localStorage.setItem('wish', JSON.stringify([]))
    }
    const [wish, setWish] = useState(localWish || [])
    return (
        <WishlistContext.Provider value={{wish, setWish}}>
            {children}
        </WishlistContext.Provider>
    )
}