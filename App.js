import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';

export default function App() {
  const [userNumber, setUserNumber] = useState();

  const startGamehandler = (selectedNumber) => {
    setUserNumber(selectedNumber);
  }

  let content = <StartGameScreen onStartGame={startGamehandler} />

  if (userNumber){
    content = <GameScreen userChoice={userNumber}/>
  }

  return (
    <View style={styles.screen}>
      <Header title="Guess a Number!"/>
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});
