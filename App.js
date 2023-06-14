import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  SafeAreaView,
  TouchableOpacity
} from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import React, { useState } from 'react';
import { EvilIcons } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';

const Separator = () => {
  return <View style={styles.separator} />;
};


export default function App() {

  function InstaCard({ git }) {

    const [like, setLike] = useState(false);
    const [like2, setLike2] = useState(false);
    return (

      <View>
        <View style={{
          flex: 1,
          flexDirection: 'row',
          padding: 15,
          alignItems: 'center',
          marginTop: 30
        }}>
          <Image
            style={{ width: 40, height: 40, borderRadius: 20, marginRight: 15 }}
            source={{ uri: 'https://github.com/Talles-Souza.png' }}
          />
          <Text>{git}</Text>
        </View>
        <View>
          <Image
            style={{ width: '100%', height: 300 }}
            source={{ uri: 'https://github.com/Talles-Souza.png' }}
          />
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
          <TouchableOpacity onPress={() => setLike(!like)}>
            {like ? (
              <Entypo name="heart-outlined" size={24} color="black" />
            ) : (
              <Entypo name="heart" size={24} color="black" />
            )}
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setLike2(!like2)}>
            {like2 ?
              (
                <EvilIcons name="like" size={24} color="black" />
              )
              : (
                <Foundation name="like" size={24} color="black" />
              )
            }
          </TouchableOpacity>

        </View>
      </View>
    );
  }



  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {['Talles-Souza', 'asdasd', 'sdasdfasdas'].map((gitHub) => <InstaCard key={gitHub} git={gitHub} />)}
      </ScrollView>

    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  separator: {
    height: 1,
    backgroundColor: 'black',
    marginVertical: 10, // Ajuste o valor conforme necessário
  }
});
