import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";


const CountryDetail = () => {
    const { id } = useParams();
    console.log(id)

    const [countryDetail, setCountryDetail] = useState([]);
    useEffect(() => {
        fetch(`https://restcountries.com/v3.1/alpha?codes=${id}`)
            .then(res => res.json())
            .then(data => setCountryDetail(data[0]))
    }, [id]);

    console.log(countryDetail?.name?.nativeName)
    return (
        <div>
            <h2>Coutry Detail:{id}</h2>
            <div className={countryDetail?.population < 50000 ? 'border-2 grid grid-cols-2 items-center' : 'border-2 grid grid-cols-2 items-center bg-gray-400'} >
                <div className='w-96'><img src={countryDetail?.coatOfArms?.png} alt="" /></div>
                <div className='text-2xl'>
                    <p>Country: {countryDetail?.name?.common}</p>
                    <p>Official Name: {countryDetail?.name?.nativeName?.spa?.official}</p>
                    <p>Population: {countryDetail?.population}</p>
                    <p>Timezones: {countryDetail.timezones}  </p>
                </div>
            </div>
        </div>
    );
};

export default CountryDetail;