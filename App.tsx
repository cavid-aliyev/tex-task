import React from 'react';
import {store} from './src/store';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import Routes from './src/navigation/Routes';
import Header from './src/ui/Header';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Header />
        <Routes />
      </NavigationContainer>
    </Provider>
  );
}

export default App;
