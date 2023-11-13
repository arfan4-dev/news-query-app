import React, { useEffect, useState } from "react";
import { hero } from "../../../data";
import "./hero.css";
import Card from "./Card";
import axios from 'axios';
import { useQuery } from "react-query";

const Hero = () => {

  const { data, isLoading, isError, error } = useQuery('fetch-data', async () => {
    const res= await axios.get('https://backend.zimomeet.com/api/zimomeet_app/all-news' 
    , {
      headers: {
        "api-key": "786ZM786"
      }

    });
    console.log(res.data.data)
    return res.data.data.slice(0,4)
  });


if(isLoading){
  return <h1>Loading...</h1>
}
if(isError){
  return <h1>{error.message}</h1>
}
  return (
    <section className='hero'>
      <div className='container'>
        {
          data.map((item) => (
            <Card key={item.id} item={item} />
          ))
        }
      </div>
    </section>
  );
};

export default Hero;
