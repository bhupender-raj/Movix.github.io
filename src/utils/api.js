import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';

const TMDB_TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZjFkYTQ2Nzc3MWM3ZWVmNDZhN2FhMjEwNjBlMjA0NiIsInN1YiI6IjY1MWUzZTlkYTA5N2RjMDBlMzVmZWI3OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.c19026YXHy4SqbnoNFH0E6pSflZyv9Qz1uUdg2sPd0U';

const headers = {
    Authorization: "bearer " + TMDB_TOKEN
};

export const fetchDataFromApi = async (url, params) => {
    try{
        const {data} =await axios.get(BASE_URL + url, {
            headers,
            params
        })
        return data;
    }
    catch(err){
        console.log(err);
        return err;
    }
}