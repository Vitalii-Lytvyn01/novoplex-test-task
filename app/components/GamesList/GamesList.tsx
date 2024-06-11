"use client"
import React, { useEffect } from 'react'
import GamesSearch from './GamesSearch';
import { useAppSelector } from '@/app/lib/store';
import Image from 'next/image';

export default function GamesList() {
  const name = useAppSelector(state => state.searchReducer);
  const games = useAppSelector(state => state.gameReducer);

  function filter() {
    let result = games.filter(item => item.title.toLowerCase().includes(name.toLowerCase()))
    return result;
  }

  const imageStyle = {
    height: 'auto',
    borderRadius: '5px',
  }

  return (
    <div className='games'>
      <div className="title">
        Our popular games
      </div>
      <div className='searchbar'>
        <div className="searchbar__name">
          <p>Search by Name:</p>
          <GamesSearch />
        </div>
        <div className="searchbar__filters"></div>
      </div>
      <div className="grid">
        {filter().slice(0,50).map(item => {
          return <div className="card">
            <div className="card__image">
            <Image 
              src={item.thumbnail}
              alt={item.title + ' thumbnail'}
              fill
              quality={100}
              // style={imageStyle}
              loading='lazy'
            />
            </div>
            <h2>{item.title}</h2>
            <p>{item.short_description}</p>
          </div>
        })}
      </div>
    </div>
  )
}
