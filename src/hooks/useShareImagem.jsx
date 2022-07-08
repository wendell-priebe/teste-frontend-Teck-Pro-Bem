import React, { createContext, useContext, useState } from "react";

export const ShareImagemContext = createContext();

export default function ShareImagemProvider({ children }) {
    const [ shareImagem, setShareImagem] = useState();

    return(
        <ShareImagemContext.Provider
        value={{
            shareImagem,
            setShareImagem
        }}
        >
            { children }
        </ShareImagemContext.Provider>
    )
}

export function useShareImagem(){
    const context = useContext(ShareImagemContext);
    const { shareImagem, setShareImagem } = context;
    return { shareImagem, setShareImagem };
}