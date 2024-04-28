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
  getLocalData: [],
  invoke: () => {},
  captureBooks: () => {}
});

const HealthCenterContextProvider = ({ children }) => {
  const [stateList, setStateList] = useState([]);

  const [getInputCity, setInputCity] = useState("");

  const [cityList, setCityList] = useState([]);

  const [getInputHealth, setInputHealth] = useState("");

  const [getHealthCenter, setHealthCenter] = useState([]);

  const [getSearchResults, setSearchResults] = useState("");

  const [invokerFn, setInvokerFn] = useState(true);

  const navigate = useNavigate();

  const [getLocalData, setLocalData] = useState([]);

  


  // useEffect(() => {
  //   let dateArr = [];
  //   for(let i = 1 ; i<= 7; i++){
  //     let dates = new Date(new Date().getTime()+(i*24*60*60*1000));
  //     dateArr.push(dates.toString().split(" ").splice(1, 3).join(" "));
  //   }
  //   setDatesAccording([...datesAccording, ...dateArr])
  //   console.log(datesAccording)
  // }, [])

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

    let dataLocal = JSON.parse(localStorage.getItem('bookingSlot'));
    if(dataLocal){
      setLocalData([...dataLocal])
    }else{
      localStorage.setItem('bookingSlot', JSON.stringify([]));
    }
   

          fetchStates();

        let today = new Date().toDateString().toString().split(" ").splice(1).join(" ");
        let dateArr = [today];
    for(let i = 1 ; i<= 7; i++){
      let dates = new Date(new Date().getTime()+(i*24*60*60*1000));
      dateArr.push(dates.toString().split(" ").splice(1, 3).join(" "));
    }

    localStorage.setItem('datesArr', JSON.stringify(dateArr));
    

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
        invoke()
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


  const invoke = () => {
    setInvokerFn(!invokerFn);
  }


  const searchForCenters = (value) => {
    setSearchResults(value)
  }

  const captureBooks = (slot) => {
    let bookingDataFromLocal = JSON.parse(localStorage.getItem('bookingSlot'));
    localStorage.setItem('bookingSlot', JSON.stringify([slot, ...bookingDataFromLocal]));
    invoke();
  }

  return (
    <healthCenterStore.Provider
      value={{
        getHealthCenter,
        stateList,
        cityList,
        handleInputState,
        handleInputCity,searchForCenters,getLocalData, invoke, captureBooks
      }}
    >
      {children}
    </healthCenterStore.Provider>
  );
};

export default HealthCenterContextProvider;
