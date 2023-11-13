import React, { useEffect, useState } from "react"
import "./music.css"
import Slider from "react-slick"
import Heading from "../../../common/heading/Heading"
import { popular } from "../../../../data"
import axios from "axios"
import { useQuery } from "react-query"

const Music = () => {

  
  const [items, setItems] = useState();
  const [loading, setLoading] = useState(true);
  const { data, isLoading, isError, error } = useQuery('fetch-data2', async () => {
    const res= await axios.get('https://backend.zimomeet.com/api/zimomeet_app/all-news' 
    , {
      headers: {
        "api-key": "786ZM786"
      }

    });
    console.log('popular:',res.data.data)
    return res.data.data.slice(20,22)
  });
  
  
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "0",
    slidesToShow: 1,
    speed: 500,
    rows: 2,
    slidesPerRow: 1,
  }
  if(isLoading){
    return <h1>Loading...</h1>
  }
  return (
    <>
      <section className='music'>
        <Heading title='US / Iraq' />
        <div className='content'>
          <Slider {...settings}>
            {data.map((val) => {
                return (
                  <div className='items'>
                    <div className='box shadow flexSB'>
                      <div className='images'>
                        <div className='img'>
                        <img src={`https://www.aljazeera.com${val.image}`} alt='' />
                        </div>
                        
                      </div>
                      <div className='text'>
                        <h1 className='title'>{val.title.slice(0, 40)}...</h1>
                      
                        <div className='comment'>
                          <i class='fas fa-share'></i>
                          <label>Share / </label>
                          <i class='fas fa-comments'></i>
                          <label>{val.comments}</label>
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

export default Music
