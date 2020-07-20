import React, { useState } from 'react'

export const HistoryContext = React.createContext();

export const HistoryProvider = (props) => {

    const [history , setHistory] = useState([]);
    return (
        <HistoryContext.Provider  value={[history, setHistory]}>
            {props.children}
        </HistoryContext.Provider>
    )
}





