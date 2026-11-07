import Banner from "@/components/banner";
import HouseList from "@/components/houseList";
import House from "@/components/house";
import { useState } from "react";

const App = () => {
  const [selectedHouse, setSelectedHouse] = useState();
  return (
    <>
      <Banner>
        <div>Providing houses all over the world</div>
      </Banner>
      {selectedHouse ?
        <House house={selectedHouse}/> :
        <HouseList selectHouse={setSelectedHouse}/>}
    </>
  );
}

export default App;
