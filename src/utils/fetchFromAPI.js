import axios from 'axios'

const BASE_URL = 'https://youtube-v31.p.rapidapi.com'

const options = {
    method: "GET",
    url: BASE_URL,
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
};

export const fetchFromAPI = async (url) => {
  try{
    const response = await axios.request(`${BASE_URL}/${url}`, options);
    return response.data;
  } catch(error) {
    console.log(error)
  }
}
  