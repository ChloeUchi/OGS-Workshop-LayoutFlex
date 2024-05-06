import axios from "axios";
import { useEffect, useState } from "react";
import { Type } from '@components/types/Types'
import pokelogo from '@assets/International_Pokémon_logo.svg.png'

const PokemonDetails = () => {
    const [data, setData] = useState<Type[]>();
    const [filteredData, setFilteredData] = useState<Type[]>([]);


    const fetchDataAxios = async () => {
        try {
            const result = await axios.get<Type[]>(
                "https://pokemon-api.cyclic.app/api/v1/pokemon"
            );
            console.log("API Response:", result.data);
            setData(result.data); // Update the state directly with the fetched data
            setFilteredData(result.data); // Set filtered data initially to all data
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };
    useEffect(() => {
        fetchDataAxios();
    }, []);

    const handleFilterChange = (filterCriteria: string) => {
        if (!Array.isArray(data)) {
            // If data is not an array, do nothing
            return;
        }

        // Type assertion for filterCriteria
        const typeFilterCriteria = filterCriteria.toLowerCase() as Type["type"][number];

        // Filter data based on filterCriteria
        if (typeFilterCriteria.trim() === "") {
            // If filter is empty, show all data
            setFilteredData(data);
        } else {
            const filtered = data.filter(pokemon =>
                pokemon.type.includes(typeFilterCriteria)
            );
            setFilteredData(filtered);
        }
    };





    return (
        <div>
            <div className="navbar flex justify-start h-full bg-orange-400 w-[100vh]">
                <img className="w-[10em]" src={pokelogo} alt="" />
            </div>

            <select onChange={(e) => handleFilterChange(e.target.value)}>
                <option value="">Filter by Type</option>
                <option value="grass">Grass</option>
                <option value="fire">Fire</option>
                <option value="water">Water</option>
                {/* Add more options for other Pokémon types */}
            </select>

            {/* Render filtered data */}
            <ul>
                {Array.isArray(filteredData) && filteredData.map(pokemon => (
                    <li key={pokemon.no}>
                        <div>
                            <img src={pokemon.sprite.redblue} alt={pokemon.name} />
                            <span>{pokemon.name}</span>
                        </div>
                    </li>
                ))}
            </ul>
            

        </div>
    )
};

export default PokemonDetails;