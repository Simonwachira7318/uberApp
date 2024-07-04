import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import tw from 'twrnc'
import { Icon } from '@rneui/base';
import { useNavigation } from '@react-navigation/native';

const data= [
  {
    id: "123",
    title: "Get a ride",
    Image: "https://simonimageurl.netlify.app/images/uberX.png",
    screen: "MapScreen"

  },
  {
    id: "466",
    title: "Order Food",
    Image: "https://simonimageurl.netlify.app/images/rider.png",
    screen: "EatScreen"
  }
]

const NavOptions = () => {
  const navigation = useNavigation();
  return (
    <FlatList 
      data={data}
      horizontal
      keyExtractor={(item) => item.id}
      renderItem={({item}) =>(
        <TouchableOpacity 
          onPress={() =>navigation.navigate(item.screen)}
          style={tw`p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40 h-60 rounded-md`}>
            <View>
            <Image
              style={{width: 120, height:120, resizeMode: "contain"}}
              source={{uri: item.Image}}
            />
            <Text style={tw`mt-2 text-lg font-extrabold`}>{item.title}</Text>
            <Icon style={tw`p-1 bg-gray-800 rounded-full w-8 mt-4`} name='arrowright' color="white" type="antdesign"/>
            </View>
        </TouchableOpacity>
      )
      } 
    />
  )
}

export default NavOptions

const styles = StyleSheet.create({})