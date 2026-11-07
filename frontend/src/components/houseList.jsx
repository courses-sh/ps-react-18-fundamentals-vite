import HouseRow from "@/components/houseRow";
import useHouses from "@/hooks/useHouses";

const HouseList = ({selectHouse}) => {
  const {houses, setHouses} = useHouses();

  const addHouse = () => {
    setHouses([
      ...houses,
      {
        id: houses.length + 1,
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
          <HouseRow key={house.id} house={house} selectHouse={selectHouse}/>
        ))}
        </tbody>
      </table>

      <button className="btn btn-primary" onClick={addHouse}>
        Add House
      </button>
    </>
  )
}

export default HouseList;
