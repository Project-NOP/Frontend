import React from "react";
import "./CampaignBox.scss";
import PEOPLE from "static/icPeople.png";
import { DEPLOY } from "config/config.json";
import { push } from "libs/iosProtocol";

const CampaignBox = props => (
  <div className="CampaignBoxWrapper">
    <div
      className="CampaignBox"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/bgShadow.png), url(${props.bg})`,
        marginLeft: `${props.marginLeft ? 26 : 0}px`,
        marginRight: `${props.marginRight ? 26 : 0}px`
      }}
      onClick={() => {
        push("web", "present", `${DEPLOY}/campaign/${props.id}`, "false");
      }}
    >
      <div className="CampaignBox__joiner">
        <img src={PEOPLE} alt="people" className="CampaignBox__joiner--icon" />
        <span className="CampaignBox__joiner--count">{props.count}</span>
      </div>
      <h1>{props.title}</h1>
    </div>
  </div>
);
export default CampaignBox;
