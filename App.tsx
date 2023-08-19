import React from 'react';
import {Text, View} from 'react-native';
import {store} from './src/store';
import {Provider} from 'react-redux';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <View>
        <Text>ssssss</Text>
      </View>
    </Provider>
  );
}

export default App;
