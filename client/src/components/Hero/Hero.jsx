import "./Hero.css";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import SearchBar from "../SearchBar/SearchBar";
const Hero = () => {
  return (
    <section className="hero-wrapper" style={{ backgroundImage: `url("/real3.jpg")` }}>
      <div className="paddings innerWidth flexCenter hero-container">
        {/* left side */}
        <div className="flexColStart hero-left">
          <div className="hero-title">
            <div className="orange-circle" />
            <motion.h1
              initial={{ y: "2rem", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 2,
                type: "ease-in",
              }}
            >

              Find The <br />
              Most Suitable
              <br /> Property
            </motion.h1>
          </div>
          <div className="flexColStart secondaryText flexhero-des" style={{ color: "white", fontSize: "1.2rem", fontWeight: "700" }} >
            <span >Find a variety of properties that suit you very easilty</span>
            <span>Forget all difficulties in finding a residence for you</span>
          </div>

          <SearchBar />
          <div className="flexCenter stats" style={{ color: "white", fontSize: "1.2rem", fontWeight: "700" }}>
            <div className="flexColCenter stat">
              <span>
                <CountUp start={8800} end={9000} duration={4} /> <span>+</span>
              </span>
              <span className="secondawe5ryText" style={{ fontSize: "1rem", fontWeight: "700" }} >Premium Product</span>
            </div>

            <div className="flexColCenter stat">
              <span>
                <CountUp start={1950} end={2000} duration={4} /> <span>+</span>
              </span>
              <span className="secondaryText" style={{ color: "white", fontSize: "1rem" }} >Happy Customer</span>
            </div>

            <div className="flexColCenter stat">
              <span>
                <CountUp end={28} /> <span>+</span>
              </span>
              <span className="secondaryText" style={{ color: "white", fontSize: "1rem" }} >Awards Winning</span>
            </div>
          </div>
        </div>

        {/* right side */}
        <div className="flexCenter hero-right">
          <motion.div
            initial={{ x: "7rem", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 2,
              type: "ease-in",
            }}
            className="image-container"
          >

            {/* <img src="./hero-image.png" alt="houses" /> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
