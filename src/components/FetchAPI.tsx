import axios from 'axios';
import React, { useEffect, useState } from 'react';

type pokaType = {
  count: number
  next: string
  previous: string
  results: {
    name: string
    url: string
  }[]
}

const FetchAPI = () => {
  const [data, setData] = useState<pokaType>();


  const fetchData = () => {
  //   fetch('https://pokeapi.co/api/v2/pokemon')
  //     .then(response => {
  //       if (!response.ok) {
  //         throw new Error('Network response was not ok');
  //       }
  //       return response.json();
  //     })
  //     .then(data => {
  //       setData(data);
  //     })
  //     .catch(error => {
  //       console.error('There was a problem with the fetch problem:', error)
  //     })
  // }
    axios.get('https://pokeapi.co/api/v2/pokemon')
    .then(response => {
      setData(response.data)
    })
    .catch(error => {
      console.error('There was a problem with the fetch operation', error)
    })
  }
  useEffect(() => {
    fetchData();
  }, [])
  
  
  return (
    <div>
      <h1>Data from API</h1>
      {data ? (
        <div>
          <p>name: {data.count}</p>
          <p>next: {data.next}</p>
          <p>previous: {data.previous}</p>
          {
            data.results.map((pokemon,index) => (
              <div key={index} className='text-center'>
                <p>name: {pokemon.name}</p>
                <p>name: {pokemon.url}</p>
                <br />
              </div>
            ))
          }
        </div>
      ) : (
        <p>loading...</p>
      )}
    </div>
  )
}

export default FetchAPI;