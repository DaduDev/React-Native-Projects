/* eslint-disable prettier/prettier */
import React, {useState, useContext, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AppWriteContext} from '../appwrite/AppWriteContext';
import Loading from '../components/Loading';
import {AppStack} from './AppStack';
import {AuthStack} from './AuthStack';

const Router = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const {App, isLoggedIn, setIsLoggedIn} = useContext(AppWriteContext);
  useEffect(() => {
    App.getCurrentUser()
      .then(response => {
        setIsLoading(false);
        if (response) {
          setIsLoggedIn(true);
        }
      })
      .catch(_ => {
        setIsLoading(false);
        setIsLoggedIn(false);
      });
  }, [App, setIsLoggedIn]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <NavigationContainer>
      {isLoggedIn ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default Router;
