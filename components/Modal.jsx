import React, {  useState } from "react";
import {
  View,
  Modal,
  StyleSheet,
  TextInput,
  Text,
  Button,
  Alert,
} from "react-native";
import { DatabaseConnection } from "../database/connection";

const db = DatabaseConnection.getConnection();
export default ({ visibility, children }) => {
  const [course, setCourse] = useState("");
  const [visible, setVisible] = useState(false);

  let registerCourse = () => {
    console.log(course);
    db.transaction(function (tx) {
      tx.executeSql(
        "INSERT INTO table_course(course) VALUES (?)",
        [course],
        (tx, results) => {
          console.log("Results", results.rowsAffected);
          if (results.rowsAffected > 0) {
            Alert.alert("Sucess", "Course register", [
              {
                text: "OK",
              },
            ]);
          } else alert("Error¡");
        }
      );
    });
  };

  return (
    <Modal
    
      animationType="slide"
      transparent={true}
      visible={visibility}
      
    >
      <View style={styles.center}>
          <View style={styles.modalView}>
          {children}

          </View>
          
          </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
  },
  input: {
    height: 40,
    width: 180,
    margin: 12,
    borderWidth: 1,
  },
  modalView:{
      backgroundColor:'blue',
      borderRadius:4,
      padding:20,
      shadowColor:'#000',
      shadowOffset:{
          width:0,
          height:3,
      },
  }
});
