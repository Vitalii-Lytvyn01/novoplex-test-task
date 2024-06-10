"use client"
import React, { useState } from 'react'
import {change} from "@/app/lib/features/searchSlice";
import {useDispatch} from 'react-redux';
import {AppDispatch} from '@/app/lib/store';


export default function GamesSearch() {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div>
      <input
        type="text"
        onChange={(e) => dispatch(change(e.target.value))}
      />
    </div>
  )
}
