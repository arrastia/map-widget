'use client';
import { Fragment, useCallback, useEffect, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';

import Image from 'next/image';

import mapBox from 'mapbox-gl';

import 'styles/map.css';
import styles from './Map.module.css';

import { Location } from 'app/components/Location';
import { Marker } from 'app/components/Marker';

import type { Map as MapType } from 'mapbox-gl';

const style = 'mapbox://styles/mapbox/streets-v12?optimize=true';
const ZOOM = 13;

export type Location = { city: string; coordinates: [number, number] };
export type MapProps = { lastLocation: Location; location: Location; token: string };

export const Map = ({ lastLocation, location, token }: MapProps) => {
  const [map, setMap] = useState<MapType>();

  const mapContainer = useRef<HTMLDivElement>(null);

  const createMarker = useCallback((map: MapType, coordinates: [number, number], type: 'current-location' | 'last-location') => {
    const element = document.createElement('div');
    const root = createRoot(element);
    root.render(<Marker type={type} />);

    new mapBox.Marker(element).setLngLat(coordinates).addTo(map);
  }, []);

  useEffect(() => {
    const map = new mapBox.Map({
      accessToken: token,
      center: lastLocation.coordinates,
      container: mapContainer.current || '',
      maxZoom: ZOOM,
      minZoom: 1,
      style,
      zoom: ZOOM
    });
    map.flyTo({ center: location.coordinates, zoom: ZOOM });

    createMarker(map, location.coordinates, 'current-location');
    createMarker(map, lastLocation.coordinates, 'last-location');
    setMap(map);

    return () => {
      map.remove();
    };
  }, [createMarker, lastLocation, location, token]);

  const flyTo = (coordinates: [number, number]) => map?.flyTo({ center: coordinates, zoom: ZOOM });

  return (
    <Fragment>
      <div ref={mapContainer} />
      <Location />

      {/* <label className={`${styles.location} ${styles.current}`} onClick={() => flyTo(location.coordinates)}>
        Current location: <strong>{location.city}</strong>
      </label>
      <label className={`${styles.location} ${styles.last}`} onClick={() => flyTo(lastLocation.coordinates)}>
        Last location from: <strong>{lastLocation.city}</strong>
      </label> */}
      <div className={styles.controls}>
        <Image
          alt="Back icon"
          className={styles.icon}
          height={20}
          onClick={() => flyTo(lastLocation.coordinates)}
          role="button"
          src="/assets/icons/previous-location.svg"
          width={20}
        />
        <hr aria-hidden={true} className={styles.divider} />
        <Image
          alt="Location icon"
          className={styles.icon}
          height={20}
          onClick={() => flyTo(location.coordinates)}
          role="button"
          src="/assets/icons/location.svg"
          width={20}
        />
      </div>
    </Fragment>
  );
};
