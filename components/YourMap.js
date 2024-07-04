import { StyleSheet} from 'react-native'
import React from 'react'
import tw from 'twrnc'
import MapView, {Marker} from 'react-native-maps';

const YourMap = () => {
  return (
    <MapView
    style={tw`flex-1`}
        initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
        }}
    />
  )
}

export default YourMap

const styles = StyleSheet.create({})