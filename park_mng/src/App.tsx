import React ,{useState,useEffect}from 'react';
import logo from './logo.svg';
import './App.css';
import AddPark from './components/addPark/addPark';
import ParkList from './components/parkList/parkList';
import { FormInfo } from './interface';

function App() {
  const [parkData,setParkData]=useState<FormInfo[]>([])

  const fetchData = () => {
    fetch("http://localhost:4000/parks")
      .then((res) => res.json())
      .then((data) => {
        setParkData(data);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="App">
      <AddPark/>
      <ParkList parkData={parkData}/>
    </div>
  );
}

export default App;
