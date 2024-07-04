import { StyleSheet, SafeAreaView, View, Image } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import NavOptions from '../components/NavOptions'

const HomeScreen = () => {
  return (
    <SafeAreaView style={tw`bg-white h-full w-full`}>
      {/* <Text style={tw`text-gray-900 text-lg font-bold`}>HomeScreen</Text> */}
      <View style={tw`flex-1 p-6`}>
        <Image
          source={{ uri: "https://simonimageurl.netlify.app/images/UberLogo.png" }}
          style={[tw`rounded-lg `, { width: 80, height: 40}]} 
        />
      </View>
      
      <NavOptions/>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  text: {}
});
