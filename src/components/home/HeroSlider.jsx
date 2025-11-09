import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const slides = [
  {
    id: 1,
    img: "https://i.ibb.co.com/FqV1tBFS/Generated-Image-November-09-2025-9-38-PM.png",
    title: "Smart AI Dashboard",
    subtitle: "Visualize and monitor your AI models in real time with an intelligent dashboard.",
  },
  {
    id: 2,
    img: "https://i.ibb.co.com/JjR338Zw/Generated-Image-November-09-2025-9-39-PM.png",
    title: "Collaborate Seamlessly",
    subtitle: "Empower your team to build, share, and manage AI models effortlessly.",
  },
  {
    id: 3,
    img: "https://i.ibb.co.com/VcQkLdxs/Generated-Image-November-09-2025-9-41-PM.png",
    title: "Data-Driven Intelligence",
    subtitle: "Securely store and deploy your AI models with cutting-edge infrastructure.",
  },
];


export default function HeroSlider() {
  return (
    <div className="relative w-full h-[80vh]">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop
        className="w-full h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="relative w-full h-full bg-center bg-cover"
              style={{ backgroundImage: `url(${slide.img})` }}
            >
              <div className="absolute inset-0 bg-black/30 flex flex-col justify-center items-center text-center text-white">
                <h2 className="text-4xl md:text-5xl font-bold mb-3 drop-shadow-lg">
                  {slide.title}
                </h2>
                <p className="text-lg md:text-xl max-w-xl">{slide.subtitle}</p>
                <button className="mt-6 btn btn-success text-white transition">
                  Explor Now
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}

        <div className="swiper-button-prev opacity-0 md:opacity-100 text-white!" />
        <div className="swiper-button-next opacity-0 md:opacity-100 text-white!" />
      </Swiper>
    </div>
  );
}
