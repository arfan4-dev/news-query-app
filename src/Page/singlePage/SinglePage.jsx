import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { hero } from "../../data"
import Side from "../home/sideContent/side/Side"
import "../home/mainContent/homes/style.css"
import "./singlepage.css"
import "../home/sideContent/side/side.css"
import SinglePageSlider from "./slider/SinglePageSlider"
import axios from "axios"
import { useQuery } from "react-query"

const SinglePage = () => {
  const { id } = useParams()
  
  const { data, isLoading, isError, error } = useQuery('fetch-data6', async () => {
    const res=await axios.get(`https://backend.zimomeet.com/api/zimomeet_app/news-detail?news_id=${id}`
     , {
      headers: {
        "api-key": "786ZM786"
      }

    });
    console.log('sidebar:',res.data.data)
    return res.data.data
  });
  return (
    <>
      {isLoading ?(<h1>
    Loading....
    </h1>): (
        <main>
          <SinglePageSlider />
          <div className='container'>
            <section className='mainContent details'>
              <h1 className='title'>{data.title}</h1>

              <div className='author'>
                <span>Date:</span>
                {/* <img src={`item.authorImg`} alt='' /> */}
                {/* <p> {`item.authorName`} on</p> */}
                <label>{`11/2/2023`}</label>
              </div>

              <div className='social'>
                <div className='socBox'>
                  <i className='fab fa-facebook-f'></i>
                  <span>SHARE</span>
                </div>
                <div className='socBox'>
                  <i className='fab fa-twitter'></i>
                  <span>TWITTER</span>
                </div>
                <div className='socBox'>
                  <i className='fab fa-pinterest'></i>
                </div>
                <div className='socBox'>
                  <i className='fa fa-envelope'></i>
                </div>
              </div>

              <div className='desctop'>
                
                      <p style={{textAlign:'justify'}}>{data.content}</p>
              </div>

              <img style={{}} src={`https://www.aljazeera.com${data.images.slice(2,75)}`} alt='' />
           
          

              <div className='descbot'>
                
                 
              </div>

              <div className='quote'>
                <i className='fa fa-quote-left'></i>
               
                  <p>{data.content.slice(300,600)}</p>
               
              </div>

              {/* <div className='desctop'>
                {item.details.map((data) => {
                  return (
                    <>
                      <p>{data.para2}</p>
                      <p>{data.para3}</p>
                    </>
                  )
                })}
              </div> */}
            </section>
            <section className='sideContent'>
              <Side />
            </section>
          </div>
        </main>
      )} 
    </>
              )
}

export default SinglePage
