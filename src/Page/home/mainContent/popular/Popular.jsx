import React, { useEffect, useState } from "react"
import "./Popular.css"

import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Heading from "../../../common/heading/Heading"
import axios from "axios"
import { useQuery } from "react-query"

const Popular = () => {

  const { data, isLoading, isError, error } = useQuery('fetch-data1', async () => {
    const res= await axios.get('https://backend.zimomeet.com/api/zimomeet_app/all-news' 
    , {
      headers: {
        "api-key": "786ZM786"
      }

    });
    console.log('popular:',res.data.data)
    return res.data.data.slice(5, 12)
  });



  const settings = {
    className: "center",
    centerMode: false,
    infinite: true,
    centerPadding: "0",  
    slidesToShow: 2,
    speed: 500,
    rows: 4,
    slidesPerRow: 1,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          rows: 4,
        },
      },
    ],
  }


  return (
    <>
      <section className='popular'>
        <Heading title='Popular' />
        <div className='content'>
          <Slider {...settings}>
            {isLoading?(<h1>Loading....</h1>):(data.map((val) => {
              return (
                <div className='items'>
                  <div className='box shadow'>
                    <div className='images row'>
                      <div className='img'>
                        <img src={`https://www.aljazeera.com${val.image} `}alt='' />
                      </div>
                     
                    </div>
                    <div className='text row'>
                      <h1 className='title'>{val.title.slice(0, 40)}...</h1>
                      <div className='date'>
                        <i class='fas fa-calendar-days'></i>
                        <label>{' val.date'}</label>
                      </div>
                      <div className='comment'>
                        <i class='fas fa-comments'></i>
                        <label>{' val.comments'}</label>
                      </div>
                    </div>
                  </div>
                </div>
              )
            }))}
          </Slider>
        </div>
      </section>
    </>
  )
}

export default Popular
