import { useEffect, useState } from "react";
import About from "../About";
import { Gallery } from "../Gallery";
import Hero from "../Hero";
import Programs from "../Programs";
import Team from "../Team";
import axios from "axios";
import { baseURL } from "../config/baseURL";


export default function HomePage() {

    const [globalData, setGlobalData] = useState([]);
  

  useEffect(() => {
      const fetchGlobalData = async () => {
        try {
          const response = await axios.get(`${baseURL}/api/global-data/all`);
          setGlobalData(response.data.data);
          console.log("Global data :", response.data.data)
          // setIsLoading(false);
        } catch (error) {
          // setIsError(true);
          // setErrorMessage(error.message);
          console.error("Erroro while fetching global data : ", error)
        }
      };
      fetchGlobalData();
    }, []);

  return (
    <>
      <Hero globalData={globalData} />
      <About />
      <Programs />
      {/* <Gallery /> */}
      <Team />
    </>
  );
}
