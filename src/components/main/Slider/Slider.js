import React from "react";
import "./Slider.scss";
import CampaignBox from "components/campaign/CampaignBox";

const Slider = props => {
  const firstItem = props.data.shift();
  const lastItem = props.data.pop();
  return (
    <div className="Slider">
      <span role="img" aria-label="emoji" className="Slider__title">
        {props.title}
      </span>
      <div className="Slider__content">
        <CampaignBox
          bg={firstItem.bg}
          count={firstItem.count}
          title={firstItem.title}
          marginLeft={true}
        />
        {props.data.map(item => (
          <CampaignBox
            bg={item.bg}
            count={item.count}
            title={item.title}
            marginLeft={true}
          />
        ))}
        <CampaignBox
          bg={lastItem.bg}
          count={lastItem.count}
          title={lastItem.title}
          marginRight={true}
        />
      </div>
    </div>
  );
};
export default Slider;
