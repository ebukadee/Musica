import axios from "axios";

const fetchData = () => {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "9553e4f813mshf0287be8a40ca26p188074jsn50685f660bd8",
      "X-RapidAPI-Host": "spotify23.p.rapidapi.com",
    },
  };

  fetch(
    "https://spotify23.p.rapidapi.com/search/?q=kanye&type=multi&offset=0&limit=10&numberOfTopResults=5",
    options
  )
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err));
};
export default fetchData;
