import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay } from "swiper";

export const Slider = ({ imagenes, velocity = 3000 }) => {
  return (
    <div className="slider">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={30}
        slidesPerView={"auto"}
        loop={true}
        autoplay={{
          delay: 0,
          pauseOnMouseEnter: true
        }}
        speed={velocity}
      >
        {imagenes.map((img, i) => (
          <SwiperSlide key={`slider_${i}`}>
            <img src={img.url} alt="imagen" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
