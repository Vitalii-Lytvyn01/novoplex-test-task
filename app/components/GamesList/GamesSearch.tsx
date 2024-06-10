"use client"
import React, { useState } from 'react'
import {change} from "@/app/lib/features/searchSlice";
import {useDispatch} from 'react-redux';
import {AppDispatch,useAppSelector} from '@/app/lib/store';


export default function GamesSearch() {
  const dispatch = useDispatch<AppDispatch>();
  const name = useAppSelector((state) => state.searchReducer);

  return (
    <div>
      <input
        type="text"
        onChange={(e) => dispatch(change(e.target.value))}
      />
      {name}
    </div>
  )
}
