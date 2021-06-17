import React, { useState, useEffect } from 'react'

export default function Tempapp() {
    const [data, setData] = useState();
    const [city, setCity] = useState();
    console.log(data);
    useEffect(() => {
        const fetchApi = async () => {
            const url = `http://api.openweathermap.org/data/2.5/weather?q=${data}&units=metric&appid=82ec5df681d5c929b052853c7c6dac42`
            const response = await fetch(url);
            const resJson = await response.json();
            console.log(resJson);
            setCity(resJson.main)
        }

        fetchApi();
    }, [data])
    return (
        <>
            <div className="box">
                <div className="inputData">
                    <input type="search" placeholder="Enter City Name" className="inputField" onChange={(event) => { setData(event.target.value) }} />
                </div>
                {!city ? (<h1 className="error">No data found</h1> ) : (
                    <div className="info">
                        <h2 className="location">
                            {data}
                        </h2>

                        <h3 className="temp">
                            {city.temp} °C
                        </h3>

                        <h5 className="temp_min_max">
                            Min {city.temp_min} °C      |    Max {city.temp_max} °C
                        </h5>

                        <div className="wave -one"></div>
                        <div className="wave -two"></div>
                        <div className="wave -three"></div>
                    </div>
                )}

            </div>


        </>
    )
}
