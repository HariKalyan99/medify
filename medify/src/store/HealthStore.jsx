import { createContext, useEffect, useState } from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";


export const healthCenterStore = createContext({
  getHealthCenter: [],
  stateList: [],
  cityList: [],
  handleInputState: () => {},
  handleInputCity: () => {},
  searchForCenters: () => {},
});

const HealthCenterContextProvider = ({ children }) => {
  const [stateList, setStateList] = useState([]);

  const [getInputCity, setInputCity] = useState("");

  const [cityList, setCityList] = useState([]);

  const [getInputHealth, setInputHealth] = useState("");

  const [getHealthCenter, setHealthCenter] = useState([]);

  const [getSearchResults, setSearchResults] = useState("");

  const [invokerFn, setInvokerFn] = useState("invoke");

  const navigate = useNavigate();

  useEffect(() => {
    const controller = new AbortController();
    const signal = { controller };
    const fetchStates = async () => {
      try {
        const { data } = await axios.get(
          "https://meddata-backend.onrender.com/states",
          signal
        );
        setStateList(data);
      } catch (error) {
        console.log("Error", error);
      }
    };

        if(invokerFn === "invoke"){
          fetchStates();
        }

    return () => {
      controller.abort();
    };
  }, [invokerFn]);

  useEffect(() => {
    const fetchCity = async (state) => {
      try {
        const { data } = await axios.get(
          `https://meddata-backend.onrender.com/cities/${state}`
        );
        setCityList(data);
      } catch (error) {
        console.log("Error", error);
      }
    };

    if (getInputCity) {
      fetchCity(getInputCity);
    }
  }, [getInputCity]);

  useEffect(() => {
    const fetchHealthCenter = async (state, city) => {
      try {
        const { data } = await axios.get(
          `https://meddata-backend.onrender.com/data?state=${state}&city=${city}`
        );
        setHealthCenter(data);
        navigate("/search-results");
        setInputCity("");
        setInputHealth("");
        setSearchResults("");
        setInvokerFn("invoke")
      } catch (error) {
        console.log("Error", error);
      }
    };

    if (getSearchResults === "search") {
      fetchHealthCenter(getInputCity, getInputHealth);
    }
  }, [getInputCity, getInputHealth, getSearchResults]);

  const handleInputState = (state) => {
    setInputCity(state);
  };

  const handleInputCity = (city) => {
    setInputHealth(city);
  };


  const searchForCenters = (value) => {
    setSearchResults(value)
  }


  return (
    <healthCenterStore.Provider
      value={{
        getHealthCenter,
        stateList,
        cityList,
        handleInputState,
        handleInputCity,searchForCenters
      }}
    >
      {children}
    </healthCenterStore.Provider>
  );
};

export default HealthCenterContextProvider;
