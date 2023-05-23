import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import axios from "axios";

import "swiper/css";
import "swiper/css/pagination";

import "./mainService.scss";

import { Pagination, Autoplay } from "swiper";

function MainService() {
  const [data, setData] = useState([]);
  const swiperRef = useRef(null);

  useEffect(() => {
    const getData = async () => {
      const items = await axios.get(
        "https://pixabay.com/api/?key=29239330-861310eaa10b0f35694d09704&q=night+view&image_type=photo"
      );
      // console.log(items.data.hits);
      setData(items.data.hits);
    };
    getData();
    swiperRef.current.classList.add("active");
  }, [data]);

  return (
    <article className="mainService">
      <h2 className="title">Our Service</h2>

      <div className="mainServiceInner">
        <Swiper
          slidesPerView={4}
          spaceBetween={50}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          // autoplay={{
          //   delay: 2500,
          //   disableOnInteraction: false,
          // }}
          loop={true}
          centeredSlides={true}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
          ref={swiperRef}
        >
          {data.map((img) => (
            <SwiperSlide key={img.id} className="serviceImg">
              <img src={img.largeImageURL} alt={img.tags} />
              <h3>{img.tags.split(",", 1)}</h3>
              <p>{img.tags}</p>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </article>
  );
}

export default MainService;
