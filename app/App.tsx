import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

function App(): React.JSX.Element {
  const isDarkMode = true;

  return (
    <LinearGradient colors={['rgba(17, 89, 118, 0.97)', 'rgba(0, 17, 24, 0.81)']} style={styles.linearGradient}>
      <SafeAreaView style= {styles.linearGradient}>
        <StatusBar
          backgroundColor='rgba(17, 89, 118, 0.97)'
        />
        <View style= {styles.flexBackgroud}>
        <Text style={styles.headline}>Regain</Text>
        <Text style={styles.subTitle}>Get back your life</Text>
        </View>
        

      </SafeAreaView>
    </LinearGradient>
  );

}

var styles = StyleSheet.create({
  linearGradient: {
    flex: 1
  },
  flexBackgroud: {
    flex: 1,
    justifyContent: 'center'
  },
  headline: {
    fontFamily: 'Dosis-SemiBold',
    textAlign: 'center',
    fontSize: 60,
    marginTop: 0
  },
  subTitle: {
    fontFamily: 'Dosis-Regular',
    fontSize: 20,
    letterSpacing: 2.2,
    textTransform: 'uppercase',
    textAlign: 'center',
    margin: 10,
    color: 'rgba(255, 255, 255, 0.9)'
  }

});

export default App;

