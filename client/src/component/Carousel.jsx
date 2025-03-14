import React, { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../index.css'; //PARA PONER TRANSPARENTE LOS SLICK-ARROWS

export default class Carousel extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 1000,
      autoplay: true,
      autoplaySpeed: 8000,
      pauseOnHover: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      cssEase: 'linear',
    };

    const posts = this.props.posts;

    return (
      <div className=''>
        <Slider {...settings}>
          {posts.map((element) => {
            return (
              <li
                className='flex flex-col gap-0.5 border-2 border-[#fff] w-full h-96 overflow-hidden p-10'
                key={element._id}
              >
                <p>Recipient: {element.recipient_name}</p>
                <p>From: {element.sender_name}</p>
                <p>Song Title: {element.song.title}</p>
                <p>Song Artist: {element.song.artist}</p>
                <p>Song Link: {element.song.link}</p>
                <p>Message: {element.message}</p>
                <p>Created At:{element.created_at}</p>
              </li>
            );
          })}
        </Slider>
      </div>
    );
  }
}
