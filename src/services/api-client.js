import axios from "axios";

const getSongs = async (naming) => {
  try {
    const URL = `https://itunes.apple.com/search?term=${naming}&limit=25&country=in`;
    const response = await axios.get(URL);
    return response.data["results"];
  } catch (error) {
    console.error("Error fetching songs:", error);
    return []; // Return an empty array in case of an error
  }
};

export default getSongs;
