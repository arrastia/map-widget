'use client';
import { Fragment, useEffect, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';

import mapBox from 'mapbox-gl';

import 'styles/map.css';
import styles from './Map.module.css';

import { Marker } from './components/Marker';

import type { Map as MapType } from 'mapbox-gl';

const ATARRABIA_LATITUDE = 42.83;
const ATARRABIA_LONGITUDE = -1.61;

const center: [number, number] = [ATARRABIA_LONGITUDE, ATARRABIA_LATITUDE];
const MAP_ZOOM = 14;
const style = 'mapbox://styles/mapbox/streets-v12';
// const style = 'mapbox://styles/mapbox/dark-v11';

type MapProps = { city?: string; coordinates?: [number, number]; token: string };

export const Map = ({ city, coordinates, token }: MapProps) => {
  const [map, setMap] = useState<MapType>();

  const mapContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const map = new mapBox.Map({
      accessToken: token,
      center: [-87.637596, 41.940403],
      container: mapContainer.current || '',
      maxZoom: 13,
      minZoom: 2,
      style,
      zoom: MAP_ZOOM
    });
    map.flyTo({ center: coordinates || center, zoom: MAP_ZOOM });

    const element = document.createElement('div');
    const root = createRoot(element);
    root.render(<Marker />);

    new mapBox.Marker(element).setLngLat(coordinates || center).addTo(map);

    setMap(map);

    return () => {
      map.remove();
    };
  }, [coordinates, token]);

  const flyTo = (coordinates: [number, number]) => map?.flyTo({ center: coordinates, zoom: MAP_ZOOM });

  return (
    <Fragment>
      <div ref={mapContainer} />
      <label className={styles.location} onClick={() => flyTo(coordinates || center)}>
        <strong>{city}</strong>
      </label>
      <Marker />
    </Fragment>
  );
};
