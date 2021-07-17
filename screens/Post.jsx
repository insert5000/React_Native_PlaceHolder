import { View, Text, StyleSheet, Image, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import { ListItem } from "../components";

export default ({ navigation, route }) => {
  const {user_id, name} = route.params;
  const [loading, setloading] = useState(true);
  const [post, setPost] = useState([]);
console.log(user_id)
console.log(post)
  const fetchPosts = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    setPost(data);
    setloading(false);

  };
  useEffect(() => {
    fetchPosts();
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
        <FlatList
          style={styles.list}
          data={post.filter((x) => x.userId === user_id)}
          keyExtractor={(x) => String(x.id)}
          renderItem={({ item }) => (
            <ListItem
            onPress={() =>
              navigation.navigate('Details', { title:  item.title , body: item.body, name: name })
            }
              title={item.title}
            />
          )}
        ></FlatList>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    marginTop:22

  },
  list: {
    alignSelf: "stretch",
  },
  imageBackground:{
    ...StyleSheet.absoluteFillObject
  }
});
