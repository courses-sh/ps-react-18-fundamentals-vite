import HouseRow from "@/components/houseRow";
import { useState } from "react";

const housesArray = [
  {
    id: 1,
    address: "12 Valley of Kings, Geneva",
    country: "Switzerland",
    price: 900000,
  },
  {
    id: 2,
    address: "89 Road of Forks, Bern",
    country: "Switzerland",
    price: 500000,
  },
];

const HouseList = () => {
  const [houses, setHouses] = useState(housesArray);
  const [counter, setCounter] = useState(0);
  const addCount = () => setCounter(counter + 1);

  const addHouse = () => {
    setHouses([
      ...houses,
      {
        id: 3,
        address: "32 Valley Way, New York",
        country: "USA",
        price: 1000000,
      },
    ]);
  }

  return (
    // this is a React Fragment
    <>
      <div className="row mb-2">
        <h5 className="themeFontColor text-center">
          Houses currently on the market
        </h5>
      </div>
      <table className="table table-hover">
        <thead>
        <tr>
          <th>Address</th>
          <th>Country</th>
          <th>Asking Price</th>
        </tr>
        </thead>
        <tbody>
        {houses.map((house) => (
          <HouseRow key={house.id} house={house}/>
        ))}
        </tbody>
      </table>

      <br/>
      <strong>Count:</strong> {counter}
      <br/>
      <br/>

      <button className="btn btn-primary" onClick={addHouse}>
        Add House
      </button>
      {' '}
      <button className="btn btn-primary" onClick={addCount}>Increase Counter</button>
    </>
  )
}

export default HouseList;
