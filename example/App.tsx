import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import * as CallbackModule from 'callback-module';

export default function App() {
  const callback = () => console.log('CALLBACK')
  const onPress = () => CallbackModule.sendCallback(callback)
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <Text>{CallbackModule.hello()}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
