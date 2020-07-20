import React, { useState } from 'react'

export const SettingContext = React.createContext();

export const SettingProvider = (props) => {

    const [settings , setSettings] = useState([]);
    return (
        <SettingContext.Provider  value={[settings, setSettings]}>
            {props.children}
        </SettingContext.Provider>
    )
}



