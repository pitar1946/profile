import React, { Component } from 'react';

import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

const images = [
{
  original: 'https://picsum.photos/1000/500?image=5',
  thumbnail: 'https://picsum.photos/250/150?image=5',
},
{
  original: 'https://picsum.photos/1000/500?image=6',
  thumbnail: 'https://picsum.photos/250/150?image=6'
},
{
  original: 'https://picsum.photos/1000/500?image=8',
  thumbnail: 'https://picsum.photos/250/150?image=8'
}
];


class Gallery extends Component{
  render(){
    return(
       <ImageGallery
             className='gallery'
             items={images}
             showFullscreenButton={false}
             autoPlay={true}
             showPlayButton={false}
             showThumbnails={false}
             showNav={false}
             slideDuration={1000}
             slideInterval={3000}/>
        )
     }
  }
export default Gallery;
