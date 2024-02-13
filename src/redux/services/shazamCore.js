import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'c6be34461cmsh1a9741a4feee277p17223djsn96ec896c1d8b',
      'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
    }
  };
  
  fetch('https://spotify23.p.rapidapi.com/browse_all/', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));
    export const shazamCoreApi = createApi({
        reducerPath:'shazamCoreApi',
        baseQuery:fetchBaseQuery({
            baseUrl:''
        })
    })