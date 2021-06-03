import React from 'react';
import './Card.css';
import heartOutline from '../../assets/heart-outline.png'; // Tell webpack this JS file uses this image
import heartFill from '../../assets/heart-fill.png'; // Tell webpack this JS file uses this image

export default function Card(props) {
  const { title, date, image, description } = props.recipeItem;
  console.log(props.liked);
  return (
    <div className='card'>
      <div className='card-header'>
        <div className='profile'>
          <span className='letter'>{props.author[0]}</span>
        </div>
        <div className='card-title-group'>
          <h5 className='card-title'>{title}</h5>
          <div className='card-date'>{date}</div>
        </div>
      </div>
      <img className='card-image' src={image} alt='image' />
      <div className='card-text'>{description}</div>
      <div className='card-like-bar'>
        {props.liked ? (
          <img className='card-like-icon' src={heartFill} alt='heart' />
        ) : (
          <img className='card-like-icon' src={heartOutline} alt='heart' />
        )}
        <div className='like-text'>
          <b>{props.likeCount}</b> Kişi Bu Tarifi Beğendi.
        </div>
      </div>
    </div>
  );
}