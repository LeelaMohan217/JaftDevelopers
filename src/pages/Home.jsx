import { Link } from "react-router-dom";
import { TypewriterEffect } from "../components/ui/typewriter-effect";
import { SparklesCore } from "../components/ui/sparkles";
import { TypewriterEffect1 } from "../components/ui/typewriter-effect1";
import fit from "../assets/fit.png";
import why from "../assets/why.png";

const Home = () => {
  const words = [
    {
      text: "Welcome",
      className: "text-red-700 dark:text-red-800",
    },
    {
      text: "to",
      className: "text-red-700 dark:text-red-800",
    },
  ];
  const wordss = [
    {
      text: "Welcome",
    },
    {
      text: "to",
    },
    {
      text: "Jaft",
      className: "text-red-700 dark:text-red-800",
    },
    {
      text: "Developers",
      className: "text-red-700 dark:text-red-800",
    },
  ];
  return (
    <div>
      <div className="h-[40rem] w-full bg-black hidden md:flex flex-col items-center justify-center overflow-hidden ">
        <TypewriterEffect words={words} />

        <h1 className="md:text-7xl text-3xl lg:text-9xl font-bold text-center text-white relative z-20">
          Jaft Developers
        </h1>
        <div className="w-[40rem] h-40 relative">
          {/* Gradients */}
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-red-500 to-transparent h-[2px] w-3/4 blur-sm" />
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-red-500 to-transparent h-px w-3/4" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-red-800 to-transparent h-[5px] w-1/4 lg:w-3/4 blur-sm" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-red-800 to-transparent h-px w-1/4 lg:w-3/4" />

          {/* Core component */}
          <SparklesCore
            background="transparent"
            minSize={0.4}
            maxSize={1}
            particleDensity={1200}
            className="w-full h-full"
            particleColor="#FFFFFF"
          />

          {/* Radial Gradient to prevent sharp edges */}
          <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
        </div>
      </div>
      {/* subpart */}
      <div className="max-w-7xl mx-auto px-6 py-20 md:py-0">
        <div className="flex flex-col items-center mt-6 lg:mt-20">
          <div className="md:hidden">
            <TypewriterEffect1 wordss={wordss} />
          </div>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
            Digitalizing Local{" "}
            <span className="bg-gradient-to-r from-red-600 to-red-800 text-transparent bg-clip-text">
              Bharat
            </span>
          </h1>
          <p className=" mt-5 lg:mt-10 text-base md:text-lg text-center text-neutral-200 max-w-4xl">
            Building a community of developers to build digital India
          </p>
          <p className="mt-5 lg:mt-10 text-base lg:text-lg text-center text-neutral-500 max-w-4xl">
            Empowering Developers, Transforming India Digitally! Join us as we
            unite talents, foster collaboration, and innovate towards a
            digitally empowered nation. Together, let&apos;s code the future of
            India, one breakthrough at a time!
          </p>
          <div
            className="flex flex-wrap justify-center my-10  gap-4
          "
          >
            <a
              href="#about"
              className="w-full md:w-40 bg-gradient-to-r from-red-600 to-red-800 py-3 px-4 rounded-md text-center"
            >
              Explore more
            </a>

            <Link
              to="/blog"
              className="w-full md:w-40 text-center py-3 px-4 rounded-md border"
            >
              Visit our blogs
            </Link>
          </div>
        </div>
      </div>
      <div className=" bg-neutral-900" id="about">
        <div className="max-w-7xl mx-auto px-6 py-6 md:py-10">
          <div className="text-center">
            {/* <span className="bg-neutral-900 text-red-600 rounded-full h-10 text-lg font-medium px-2 py-1 uppercase">
              About Us
            </span> */}
            <span className=" text-3xl px-2 py-1 ">About Us</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10 ">
            <div className="flex flex-col">
              <img
                className="object-cover w-full h-60"
                src="https://img1.wsimg.com/isteam/ip/5ff3b0ad-5fdd-422d-b010-1f70d6c0a853/blob.png"
                alt="About Image"
              />
              <h1 className="text-center py-4 text-xl">Who We Are</h1>
              <p className="px-4 font-extralight text-center">
                Jaft Developers is a full-service IT company that offers a wide
                range of services including web development, software
                development, digital marketing, and more. We are committed to
                providing our clients with the highest quality products and
                services that meet their specific needs.
              </p>
            </div>
            <div className="flex flex-col">
              <img
                className="object-cover w-full h-60"
                src="https://img1.wsimg.com/isteam/stock/BpD2gwm"
                alt="About Image"
              />
              <h1 className="text-center py-4 text-xl">Our Expertise</h1>
              <p className="px-4 font-extralight text-center">
                Our team comprises of highly skilled and experienced
                professionals who possess expertise in diverse areas of IT,
                including software development, web design, cloud computing, and
                cybersecurity. We stay up-to-date with the latest trends and
                technologies to ensure that we deliver the best solutions to our
                clients.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 py-20 md:py-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 mt-10 md:mt-20 items-center">
          <div className="order-2 md:order-1">
            <h1 className="font-bold text-lg py-4 text-red-700">Explore</h1>
            <h1 className="text-3xl">Why Jaft Developers?</h1>
            <p className="py-4 font-thin">
              Jest Developers is an emerging player in the offshore software
              development industry, dedicated to offering innovative software
              solutions to clients worldwide.
            </p>
            <p className="pb-4 font-thin">
              We offer a unique service to our clients who are interested in
              keeping pace with a rapidly evolving Internet world.
            </p>
            <p className="pb-4 font-thin">
              We do this by offering a strong emphasis on Technical excellence.
              Understanding our clients’ needs is the most important factor and
              the results are evident in the finished product.
            </p>
          </div>
          <div className="order-1 md:order-2">
            <img src={why} alt="Why Jest Developers" />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 mt-20 items-center">
          <div className="order-1">
            <img src={fit} alt="Why We Are Right Fit?" />
          </div>
          <div className="order-2">
            <h1 className="font-bold text-lg py-4 text-red-700">For You</h1>
            <h1 className="text-3xl">Why We Are The Right-Fit?</h1>
            <p className="py-4 font-thin">
              At Jest Developers, we deliver innovative, tailored solutions that
              meet your unique needs. Our commitment to quality ensures reliable
              and efficient results.
            </p>
            <p className="pb-4 font-thin">
              We prioritize customer satisfaction with a client-centric
              approach, offering unparalleled support and building lasting
              relationships. Our experienced, passionate team brings proven
              expertise and a drive for excellence to every project.
            </p>
            <p className="pb-4 font-thin">
              We provide scalable and flexible solutions to grow with your
              business, all while maintaining transparent and ethical practices.
              Trust us to be your dedicated partner in achieving success.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
