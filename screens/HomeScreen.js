import { StyleSheet, SafeAreaView, View, Image } from 'react-native';
import React from 'react';
import tw from 'twrnc';
import NavOptions from '../components/NavOptions';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_APIKEY } from '@env';
import {useDispatch} from "react-redux"
import{setDestination, setOrigin} from "../slices/navslice"

const HomeScreen = () => {
  const dispatch =useDispatch();
  return (
    <SafeAreaView style={tw`bg-white h-full w-full`}>
      <View style={tw`flex-1 p-4`}>
        <Image
          source={{ uri: 'https://simonimageurl.netlify.app/images/UberLogo.png' }}
          style={[tw`rounded-lg`, { width: 140, height: 80, resizeMode: '' }]}
        />
        <GooglePlacesAutocomplete
          placeholder="Where from ?"
          styles={{
            container: {
              flex: 0,
            },
            textInput: {
              fontSize: 18,
            },
          }}
          onPress={(data, details = null) =>{
            dispatch(setOrigin({
              location:details.geometry.location,
              description:data.description
            }))
            dispatch(setDestination(null))
          }
          }
          fetchDetails={true}
          returnKeyType={"search"}
          enablePoweredByContainer={false}
          minLength={2}
          nearbyPlacesAPI="GooglePlacesSearch"
          query={{
            key: GOOGLE_MAPS_APIKEY,
            language: 'en',
          }}
          debounce={400}
        />
        <NavOptions />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  text: {},
});
