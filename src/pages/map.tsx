import React, { useEffect, useRef, ReactElement } from "react";
import Layout from "../components/layout"
import { PageProps } from "gatsby";
import { Wrapper, Status } from "@googlemaps/react-wrapper";

const render = (status: Status): ReactElement => {
    if (status === Status.LOADING) return <h3>{status} ..</h3>;
    if (status === Status.FAILURE) return <h3>{status} ...</h3>;
    return null;
  };

function MyMapComponent({
    center,
    zoom,
  }: {
    center: google.maps.LatLngLiteral;
    zoom: number;
  }) {
    const ref = useRef();
  
    useEffect(() => {
      new window.google.maps.Map(ref.current, {
        center,
        zoom,
      });
    });
  
    return <div ref={ref} id="map" style={{height: "700px", width: "100%", position: 'absolute', left: "0"}}/>;
  }

export default ({ location }: PageProps<{}, {}>) => {
    const center = { lat: 8, lng: -80 };
    const zoom = 4;
    
    return (
        <Layout
            seo={{
                title: "btm map",
            }}
            location={location}
        >
            <div className="container mx-auto">
                <div className="title text-center">
                    <h2 className="font-black text-7xl text-color-1">
                        BTM Location
                    </h2>
                </div>
                <div style={{backgroundColor: 'black', height: "700px", width: '100%'}}>
                  <Wrapper apiKey="AIzaSyAVsHzv7AAcZlT4tngVXn95bP0RzdUOomA" render={render}>
                      <MyMapComponent center={center} zoom={zoom} />
                  </Wrapper>
                </div>
            </div>
        </Layout>
    )
}
