/* eslint-disable prettier/prettier */
// import {StyleSheet, Text, View} from 'react-native';
import React, {FC, PropsWithChildren, createContext, useState} from 'react';

import AppWrite from './service';

type AppContextType = {
  App: AppWrite;
  isLoggedIn: Boolean;
  setIsLoggedIn: (isLoggedIn: boolean) => void;
};

export const AppWriteContext = createContext<AppContextType>({
  App: new AppWrite(),
  isLoggedIn: false,
  setIsLoggedIn: () => {},
});

export const AppWriteProvider: FC<PropsWithChildren> = ({children}) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const defaultValue = {
    App: new AppWrite(),
    isLoggedIn,
    setIsLoggedIn,
  };
  return (
    <AppWriteContext.Provider value={defaultValue}>
      {children}
    </AppWriteContext.Provider>
  );
};

export default AppWriteContext;
