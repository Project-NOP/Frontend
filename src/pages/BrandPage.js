import React from "react";
import BrandTemplate from "components/brand/BrandTemplate";

const data = [
  {
    logoUrl:
      "https://yt3.ggpht.com/a/AGF-l7-wxI7DLGTXjXY0-SYuB7Os-aFHwgmtf4jPUQ=s900-c-k-c0xffffffff-no-rj-mo",
    name: "Apple",
    category: "제조회사"
  },
  {
    logoUrl:
      "https://thedigitalhacker.com/wp-content/uploads/2019/07/google-1.jpg",
    name: "Google",
    category: "제조회사"
  },
  {
    logoUrl:
      "https://logodownload.org/wp-content/uploads/2014/09/facebook-logo-1.png",
    name: "Facebook",
    category: "네트워크 서비스"
  },
  {
    logoUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTilglRK82OC_tg_TSaNK3O_OXqxgkBme1ujsMreerf5trtzgPY",
    name: "Twitter",
    category: "네트워크 서비스"
  },
  {
    logoUrl:
      "https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F113FB1134B58365B52",
    name: "Asahi",
    category: "제조회사"
  },
  {
    logoUrl:
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/09b224b1-0efe-48b7-9375-849e413ff1ef/dc9r397-da6a2ef2-c61d-42da-bfa1-1fe6eeb3b238.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzA5YjIyNGIxLTBlZmUtNDhiNy05Mzc1LTg0OWU0MTNmZjFlZlwvZGM5cjM5Ny1kYTZhMmVmMi1jNjFkLTQyZGEtYmZhMS0xZmU2ZWViM2IyMzgucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.MfljqjoWed_DirQW-UvSFBsvZ4aQKOD6UJd7x8chGYo",
    name: "SONY",
    category: "제조회사"
  },
  {
    logoUrl:
      "data:image/png;base64,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",
    name: "Canon",
    category: "제조회사"
  },
  {
    logoUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfTRY1ZvPW_c9R8j7CY5tmUUwsFqWCLVm5clfxfLxufoTx3xRB",
    name: "TESLR",
    category: "제조회사"
  }
];

const BrandPage = () => <BrandTemplate data={data} />;

export default BrandPage;
