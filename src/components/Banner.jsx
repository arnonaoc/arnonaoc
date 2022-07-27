import React from 'react'
import './Banner.css'

let bannerData = {
    title: "World's first NFTicket from IPS",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore earum repellat, enim veniam voluptate, non quae velit fugiat asperiores saepe nam ducimus reiciendis dolores quidem ea aut amet. Odit, nesciunt?"
}

function Banner() {
  return (
    <div className='banner-bg'>
        <div className="container">
            <div className="banner-con">
                <div className="banner-text">
                    <h1>{bannerData.title}</h1>
                    <p>{bannerData.desc}</p>
                    <a href="#" className="banner-btn">Learn More</a>
                </div>
            </div>
        </div>     
    </div>
  )
}

export default Banner
