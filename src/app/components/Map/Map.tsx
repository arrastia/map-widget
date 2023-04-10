'use client';
import { Fragment, useCallback, useEffect, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';

import mapBox from 'mapbox-gl';

import 'styles/map.css';
import styles from './Map.module.css';

import { Marker } from './components/Marker';

import type { Map as MapType } from 'mapbox-gl';

const center: [number, number] = [24.753574, 59.436962];
const style = 'mapbox://styles/mapbox/streets-v12?optimize=true';
const ZOOM = 13;

export type MapProps = { city: string; coordinates: [number, number]; token: string };

export const Map = ({ city, coordinates, token }: MapProps) => {
  const [map, setMap] = useState<MapType>();

  const mapContainer = useRef<HTMLDivElement>(null);

  // prettier-ignore
  const createMarker = useCallback((map: MapType) => {
    const element = document.createElement('div');
    const root = createRoot(element);
    root.render(<Marker />);

    new mapBox.Marker(element).setLngLat(coordinates).addTo(map);
  }, [coordinates]);

  useEffect(() => {
    const map = new mapBox.Map({ accessToken: token, center, container: mapContainer.current || '', minZoom: 1, maxZoom: ZOOM, style, zoom: ZOOM });
    map.flyTo({ center: coordinates, zoom: ZOOM });

    createMarker(map);
    setMap(map);

    return () => {
      map.remove();
    };
  }, [coordinates, createMarker, token]);

  const flyTo = (coordinates: [number, number]) => map?.flyTo({ center: coordinates, zoom: ZOOM });

  return (
    <Fragment>
      <div ref={mapContainer} />
      <label className={styles.location} onClick={() => flyTo(coordinates)}>
        <strong>{city}</strong>
      </label>
    </Fragment>
  );
};
