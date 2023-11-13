import React, { useEffect, useState } from "react"
import Slider from "react-slick"
import { lifestyle } from "../../../../data"
import Heading from "../../../common/heading/Heading"

import "../Ppost/ppost.css"
import axios from "axios"
import { useQuery } from "react-query"
//copy ppost code
const Life = () => {

  const { data, isLoading, isError, error } = useQuery('fetch-data3', async () => {
    const res= await axios.get('https://backend.zimomeet.com/api/zimomeet_app/all-news' 
    , {
      headers: {
        "api-key": "786ZM786"
      }

    });
    console.log('Life:',res.data.data)
    return res.data.data.slice(15, 20)
  });

  
      

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  }

  if(isLoading){
    return <div>Loading...</div>;
  }
  
  return (
    <>
      <section className='popularPost life'>
        <Heading title='War/ Hunger' />
        <div className='content'>
          <Slider {...settings}>
            {data.map((val) => {
              return (
                <div className='items'>
                  <div className='box shadow'>
                    <div className='images'>
                      <div className='img'>
                      <img src={`https://www.aljazeera.com${val.image}`} alt='' />
                      </div>
                      <div class='category category1'>
                        <span>{val.catgeory}</span>
                      </div>
                    </div>
                    <div className='text'>
                      <h1 className='title'>{val.title.slice(0, 40)}...</h1>
                      <div className='date'>
                        <i class='fas fa-calendar-days'></i>
                        <label>{val.date}</label>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </Slider>
        </div>
      </section>
    </>
  )
}

export default Life
