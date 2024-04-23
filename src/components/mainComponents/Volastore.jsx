import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Text,
  Image,
  Button,
  Card,
  CardBody,
  Stack,
  Heading,
} from "@chakra-ui/react";
import "../../styles/blogs.css";
// import { blogs } from "../../data/blogData";
import Aos from "aos";
import "aos/dist/aos.css";

import "../../styles/volastore.css";
import FourDotsSlideAnimation from "./FourDotsSlideAnimation";

const ProductSlider = ({ products }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextProduct = () => {
    setCurrentIndex((currentIndex + 1) % products.length);
  };

  const prevProduct = () => {
    setCurrentIndex((currentIndex - 1 + products.length) % products.length);
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  const getNextProducts = () => {
    const nextProductIndices = [
      (currentIndex + 1) % products.length,
      (currentIndex + 2) % products.length,
      (currentIndex + 3) % products.length,
    ];
    return nextProductIndices.map((index) => products[index]);
  };

  const handleClick = () => {
    window.open(products[currentIndex].link, "_blank");
  };

  useEffect(() => {
    // getAllProducts()
    Aos.init();
  }, []);

  return (
    <Box
      minH="100dvh"
      px="100px"
      pt="70px"
      zIndex="10"
      className="all-cnt blogs-main"
    >
      <Text
        color="#3D3D3D"
        fontFamily="Bebas Neue"
        fontWeight="400"
        lineHeight="normal"
        fontSize="4.5rem"
        className="all-title"
        data-aos="zoom-out-right"
      >
        VOLASTORE
      </Text>

      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        zIndex="10"
      >
        <Text
          fontFamily="Montserrat"
          fontWeight="400"
          lineHeight="normal"
          color="#3D3D3D"
          maxW="70%"
          data-aos="zoom-out-right"
          className="vola-p"
        >
          Vorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et velit interdum, ac aliquet odio mattis.
        </Text>

        <Button
          bg="#745AC3"
          color="#FFF"
          fontFamily="Bebas Neue"
          fontWeight="400"
          fontSize="1.2rem"
          lineHeight="normal"
          className="blogs-btn v-btn"
          boxShadow="5.236px 5.76px 15.708px 0px rgba(0, 0, 0, 0.40)"
          onClick={handleClick}
          zIndex="10"
          data-aos="zoom-out-left"
        >
          VIEW VOLASTORE
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="15"
              viewBox="0 0 26 20"
              fill="none"
            >
              <path
                d="M16.5024 18.377L24.8799 9.99949L16.5024 1.62199"
                stroke="white"
                stroke-width="1.97201"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M1.41717 9.99902L24.645 9.99902"
                stroke="white"
                stroke-width="1.97201"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>
        </Button>
      </Box>

      {/* products */}

      <Box
        display="grid"
        gridTemplateColumns="1fr 2fr"
        gap="40px"
        mt="40px"
        className="vola-st"
        zIndex="10"
      >
        <Box
          borderRadius="1rem"
          bg="linear-gradient(141deg, rgba(116, 90, 195, 0.36) 1.09%, rgba(236, 240, 243, 0.00) 99.96%)"
          boxShadow="6.895px 6.895px 17.237px 0px rgba(59, 59, 59, 0.70), -8.274px -6.895px 17.237px 0px rgba(255, 255, 255, 0.80)"
          p="20px"
          display="flex"
          justifyContent="center"
          alignItems="center"
          data-aos="zoom-in"
          zIndex="10"
        >
          <Image
            h="300px"
            src={products[currentIndex].img}
            alt={products[currentIndex].name}
            zIndex="10"
          />
        </Box>
        <Box zIndex="10">
          <Text
            color="#313131"
            fontFamily="Bebas Neue"
            fontWeight="400"
            lineHeight="normal"
            textTransform="uppercase"
            fontSize="2.5rem"
            className="p-name"
            zIndex="10"
          >
            {products[currentIndex].name}
          </Text>
          <Text
            color="#313131"
            fontFamily="Montserrat"
            fontWeight="500"
            lineHeight="normal"
            textTransform="uppercase"
            fontSize="1.1rem"
            className="p-price"
            zIndex="10"
          >
            {"$"}
            {products[currentIndex].price}
          </Text>
          <Box
            display="flex"
            justifyContent="space-between"
            className="vola-btns"
            zIndex="10"
          >
            <Button
              fontFamily="Bebas Neue"
              fontWeight="400"
              fontSize="1.1rem"
              background="linear-gradient(90deg,#745AC3 66.98%,rgba(248,138,176,.8) 100%)"
              boxShadow="8.75205px 9.62725px 26.2561px #0006"
              color="white"
              padding="5px 12px"
              className="vola-btn"
              onClick={handleClick}
              zIndex="10"
              mt="10px"
              mb="20px"
            >
              VIEW IN VOLASTORE
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="15"
                  viewBox="0 0 26 20"
                  fill="none"
                >
                  <path
                    d="M16.5024 18.377L24.8799 9.99949L16.5024 1.62199"
                    stroke="white"
                    stroke-width="1.97201"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M1.41717 9.99902L24.645 9.99902"
                    stroke="white"
                    stroke-width="1.97201"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
            </Button>
            <Box display="flex" zIndex="10">
              <Button
                bg="transparent"
                p="0"
                className="prev-btn"
                onClick={prevProduct}
                zIndex="10"
              >
                <Image h="1.5rem" src="/images/prev.png" zIndex="10" />
              </Button>
              <Button
                bg="transparent"
                p="0"
                className="prev-btn"
                onClick={nextProduct}
                zIndex="10"
              >
                <Image
                  transform="rotate(180deg)"
                  h="1.5rem"
                  src="/images/prev.png"
                  zIndex="10"
                />
              </Button>
            </Box>
          </Box>

          <Box
            display="flex"
            className="pc"
            zIndex="10"
            justifyContent="space-between"
          >
            {getNextProducts().map((p) => (
              <Box
                key={p.id}
                bg="linear-gradient(135deg, rgba(236, 240, 243, 0.00) -0.1%, rgba(248, 138, 176, 0.35) 99.91%)"
                boxShadow="6.813px 6.813px 17.032px 0px rgba(59, 59, 59, 0.70), -8.175px -6.813px 17.032px 0px rgba(255, 255, 255, 0.80)"
                borderRadius="1rem"
                zIndex="10"
                display="flex"
                justifyContent="center"
                alignItems="center"
                h="220px"
                w="220px"
                data-aos="zoom-in"
              >
                <Image h="85%" src={p.img} alt={p.name} zIndex="10" />
              </Box>
            ))}
          </Box>
        </Box>
      </Box>

      <Box className="ph" mt="20px">
        <Box display="flex" zIndex="10" justifyContent="space-between">
          {getNextProducts().map((p) => (
            <Box
              key={p.id}
              bg="linear-gradient(135deg, rgba(236, 240, 243, 0.00) -0.1%, rgba(248, 138, 176, 0.35) 99.91%)"
              boxShadow="6.813px 6.813px 17.032px 0px rgba(59, 59, 59, 0.70), -8.175px -6.813px 17.032px 0px rgba(255, 255, 255, 0.80)"
              borderRadius="1rem"
              zIndex="10"
              display="flex"
              justifyContent="center"
              alignItems="center"
              h="220px"
              w="220px"
              data-aos="zoom-in"
              className="prs"
            >
              <Image h="85%" src={p.img} alt={p.name} />
            </Box>
          ))}
        </Box>
      </Box>

      <Box display="flex" justifyContent="end" className="dots">
        <FourDotsSlideAnimation
          currentIndex={currentIndex}
          onDotClick={handleDotClick}
        />
      </Box>
    </Box>
  );
};

const Volastore = () => {
  const products = [
    {
      id: 1,
      name: "dress boy#1",
      price: "4.50",
      img: "/images/pr1.png",
      link: "https://colorlib.com/wp/template/jackco/",
    },
    {
      id: 2,
      name: "dress boy#2",
      price: "4.00",
      img: "/images/pr2.png",
      link: "abc",
    },
    {
      id: 3,
      name: "dress boy#3",
      price: "3.75",
      img: "/images/pr3.png",
      link: "abc",
    },
    {
      id: 4,
      name: "dress boy#4",
      price: "5.89",
      img: "/images/pr4.png",
      link: "abc",
    },
  ];

  return (
    <div>
      <ProductSlider products={products} />
    </div>
  );
};

export default Volastore;
