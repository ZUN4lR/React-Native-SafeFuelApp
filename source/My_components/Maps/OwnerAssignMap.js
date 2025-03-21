import React, { useEffect, useState } from "react";
import { View, Text, Alert } from "react-native";
import MapView, { Marker, Polyline } from "react-native-maps";
import Geolocation from "react-native-geolocation-service";
import axios from "axios";

const OwnerAssignMap = () => {
  const [currentLocation, setCurrentLocation] = useState(null);
  const [startLocation, setStartLocation] = useState({
    latitude: 37.7749,
    longitude: -122.4194,
  }); // Example: San Francisco
  const [endLocation, setEndLocation] = useState({
    latitude: 37.7849,
    longitude: -122.4094,
  }); // Example: Another point in SF
  const [routeCoords, setRouteCoords] = useState([]);

  useEffect(() => {
    // Get user's current location
    Geolocation.getCurrentPosition(
      (position) => {
        setCurrentLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      },
      (error) => console.log(error),
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
    );

    // Fetch route between start and end locations
    fetchRoute();
    
    // Check user position every minute
    const interval = setInterval(checkUserOnPath, 60000);

    return () => clearInterval(interval);
  }, []);

  const fetchRoute = async () => {
    try {
      const url = `https://router.project-osrm.org/route/v1/driving/${startLocation.longitude},${startLocation.latitude};${endLocation.longitude},${endLocation.latitude}?overview=full&geometries=geojson`;
      const response = await axios.get(url);
      const coords = response.data.routes[0].geometry.coordinates.map(coord => ({
        latitude: coord[1],
        longitude: coord[0]
      }));
      setRouteCoords(coords);
    } catch (error) {
      console.error("Error fetching route:", error);
    }
  };

  const checkUserOnPath = () => {
    if (!currentLocation || routeCoords.length === 0) return;
    
    let minDistance = Number.MAX_VALUE;

    routeCoords.forEach((point) => {
      const distance = getDistance(currentLocation, point);
      if (distance < minDistance) minDistance = distance;
    });

    if (minDistance > 50) {
      Alert.alert("Alert", "You are not on the same path!");
    }
  };

  const getDistance = (loc1, loc2) => {
    const R = 6371e3; // Earth's radius in meters
    const lat1 = (loc1.latitude * Math.PI) / 180;
    const lat2 = (loc2.latitude * Math.PI) / 180;
    const deltaLat = lat2 - lat1;
    const deltaLng = ((loc2.longitude - loc1.longitude) * Math.PI) / 180;

    const a =
      Math.sin(deltaLat / 2) * Math.sin(deltaLat / 2) +
      Math.cos(lat1) * Math.cos(lat2) *
      Math.sin(deltaLng / 2) * Math.sin(deltaLng / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    return R * c;
  };

  return (
    <View style={{ flex: 1 }}>
      {currentLocation && (
        <MapView
          style={{ flex: 1 }}
          initialRegion={{
            latitude: startLocation.latitude,
            longitude: startLocation.longitude,
            latitudeDelta: 0.05,
            longitudeDelta: 0.05,
          }}
        >
          {/* Start and End Markers */}
          <Marker coordinate={startLocation} title="Start" />
          <Marker coordinate={endLocation} title="End" />
          <Marker coordinate={currentLocation} title="You" pinColor="blue" />

          {/* Route Polyline */}
          <Polyline coordinates={routeCoords} strokeWidth={5} strokeColor="blue" />
        </MapView>
      )}
    </View>
  );
};

export default OwnerAssignMap;
