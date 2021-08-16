import React, { useState, useEffect } from 'react';
import {Image, View, Platform } from 'react-native';
import {Button, Text} from 'react-native-paper';
import * as ImagePicker from 'expo-image-picker';

export default function ImagePickerExample() {
  const [image, setImage] = useState(null);

  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  return (
    //style={{ alignItems: 'center', justifyContent: 'center' }}
    <View style={{marginTop:20,width:210, borderRadius:100,alignSelf:'center'}}>
      <Button  mode="contained" onPress={pickImage}>
       <Text style={{color:'white'}}>Pick image from gallry</Text>
      </Button>  

      <View style={{marginTop:10}}>
      {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
      </View>
    </View>
  );
}