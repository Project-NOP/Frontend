import React from "react";
import "./PlaceholderTemplate.scss";

const PlaceholderTemplate = props => (
  <div className="PlaceholderTemplate">
    <h1 className="PlaceholderTemplate__title">
      NOP!에서 추천드리는 대체재 리스트입니다.
    </h1>
    <div
      className="BarcodeBox"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/bgShadow.png), url(${process.env.PUBLIC_URL}/barcode2.png)`
      }}
    >
      <span className="BarcodeBox__joiner">2,432</span>
      <h1>포카리스웨트</h1>
    </div>
    <div className="PlaceholderTemplate__section">
      <div className="PlaceholderTemplate__section__title">
        <h1>관련된 캠페인</h1>
      </div>
      <div className="PlaceholderTemplate__slider">
        <div className="PlaceholderTemplate__box">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6hWgpTpH6V-FuL_SIZ5pLbZ10Ctf199yqfDYz1Fg8R3DjM3X2kA"
            alt="campaign img"
          />
          <span>Nono Japa...</span>
        </div>
        <div className="PlaceholderTemplate__box">
          <img
            src="http://image.zdnet.co.kr/2019/08/07/paikshow_I5kGGWuhGQt.jpg"
            alt="campaign img"
          />
          <span>BOYCOTT J...</span>
        </div>
        <div className="PlaceholderTemplate__box">
          <img
            src="http://www.financialreview.co.kr/news/photo/201907/17038_18485_576.jpg"
            alt="campaign img"
          />
          <span>Dont' use...</span>
        </div>
        <div className="PlaceholderTemplate__box">
          <img
            src="http://image.chosun.com/sitedata/image/201907/18/2019071801300_0.png"
            alt="campaign img"
          />
          <span>Don't go...</span>
        </div>
      </div>
    </div>
    <div className="PlaceholderTemplate__section">
      <div className="PlaceholderTemplate__section__title">
        <h1>대체재 상품</h1>
      </div>
      <div className="PlaceholderTemplate__slider">
        <div className="PlaceholderTemplate__box">
          <img
            src="https://post-phinf.pstatic.net/MjAxOTA0MjlfMjc3/MDAxNTU2NTA0NDc5MTIy.je-3OkldkItsMFBHWZlF3z-Dyxd6YqTokpmiADWNKlsg.zQIdyFfXaBuF0y03rZT9HqXT2Rkc2aVxa9uzSWjuV3sg.PNG/image.png?type=w1200"
            alt="campaign img"
          />
          <span>이온더핏</span>
        </div>
        <div className="PlaceholderTemplate__box">
          <img
            src="http://item.ssgcdn.com/13/57/67/item/1000017675713_i1_1200.jpg"
            alt="campaign img"
          />
          <span>토레타</span>
        </div>
        <div className="PlaceholderTemplate__box">
          <img
            src="http://cfile203.uf.daum.net/image/99DE324C5AAED35334308E"
            alt="campaign img"
          />
          <span>이프로 아쿠아</span>
        </div>
      </div>
    </div>
  </div>
);
export default PlaceholderTemplate;
