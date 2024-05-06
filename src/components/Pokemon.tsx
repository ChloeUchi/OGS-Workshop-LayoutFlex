
import { Link } from 'react-router-dom';
import PokemonWorkshopRtk from './PokemonWorkshopRtk'
import pokeLogo from '@assets/International_Pokémon_logo.svg.png';


const Pokemon = () => {

    const generatePageNumbers = () => {
        return Array.from({ length: 5 }, (_, index) => index + 1);
    };

    return (
        <div className=''>
            <div className='flex flex-col justify-center items-center '>
                <img className='w-[25%]' src={pokeLogo} alt="Logo" />
                <h1 className='text-[2.5em] font-extrabold text-center text-[#1e2852]'>Dex</h1>
            </div>
            <PokemonWorkshopRtk />
            <div className='flex justify-center content-center place-items-center space-x-10 my-[3em]'>
                {generatePageNumbers().map((pageNumber) => (
                    <Link key={pageNumber} to={`/pokemonworkshop?page=${pageNumber}`}>
                        <button className="w-[4em] h-[4em] rounded-full bg-slate-500 text-white hover:bg-slate-300 hover:text-[#8a8a8a] pointer-events-auto">{pageNumber}</button>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Pokemon