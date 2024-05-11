import { slideInDownAnimate } from "@/lib/utils";
import CImage from "./Image";

const Hero = ({ title, subtitle }: HeroProps) => {
  return (
    <div className="hero relative">
      <CImage
        src="/images/hero.jpg"
        alt="asd"
        width={0}
        height={0}
        sizes="(min-width: 808px) 50vw, 100vw"
        style={{
          objectFit: "cover",
          objectPosition: "bottom",
          opacity: 0.5,
        }}
      />
      <div className="hero-overlay" />
      <div className="hero-content">
        <h1 className="heading" style={slideInDownAnimate("400ms")}>
          {title}
        </h1>
        <h2 className="subHeading" style={slideInDownAnimate("750ms")}>
          {subtitle}
        </h2>
      </div>
    </div>
  );
};

export default Hero;
