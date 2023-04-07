'use client';
import { useEffect } from 'react';

export const useGeolocation = () => {
  useEffect(() => {
    let watchId: number;

    if (navigator.geolocation) {
      //   navigator.geolocation.getCurrentPosition(updateCoordinates);
      //   watchId = navigator.geolocation.watchPosition(updateCoordinates);
    }

    return () => {
      if (watchId) {
        navigator.geolocation.clearWatch(watchId);
      }
    };
  }, []);
};
