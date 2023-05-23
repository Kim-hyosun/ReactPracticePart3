import { useState } from "react";
import KakaoFactory from "./KakaoFactory";
import KakaoOffice from "./KakaoOffice";

import "./kakaoMap.scss";

const KaKaoMap = () => {
  const [tab, setTab] = useState(1);

  return (
    <article className="kakaoMap">
      <h2 class="title">location</h2>
      <ul className="tabMenu">
        <li onClick={() => setTab(1)} className={tab === 1 ? "active" : ""}>
          <h2 className="tabBtn1">office</h2>
          <KakaoOffice />
        </li>
        <li onClick={() => setTab(2)} className={tab === 2 ? "active" : null}>
          <h2 className="tabBtn2">factory</h2>
          <KakaoFactory />
        </li>
        {/* {data.map(item => <li></li>)} */}
      </ul>
    </article>
  );
};

export default KaKaoMap;
