import React from 'react'
import {useLocation} from 'react-router-dom';

export const BlogDetail = () => {
    const location = useLocation();
    console.log(location.state.blog)
  return (
    <div>
        <img src = {location?.state?.blog?.full_img} alt = 'blog_image' />
        <h1>{location?.state?.blog?.title}</h1>
        <p>{location?.state?.blog?.detail}</p>
    </div>
  )
}

