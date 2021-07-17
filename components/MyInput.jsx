import React from "react";
import { Text, StyleSheet, View, TextInput} from "react-native";

export default ({ title, ...rest }) => {
    return (
        <View style={styles.viewInput}>
            <Text>
                {title}
            </Text>
           <TextInput style={styles.inputText} {...rest}/>
            
        </View>
    );
}

const styles = StyleSheet.create({
    inputText: {
        height: 40,
        width: 180,
        margin: 12,
        borderWidth: 1,
    },
    viewInput:{
        backgroundColor:'red',
        alignContent:'center',
        alignItems:'center',
        justifyContent:'center',
        borderWidth:3,

    }


});