import axios from "axios";
import { useEffect, useState } from "react";
import { CiHeart } from "react-icons/ci";
import { LuSwords } from "react-icons/lu";
import { GrShield } from "react-icons/gr";
import { PiBoot } from "react-icons/pi";
import { CiStar } from "react-icons/ci";
import { AiOutlineFire } from "react-icons/ai";
import {Type} from '@components/types/Types'


// const backgrounds = {
//   fire: 'red',
//   bug: 'yellow',
//   poison: 'blue',
// };

// const defaultBackground = 'white';
const PokemonApi = () => {
  const [data, setData] = useState<Type[]>();

  // const fetchDataAxios = async () =>
  const fetchDataAxios = async () => {
    const result = await axios.get(
      "https://pokemon-api.cyclic.app/api/v1/pokemon"
    );
    const _result = result.data.data.data;
    setData(_result);
    console.log(result.data.data.data);
  };

  useEffect(() => {
    fetchDataAxios();
  }, []);

  return (
    <>
      <div className="flex flex-col justify-center items-center content-center ">
        <div className="bg-white p-12 pl-8 pr-8  rounded-t-[30px] ">
          <div className="grid grid-cols-5 grid-flow-row gap-4">
            {data &&
              data.map((item, index) => {
                return (
                  <>
                    <div>
                      <div className="bg-red-200 flex flex-col justify-center content-center place-items-center py-10  mx-3 rounded-xl" >
                        
                        <div className="flex flex-row relative bottom-8 left-20 rounded-xl bg-[#5f5f5f] opacity-50"> {/* Add this container with flexbox properties */}
                          {item.type.map((type) => (
                            <div key={type}> {/* Add key prop */}
                              <img
                                width={"50%"}
                                src={`https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/Others/type-icons/png/${type}.png`}
                                alt={`img-${index}`}
                                className="flex flex-row gap-10  p-[0.3em] w-10 opacity-100"
                              />
                            </div>
                          ))}
                        </div>
                        <div className="flex justify-center content-center place-items-center relative top-3 w-[90%] rounded-xl" >
                        <img
                          width={"50%"}
                          src={`https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/${item.no}.png`}
                          alt={`img-${index}`}
                        /></div>
                        <div className="poke-info flex flex-col place-items-center bg-white p-[0.5em] rounded-xl">
                          <br />
                          <h1 className="bg-gray-300 text-white rounded-md w-[80%] py-1 text-center uppercase">{item.name}</h1>
                          <div className="info-icon-container flex gap-6 mt-5">
                            <p><CiHeart /></p>
                            <p><LuSwords /></p>
                            <p><GrShield /></p>
                            <p><PiBoot /></p>
                            <p><CiStar /></p>
                            <p><AiOutlineFire /></p>
                          </div>
                          <div className="stats-container flex gap-5 mt-5">
                            <p>{item.stats.attack}</p>
                            <p>{item.stats.defense}</p>
                            <p>{item.stats.hp}</p>
                            <p>{item.stats.special}</p>
                            <p>{item.stats.speed}</p>
                            <p>{item.stats.total}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
};

export default PokemonApi;