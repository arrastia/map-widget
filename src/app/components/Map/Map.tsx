'use client';
import { useEffect, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';

// import Image from 'next/image';
// import { location } from 'assets/icons';
import mapBox from 'mapbox-gl';

import 'styles/map.css';
import styles from './Map.module.css';

import { BorderMask } from 'app/components/BorderMask';
import { Controls } from './components/Controls';
import { Marker } from './components/Marker';

import type { Map as MapType } from 'mapbox-gl';

const ATARRABIA_LATITUDE = 42.83;
const ATARRABIA_LONGITUDE = -1.61;
// const TALLINN_LATITUDE = 59.436962;
// const TALLINN_LONGITUDE = 24.753574;

const center: [number, number] = [ATARRABIA_LONGITUDE, ATARRABIA_LATITUDE];
const MAP_ZOOM = 14;
const style = 'mapbox://styles/mapbox/streets-v12';
// const style = 'mapbox://styles/mapbox/dark-v11';

export const Map = ({ token }: { token: string }) => {
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
    map.flyTo({ center, zoom: MAP_ZOOM });

    const element = document.createElement('div');
    const root = createRoot(element);
    root.render(<Marker />);

    new mapBox.Marker(element).setLngLat(center).addTo(map);

    setMap(map);

    return () => {
      map.remove();
    };
  }, [token]);

  // const handleZoomIn = () => map?.zoomIn();

  // const handleZoomOut = () => map?.zoomOut();

  const flyTo = (coordinates: [number, number]) => map?.flyTo({ center: coordinates, zoom: MAP_ZOOM });

  return (
    <section className={styles.map}>
      <div aria-hidden={true} className={styles.granular} />
      <div ref={mapContainer} />
      <label className={styles.location} onClick={() => flyTo(center)}>
        {/* <div className={styles.group}> */}
        {/* <Image alt="Location icon" height={15} src={location} width={15}></Image> */}
        <strong>Atarrabia, Navarra</strong>
        {/* </div> */}
        {/* <div className={styles.group}>
          <Image alt="Location icon" height={15} src={location} width={15}></Image>
          <small>Last location from:</small>
          <strong onClick={() => flyTo([TALLINN_LONGITUDE, TALLINN_LATITUDE])}>Tallinn</strong>
        </div> */}
      </label>
      {/* <Controls handleZoomIn={handleZoomIn} handleZoomOut={handleZoomOut} /> */}
      <Marker />
      <BorderMask direction="vertical" />
      <BorderMask direction="horizontal" />
    </section>
  );
};
