import { StyleSheet} from 'react-native'
import React from 'react'
import tw from 'twrnc'
import MapView from 'react-native-maps';
import { useSelector } from 'react-redux';
import { selectOrigin } from '../slices/navslice';

const YourMap = () => {
  const origin = useSelector(selectOrigin);

  return (
    <MapView
    style={tw`flex-1`}
    mapType="mutedStandard"
        initialRegion={{
            latitude: origin.location.lat,
            longitude: origin.location.lng,
            latitudeDelta: 0.005,
            longitudeDelta: 0.005,
        }}
    />
  )
}

export default YourMap

const styles = StyleSheet.create({});