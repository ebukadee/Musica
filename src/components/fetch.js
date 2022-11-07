import axios from "axios";

const fetchData = () => {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": process.env.API_KEY,
      "X-RapidAPI-Host": process.env.API_URL,
    },
  };
  console.log(process.env.REACT_APP_API_KEY);

  fetch(
    "https://spotify23.p.rapidapi.com/search/?q=kanye&type=multi&offset=0&limit=10&numberOfTopResults=5",
    options
  )
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err));
};
export default fetchData;
