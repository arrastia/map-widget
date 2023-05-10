'use client';
import { Fragment, useCallback, useEffect, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';

import mapBox from 'mapbox-gl';

import 'styles/map.css';

import { Controls } from 'app/components/Controls';
import { Location } from 'app/components/Location';
import { Marker } from 'app/components/Marker';

import type { Map as MapType } from 'mapbox-gl';

const style = 'mapbox://styles/mapbox/streets-v12?optimize=true';
const zoom = 13;

export type Location = { city: string; coordinates: [number, number]; country: string };
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
    const { current } = mapContainer;

    const map = new mapBox.Map({ accessToken: token, center: lastLocation.coordinates, container: current || '', maxZoom: zoom, style, zoom });
    map.flyTo({ center: location.coordinates, zoom });

    createMarker(map, location.coordinates, 'current-location');
    createMarker(map, lastLocation.coordinates, 'last-location');
    setMap(map);

    return () => {
      map.remove();
    };
  }, [createMarker, lastLocation, location, token]);

  const flyTo = (coordinates: [number, number]) => map?.flyTo({ center: coordinates, zoom });

  return (
    <Fragment>
      <div ref={mapContainer} />

      <Location from={`${location.city}, ${location.country}`} to={`${lastLocation.city}, ${lastLocation.country}`} />
      <Controls onBackIconClick={() => flyTo(lastLocation.coordinates)} onLocationIconClick={() => flyTo(location.coordinates)} />
    </Fragment>
  );
};
