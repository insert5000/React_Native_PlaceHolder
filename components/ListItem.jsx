import { TouchableOpacity, Text, StyleSheet, Image, View, Animated, Button } from "react-native";
import React from "react";
import { useEffect, useRef } from "react/cjs/react.development";

export default ({ title, onPress, children }) => {
    const fadeAnim = useRef(new Animated.Value(0)).current;

    const fadeIn = () => {
        // Will change fadeAnim value to 1 in 5 seconds
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 5000
        }).start();
      };
    
     

    return (
        
        <TouchableOpacity onPress={onPress} style={styles.container}>
            
                {children}
            
            <Text style={styles.text}>
                {title}
            </Text>
            
        </TouchableOpacity>
        
    );
}

const styles = StyleSheet.create({
    container: {
        height: 75,
        paddingHorizontal: 35,
        borderRadius: 15,
        marginHorizontal: 15,
        marginVertical: 10,
        flexDirection: 'row',
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.3,
        shadowRadius: 12.35,
        elevation: 19,
        backgroundColor:'white'
    },
    test:{...StyleSheet.absoluteFillObject},
    text: {
        fontSize: 17,
        color: '#80838a',
        marginLeft: 15,
        textTransform:"capitalize"
        },
    image: {
        width: 60,
        height: 60,
        backgroundColor: 'blue',
        borderRadius: 30,
    }
})