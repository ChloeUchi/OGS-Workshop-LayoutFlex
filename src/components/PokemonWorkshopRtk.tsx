import { useGetListPokemon2Mutation } from '@service/PokemonService/PokemonService';
import { useEffect } from 'react';
import pokeIcon from '@assets/Poké_Ball_icon.svg.png';
import { useSearchParams } from 'react-router-dom';
import { Link } from 'react-router-dom';


const PokemonWorkshopRtk = () => {
    const [getListPokemon, result_data_pokemon] = useGetListPokemon2Mutation();
    const [searchParams] = useSearchParams();
    const page = searchParams.get('page');

    const fnGetListPokemon = async () => {
        try {
            await getListPokemon({
                limit: '10',
                offset: page ? ((parseInt(page) - 1) * 10).toString() : '0'
            });
        } catch (error) {
            console.log({ error });
        }
    }

    useEffect(() => {
        fnGetListPokemon();
    }, [page])

    if (result_data_pokemon.isLoading) {
        return (
            <div>
            <div className='flex justify-center content-center place-content-center place-items-center '>
                <img className='w-[1.5em]' src={pokeIcon} alt="Loading" />
                <p className='text-gray-500'> is loading...</p>
            </div>
            </div>
        );
    }
    
    return (
        <div>
            <div className='grid lg:grid-cols-5 md:grid-cols-3 justify-center mt-[2em]'>
                {result_data_pokemon.data?.results?.map((item, index) => (
                    <div key={index} className='flex flex-col justify-center items-center w-[14em]  text-center bg-gray-400 rounded-xl m-2 py-0'>
                        <Link className='rounded-xl  pt-6 bg-white' to={`/pokemon/${item.name}?page=${searchParams.get('page')}`} >
                            <div className='flex justify-center items-center '>
                                <img
                                    className=''
                                    width={"70%"}
                                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${extractPokemonId(item.url)}.png`}
                                    alt={`img-${index}`}
                                />
                            </div>
                            <div className='bg-gray-300 text-gray-500 capitalize py-[0.7em] rounded-xl rounded-t-none text-left pl-[1em] text-xl'>
                                <p key={item.name}>{item.name}</p>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>

    )
}

// Function to extract Pokemon ID from URL
const extractPokemonId = (url: string) => {
    const parts = url.split('/');
    return parts[parts.length - 2];
}

export default PokemonWorkshopRtk;