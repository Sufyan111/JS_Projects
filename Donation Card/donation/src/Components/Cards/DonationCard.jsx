import { CardChild } from "./CardChild";
import { CardReducer } from "../../Reducers/CardReducer";

export const DonationCard = () => {
  return (
    <div className="trending-card-container">
      <div id="card-container">
        <div className="row">
          {CardReducer.Data.map((item) => (
            <CardChild
              CardTitle={item.CardTitle}
              CardImage={item.CardImage}
              DonationAmount={item.DonationAmount}
              DonationCollected={item.DonationCollected}
              CreatedBy={item.CreatedBy}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
