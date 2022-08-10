import React, { useEffect, useState } from "react"
import Layout from "../components/layout"
import { PageProps } from "gatsby"
import GoogleMapReact from "google-map-react"

import pin from "../../static/images/pin.png"

export default ({ location }: PageProps<{}, {}>) => {
    // const [data, setData] = useState([])

    // useEffect(() => {
    //     const fetchLocations = async () => {
    //         try {
    //             const response = await fetch(
    //                 "https://staging-api.tatacoabitcoin.com/btms/"
    //             )
    //             console.log(response)
    //         } catch (err) {
    //             console.log(err)
    //         }
    //     }
    //     fetchLocations()
    // }, [])

    const locations = [
        { name: "Bitcoin Nation", latitude: 2.929731, longitude: -75.266824 },
        { name: "Lightning Store", latitude: 2.959875, longitude: -75.298085 },
        { name: "Compra Venta BTC", latitude: 4.654226, longitude: -74.057261 },
        { name: "BTC Exchange", latitude: 4.136336, longitude: -73.623803 },
        { name: "La Bitcoinera", latitude: 14.092174, longitude: -87.217781 },
    ]

    const Marker = () => {
        return <img src={pin} />
    }

    return (
        <Layout
            seo={{
                title: "btm map",
            }}
            location={location}
        >
            <div className="container mx-auto py-2">
                <div className="title py-2 text-center">
                    <h2 className="font-black text-7xl text-color-1">
                        Encuentra un BTM cerca
                    </h2>
                </div>
                <div style={{ height: "100vh", width: "100%" }}>
                    <GoogleMapReact
                        bootstrapURLKeys={{
                            key: "AIzaSyDak3cZqnb-LtbiBi7hARyIR1cLmnzAJvw",
                        }}
                        defaultCenter={{ lat: 10, lng: -80 }}
                        defaultZoom={4}
                    >
                        {locations?.map((item, index) => (
                            <Marker
                                key={index}
                                lat={item.latitude}
                                lng={item.longitude}
                            />
                        ))}
                    </GoogleMapReact>
                </div>
            </div>
        </Layout>
    )
}
