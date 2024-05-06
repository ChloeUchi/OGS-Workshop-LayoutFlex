export type PokemonResponse = {
    count: number;
    next?: string;
    previous?: string;
    results?: {
        name: string;
        url: string;
    }[];
};


export type Abilities = {
    ability: {
        name: string;
        url: string;
    }
    is_hidden: boolean;
    slot: number;
}


export type PokemonType = {
    no:number;
    types:string[];
    abilities: Abilities[];
    base_experience: number;
    image: string;
    // sprites: {
    //     back_default: string;
    //     back_shiny: string;
    //     front_default: string;
    //     front_shiny: string;
    //     other: {
    //         official_artwork: {
    //             front_default: string;
    //             front_shiny: string;
    //         }
    //     }
    // }
    stats: stats[];
}


export type stats = {
    base_stat: number;
    effort: number;
    stat: {
        name: string;
        url: string;
    }
}

export type PokemonDetail = {
    no:number;
    name: string;
    abilities: string[];
    types:string[];
    base_experience: number;
    image: string;
    stats: {
        name: string;
        base_stat: number;
    }[];
}
