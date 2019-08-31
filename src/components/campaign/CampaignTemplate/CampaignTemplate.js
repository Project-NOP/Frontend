import React from "react";
import CampaignBox from "../CampaignBox";
import "./CampaignTemplate.scss";
import CampaignHeader from "../CampaignHeader";

const CampaignTemplate = props => (
  <div className="CampaignTemplate">
    <CampaignHeader count={props.campaignCount} />
    {props.campaigns.map(campaign => {
      return (
        <CampaignBox
          {...{ bg: campaign.bg, count: campaign.count, title: campaign.title }}
        />
      );
    })}
  </div>
);
export default CampaignTemplate;
