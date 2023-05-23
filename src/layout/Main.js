import MainSwiper from "../components/MainSwiper";
import MainGuide from "../components/MainGuide";
import MainGallery from "../components/MainGallery";
import MainBusiness from "../components/MainBusiness";
import MainYoutube from "../components/MainYoutube";
import MainService from "../components/MainService";

import axios from "axios";
import { useEffect, useState } from "react";
import KaKaoMap from "../components/KaKaoMap";

function Main() {
  const [gallery, setGallery] = useState([]);
  const [business, setBusiness] = useState([]);

  useEffect(() => {
    // axios.get("./DB/imgData.json").then((response) => {
    //   console.log(response.data.galleryData);
    // });

    const getData = async () => {
      const imgDataList = await axios.get("./DB/imgData.json");
      console.log(imgDataList.data.galleryData);
      setGallery(imgDataList.data.galleryData);
      setBusiness(imgDataList.data.businessData);
    };
    getData();
  }, []);

  return (
    <main>
      <MainSwiper />
      <MainGuide />
      <MainGallery gallery={gallery} />
      <MainBusiness business={business} />
      <MainYoutube />
      <MainService />
      <KaKaoMap />
    </main>
  );
}

export default Main;
