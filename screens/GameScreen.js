import React, {useState} from 'react';
import {View,Text, StyleSheet} from 'react-native';

import NumberContainer from '../components/NumberContainer.js';
import Card from '../components/Card.js';


const generateRandomBetween = (min, max, exclude) => {

    min = Math.ceil(min);
    max = Math.floor(max);

    const rndNum = Math.floor(Math.random()*(max - min)) + min;

    if(rndNum === exclede){
        return generateRandomBetween(min, max, exclude);
    }
    else{
        return rndNum;
    }
};


const GameScreen = props => {
    const [currentGuess, setCurrentGuess] = useState(
        generateRandomBetween(1, 100, props.userChoice)
    );

    return (
        <View style={styles.screen}>
            <Text>Oppenents Guess </Text>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card styles={styles.buttonContainer}>
                <Button title="LOWER" onPress={() => {}} />
                <Button title="GREATER" onPress={() => {}} />
            </Card>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center'
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
        width: 300,
        maxWidth: '80%'
    }
});

export default GameScreen;