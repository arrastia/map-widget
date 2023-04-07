'use client';
import { useEffect, useRef } from 'react';

import mapBox from 'mapbox-gl';

import type { Map } from 'mapbox-gl';

mapBox.accessToken = 'pk.eyJ1IjoibmV2Zmx5bm4iLCJhIjoiY2ttcTJlbHptMms0cjJ2cW9uaGxxNjI0NSJ9.RJAjJtHGrGB43W_XaylAnA';

const ATARRABIA_LATITUDE = 42.83;
const ATARRABIA_LONGITUDE = -1.61;
const center: [number, number] = [ATARRABIA_LATITUDE, ATARRABIA_LONGITUDE];
const MAP_ZOOM = 11;
const styles = 'mapbox://styles/mapbox/streets-v11';

export const useMap = () => {
  //   const isDarkMode = useRecoilValue(isDarkModeState);

  const map = useRef<Map | null>(null);
  const mapContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (map.current) return;

    async function addMarker() {
      new mapBox.Marker()
        .setLngLat([ATARRABIA_LONGITUDE, ATARRABIA_LATITUDE])
        .setDraggable(true)
        .addTo(map.current as Map);
    }

    map.current = new mapBox.Map({ center, container: mapContainer.current || '', style: styles, zoom: MAP_ZOOM });
    addMarker();
  });

  useEffect(() => {
    map.current?.flyTo({ center: [ATARRABIA_LONGITUDE, ATARRABIA_LATITUDE], zoom: MAP_ZOOM });
  }, []);

  return mapContainer;
};
