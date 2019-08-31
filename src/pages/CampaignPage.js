import React from "react";
import CampaignTemplate from "components/campaign/CampaignTemplate/CampaignTemplate";

const data = [
  {
    id: "1",
    bg: "http://www.sjsori.com/news/photo/201907/38729_45493_1042.jpg",
    count: "52,323",
    title: "BOYCOTT JAPAN"
  },
  {
    id: "2",
    bg:
      "http://s3.amazonaws.com/buycott/images/attachments/001/266/494/original/47e972d46dfc4141e286d6ef9add9ae7?1465196105",
    count: "120,676",
    title: "Boycott Trump Products"
  },
  {
    id: "3",
    bg: "http://www.sjsori.com/news/photo/201907/38729_45493_1042.jpg",
    count: "52,323",
    title: "BOYCOTT JAPAN"
  },
  {
    id: "4",
    bg:
      "http://s3.amazonaws.com/buycott/images/attachments/001/266/494/original/47e972d46dfc4141e286d6ef9add9ae7?1465196105",
    count: "120,676",
    title: "Boycott Trump Products"
  },
  {
    id: "5",
    bg: "http://www.sjsori.com/news/photo/201907/38729_45493_1042.jpg",
    count: "52,323",
    title: "BOYCOTT JAPAN"
  },
  {
    id: "6",
    bg:
      "http://s3.amazonaws.com/buycott/images/attachments/001/266/494/original/47e972d46dfc4141e286d6ef9add9ae7?1465196105",
    count: "120,676",
    title: "Boycott Trump Products"
  },
  {
    id: "7",
    bg: "http://www.sjsori.com/news/photo/201907/38729_45493_1042.jpg",
    count: "52,323",
    title: "BOYCOTT JAPAN"
  },
  {
    id: "8",
    bg:
      "http://s3.amazonaws.com/buycott/images/attachments/001/266/494/original/47e972d46dfc4141e286d6ef9add9ae7?1465196105",
    count: "120,676",
    title: "Boycott Trump Products"
  },
  {
    id: "9",
    bg: "http://www.sjsori.com/news/photo/201907/38729_45493_1042.jpg",
    count: "52,323",
    title: "BOYCOTT JAPAN"
  },
  {
    id: "10",
    bg:
      "http://s3.amazonaws.com/buycott/images/attachments/001/266/494/original/47e972d46dfc4141e286d6ef9add9ae7?1465196105",
    count: "120,676",
    title: "Boycott Trump Products"
  },
  {
    id: "11",
    bg: "http://www.sjsori.com/news/photo/201907/38729_45493_1042.jpg",
    count: "52,323",
    title: "BOYCOTT JAPAN"
  },
  {
    id: "12",
    bg:
      "http://s3.amazonaws.com/buycott/images/attachments/001/266/494/original/47e972d46dfc4141e286d6ef9add9ae7?1465196105",
    count: "120,676",
    title: "Boycott Trump Products"
  }
];

const CampaignPage = () => (
  <CampaignTemplate campaignCount={data.length} campaigns={data} />
);

export default CampaignPage;
