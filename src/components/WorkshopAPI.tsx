import axios from 'axios';
import React, { useEffect, useState } from 'react';
import '@components/Style.WorkshopAPI.css'
import '@assets/HoltwoodOneSC-Regular.ttf'

type digimonType = {
    name: string
    img?: string
    level: string
}

const WorkshopAPI = () => {
    const [data, setData] = useState<digimonType[]>();
    const fetchDataAxios = () => {

        axios.get('https://digimon-api.vercel.app/api/digimon/level/rookie')
            .then(response => {
                setData(response.data)
            })
            .catch(error => {
                console.error('There was a problem with the fetch operation', error)
            })
    }
    useEffect(() => {
        fetchDataAxios();
    }, [])
    console.log(data)

    return (
        <div>
            <div className='htext flex justify-center drop-shadow-xl mt-[2em]'>
                <h1 className='text-[4em] font-extrabold text-center bg-gradient-to-r from-red-600 via-yellow-400 to-orange-400 inline-block  text-transparent bg-clip-text'>Digimon</h1>
            </div>
            <div className='bg-gradient-to-r from-yellow-100 to-red-100 my-[2em] rounded-3xl border-4 border-black mx-[5em]'>
                <div className=' p-[1em] flex justify-center text-white '>
                    <div className=''>
                        {data ? (
                            <div className='flex  flex-wrap justify-around'>
                                {data.map(item => (
                                    <div className=''>
                                        <div className='card text-center m-[1em] border-4 border-black rounded-2xl drop-shadow-md hover:drop-shadow-xl bg-white p-[1em] w-[17em] h-[23em] flex flex-col justify-center items-center' key={item.name}>
                                            <img className='image rounded-xl w-[13em] drop-shadow-md  mb-10' src={item.img} />
                                            <div className="card-info textbox flex flex-col gap-[1em] content-start">
                                                <p className='text'>Name: {item.name}</p>
                                                <p className='text'>Level: {item.level}</p>
                                            </div>
                                            <br />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <p>Loading...</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );

}


export default WorkshopAPI;