import React from 'react';
import { View, StyleSheet} from 'react-native';

const Card = props => {
    return (
        // ...styles.card, ...props.style == is to override Card component into props.style
        <View style={{ ...styles.card, ...props.style }}>{props.children}</View>
    );
};

const styles = StyleSheet.create({
    card: {
        //all shadow = IOS,  and elavation = convert into ANDROID
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2},
        shadowRadius: 6,
        shadowOpacity: 0.26,
        elevation: 8,
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10
    }
});

export default Card;
