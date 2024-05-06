import { useEffect } from 'react';
import { useGetPokemonDetailQuery } from '@service/PokemonService/PokemonService';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import pokeIcon from '@assets/Poké_Ball_icon.svg.png';


const PokemonDetailsCard = () => {
    const { name } = useParams();
    const { data: pokemonDetail, error, isLoading } = useGetPokemonDetailQuery(name);
    const navigate = useNavigate();

    useEffect(() => {
        // Fetch the details of the specific Pokemon using the name parameter
    }, [name]);

    const handleGoBack = () => {
        navigate(-1); // Navigate back to the previous page
    };


    if (isLoading) {
        return (
            <div className='flex justify-center content-center place-content-center place-items-center absolute top-[50%]'>
                <img className='w-[1.5em]' src={pokeIcon} alt="Loading" />
                <p className='text-gray-500'> is loading...</p>
            </div>
        );
    }

    if (error) {
        // Check if the error is an instance of FetchBaseQueryError
        if ('status' in error && 'data' in error) {
            return <div>Error: {error.status}</div>;
        } else {
            return <div>Error: Unknown error occurred</div>;
        }
    }
    return (
        <div>
            <div className='container flex flex-col items-center justify-center bg-[#4bb461] pt-[2em] rounded-[2em] w-[450px] my-[2em]'>

                {pokemonDetail && (
                    <div>
                        <div className='flex justify-between px-[2em] py-0 h-[5em]'>
                            <div>
                                <div className='flex place-self-start'>
                                    <button className='backtoprev' onClick={handleGoBack}>
                                        <svg width="39" height="34" viewBox="0 0 39 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M14.0897 29.6826C16.3192 30.9698 18.8482 31.6475 21.4226 31.6475C23.997 31.6475 26.526 30.9698 28.7555 29.6826C30.985 28.3954 32.8363 26.5441 34.1235 24.3146C35.4107 22.0851 36.0884 19.5561 36.0884 16.9817C36.0884 14.4073 35.4107 11.8783 34.1235 9.6488C32.8363 7.41933 30.985 5.56795 28.7555 4.28076C26.526 2.99357 23.997 2.31592 21.4226 2.31592C18.8482 2.31592 16.3192 2.99357 14.0897 4.28076" stroke="white" stroke-opacity="0.6" stroke-width="4" />
                                            <path d="M3.09033 16.9815L1.52859 15.7321L0.529082 16.9815L1.52859 18.2309L3.09033 16.9815ZM19.5893 18.9815C20.6939 18.9815 21.5893 18.0861 21.5893 16.9815C21.5893 15.877 20.6939 14.9815 19.5893 14.9815V18.9815ZM8.86148 6.56604L1.52859 15.7321L4.65207 18.2309L11.985 9.06482L8.86148 6.56604ZM1.52859 18.2309L8.86148 27.397L11.985 24.8983L4.65207 15.7321L1.52859 18.2309ZM3.09033 18.9815H19.5893V14.9815H3.09033V18.9815Z" fill="white" fill-opacity="0.6" />
                                        </svg>
                                    </button>
                                </div>
                                <h2 className='text-[2.7em] font-bold relative'>{pokemonDetail.name}</h2>
                                <p className='flex gap-5 rounded-xl bg-[#aac8af] w-max px-4 opacity-60'>{pokemonDetail.types.map((type, index) => (
                                    <p className='text-white opacity-100' key={index}>
                                        {type}
                                    </p>
                                ))}
                                </p>
                            </div>
                            <h1 className='text-[6em] opacity-20 relative bottom-10'>#{pokemonDetail.id}</h1>
                        </div>
                        <div className="image-container flex flex-col items-center relative top-12">
                            <img className='w-[14em]' src={pokemonDetail.image.main} alt={pokemonDetail.name} />
                        </div>
                        <div className='bg-white  px-[2em] pt-[3em] pb-[1em] rounded-[2em] w-[450px]'>
                            <div className="sub-container grid grid-cols-4">
                                <img className='w-[14em]' src={pokemonDetail.image.front_default} alt={pokemonDetail.name} />
                                <img className='w-[14em]' src={pokemonDetail.image.back_default} alt={pokemonDetail.name} />
                                <img className='w-[14em]' src={pokemonDetail.image.front_shiny} alt={pokemonDetail.name} />
                                <img className='w-[14em]' src={pokemonDetail.image.back_shiny} alt={pokemonDetail.name} />
                            </div>
                            <p className='rounded-xl bg-green-500 w-max px-4'>Exp: {pokemonDetail.base_experience}</p><br />
                            <div className="stats grid grid-cols-3 bg-gray-100 rounded-xl text-gray-500 p-[1em] text-[11px]">
                                {pokemonDetail.stats.map((stat, index) => (
                                    <p className='content-center capitalize' key={index}>
                                        &nbsp;{stat.base_stat} : {stat.name}
                                    </p>
                                ))}
                            </div>
                            <br />
                            <p className='text-gray-500 text-[2em]'>Abilities</p>
                            <p className='list-decimal bg-gray-100 rounded-xl text-gray-500 p-[1em] overflow-auto'>{pokemonDetail.abilities.map((abil, index) => (
                                <li key={index}>
                                    {abil}
                                </li>
                            ))}</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default PokemonDetailsCard;
