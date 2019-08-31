import React, { useState } from "react";
import "./CampaignDetailTemplate.scss";
import CLOSE from "static/icClose.png";
import { back, push } from "libs/iosProtocol";

const CampaignDetailTemplate = props => {
  const [hideDesc, setHideDesc] = useState(props.desc.length >= 150);
  const [isJoin, setJoin] = useState(false);
  return (
    <div className="CampaignDetailTemplate">
      <div
        className="CampaignDetailTemplate__header"
        style={{ backgroundImage: `url(${props.bg})` }}
      >
        <button className="CampaignDetailTemplate__closeBtn" onClick={back}>
          <img src={CLOSE} alt="close-button" />
        </button>
      </div>
      <div className="CampaignDetailTemplate__content">
        <div className="CampaignDetailTemplate__content__title">
          <h1>{props.title}</h1>
          <span>해당 캠페인에 {props.count}명이 참여했습니다.</span>
          <button
            onClick={() => {
              setJoin(!isJoin);
            }}
            className={`${isJoin && "joined"}`}
          >
            {isJoin ? "참여완료" : "참여하기"}
          </button>
        </div>
        <div className="CampaignDetailTemplate__content__section">
          <h1>설명</h1>
          {props.desc.length >= 150 ? (
            hideDesc ? (
              <span>
                {props.desc.substring(0, 149)}
                <button
                  className="descCtrlBtn"
                  onClick={() => {
                    setHideDesc(!hideDesc);
                  }}
                >
                  ... 더보기
                </button>
              </span>
            ) : (
              <span>
                {props.desc}
                <button
                  className="descCtrlBtn"
                  onClick={() => {
                    setHideDesc(!hideDesc);
                  }}
                >
                  ... 줄이기
                </button>
              </span>
            )
          ) : (
            props.desc
          )}
        </div>
        <div className="CampaignDetailTemplate__content__section">
          <h1>참여</h1>
          <div className="CampaignTags">
            <span
              className="CampaignTag"
              role="img"
              aria-label="brand"
              onClick={() => {
                push("brand_list", "present");
              }}
            >
              🏢 {props.brandCount}개의 브랜드가 참여 중
            </span>
            <span className="CampaignTag" role="img" aria-label="talk">
              💬 {props.talkCount}명이 토론 중
            </span>
          </div>
        </div>
        <div className="CampaignDetailTemplate__content__section">
          <h1>활동</h1>
          <div className="CampaignTags">
            <span className="CampaignTag" role="img" aria-label="talk">
              💵 지지하는데 {props.dalor}$를 소비
            </span>
            <span className="CampaignTag" role="img" aria-label="talk">
              👤 새로운 {props.dailyCount}명 오늘 참여
            </span>
            <span className="CampaignTag" role="img" aria-label="brand">
              📨 {props.notiCount}개의 브랜드에게 통보
            </span>
          </div>
        </div>
        <div className="CampaignDetailTemplate__content__section">
          <h1>세부 내용</h1>
          <div className="Avatars">
            <div className="Avatar">
              <img
                src="https://avatars2.githubusercontent.com/u/30362922?s=460&v=4"
                alt="propfile"
                width="70"
                height="70"
              />
              <span>Seoji</span>
            </div>
            <span className="Avatar__rightBorder" />
            <div className="Avatar">
              <img
                src="https://avatars2.githubusercontent.com/u/30362922?s=460&v=4"
                alt="propfile"
                width="70"
                height="70"
              />
              <span>Seoji</span>
            </div>
            <div className="Avatar">
              <img
                src="https://avatars2.githubusercontent.com/u/30362922?s=460&v=4"
                alt="propfile"
                width="70"
                height="70"
              />
              <span>Seoji</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CampaignDetailTemplate;
