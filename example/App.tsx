import { StyleSheet, Text, View } from 'react-native';

import * as CallbackModule from 'callback-module';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>{CallbackModule.hello()}</Text>
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
