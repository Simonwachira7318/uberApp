import { StyleSheet, View } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import YourMap from '../components/YourMap'
// import MapView, {Marker} from 'react-native-maps';

const MapScreen = () => {
  return (
    <View>
    {/* map  */}
      <View style={tw`h-1/2`}>
          <YourMap/>
      </View>

    {/* pricing view */}
      <View style={tw`h-1/2`}>

      </View>
    </View>
  )
}

export default MapScreen

const styles = StyleSheet.create({})