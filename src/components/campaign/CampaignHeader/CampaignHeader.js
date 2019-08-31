import React from "react";
import "./CampaignHeader.scss";

const CampaignHeader = props => (
  <div className="CampaignHeader">
    <div className="CampaignHeader__left">
      <span className="CampaignHeader__left--count">
        총 {props.count}개의 캠페인이 있습니다.
      </span>
    </div>
  </div>
);
export default CampaignHeader;
