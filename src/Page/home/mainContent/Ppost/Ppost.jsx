import React, { useEffect, useState } from "react"
import Slider from "react-slick"
import Heading from "../../../common/heading/Heading"
import "./ppost.css"
import axios from "axios"
import { useQuery } from "react-query"

// copy same code of popular
const Ppost = () => {

  const { data, isLoading, isError, error } = useQuery('fetch-data4', async () => {
    const res= await axios.get('https://backend.zimomeet.com/api/zimomeet_app/all-news' 
    , {
      headers: {
        "api-key": "786ZM786"
      }

    });
    console.log('Life:',res.data.data)
    return res.data.data.slice(13,15)
  });

  
  if(isLoading){
    return <h1>Loading</h1>
  }
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  }

  return (
    <>
      <section className='popularPost'>
        <Heading title='Popular Posts' />
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

export default Ppost
