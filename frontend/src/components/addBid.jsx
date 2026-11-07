import { useState } from "react";

const AddBid = ({house, addBid}) => {
  const emptyBid = {
    houseId: house.id,
    bidder: "",
    amount: 0,
  };

  const [newBid, setNewBid] = useState(emptyBid);

  const onBidSubmitClick = () => {
    addBid(newBid);
    setNewBid(emptyBid);
  };

  return (
    <div className="input-group">
      <div className="col-5">
        <input
          id="bidder"
          className="form-control"
          type="text"
          value={newBid.bidder}
          onChange={(e) => setNewBid({...newBid, bidder: e.target.value})}
          placeholder="Bidder"
        ></input>
      </div>
      <div className="col-5">
        <input
          id="amount"
          className="form-control"
          type="number"
          value={newBid.amount}
          onChange={(e) =>
            setNewBid({...newBid, amount: parseInt(e.target.value)})
          }
          placeholder="Amount"
        ></input>
      </div>
      <div className="col-2">
        <button className="btn btn-primary" onClick={onBidSubmitClick}>
          Add
        </button>
      </div>
    </div>
  );
};

export default AddBid;
