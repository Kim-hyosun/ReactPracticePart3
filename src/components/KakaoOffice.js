import { useEffect, useRef } from "react";

function KakaoOffice() {
  const { kakao } = window;
  const mapContainer = useRef(null);
  const mapOption = {
    center: new kakao.maps.LatLng(33.450701, 126.570667),
    level: 3,
  };
  const markerPosition = new kakao.maps.LatLng(33.450701, 126.570667);

  useEffect(() => {
    const map = new kakao.maps.Map(mapContainer.current, mapOption);
    const marker = new kakao.maps.Marker({ position: markerPosition });
    marker.setMap(map);
  }, []);

  return (
    <div className="kakaoBox">
      <div id="map" ref={mapContainer}></div>
    </div>
  );
}

export default KakaoOffice;