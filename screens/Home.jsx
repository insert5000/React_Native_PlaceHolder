import React, { useEffect, useState } from "react";
import { View, Image, Text, FlatList, StyleSheet, Button } from "react-native";
import { ListItem } from "../components";

export default function Home({ navigation }) {
  const [loading, setloading] = useState(true);
  const [users, setUsers] = useState([]);
  const URI ='https://source.unsplash.com/random'
  const fetchUsers = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    setUsers(data);
    setloading(false);
    console.log(data)
  };
  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={{uri: 'https://images.pexels.com/photos/912413/pexels-photo-912413.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}}
        style={styles.imageBackground} 
        blurRadius={ 60 }
      />
      {loading ? (
        <Text>Loading...</Text>
      ) : (
        < FlatList
          style={styles.list}
          data={users}
          keyExtractor={(x) => String(x.id)}
          renderItem={({ item }) => (
            <ListItem
              onPress={() =>
                navigation.navigate('Post', { user_id: item.id, name: item.name })
              }
              title={item.name}
            > 
            <Image style={styles.image}
            source={{uri:URI}}></Image>
            </ListItem>
          )}
        ></FlatList>
        
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    marginTop:22
    
    
  },
  list: {
    alignSelf: "stretch",
  },
  image: {
    width: 60,
    height: 60,
    backgroundColor: 'blue',
    borderRadius: 30,
    
},
imageBackground:{
  ...StyleSheet.absoluteFillObject
}

});
