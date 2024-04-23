import React from "react";
import { Box, Text, Image } from "@chakra-ui/react";

import "../../styles/about.css";

const About = () => {
  return (
    <>
      <Box
        minH="100dvh"
        display="flex"
        justifyContent="center"
        alignItems="center"
        className="abt-main"
        zIndex="10"
      >
        {/* video */}
        <Box position="relative" zIndex="10">
          <Box
            position="absolute"
            zIndex="15"
            left="50%"
            transform="translate(-50%, 0)"
            bottom="40px"
            className="abt-txt"
            padding="20px 30px"
            bg="#00000080"
            border="0.5px rgba(255,255,255,.4) solid"
            w="85%"
            backdropFilter="blur(15px)"
            borderRadius="1.2rem"
          >
            <Text
              fontFamily="Bebas Neue"
              fontWeight="400"
              color="white"
              lineHeight="normal"
              fontSize="3rem"
              className="abt-t"
              zIndex="15"
            >
              ABOUT US
            </Text>
            <Text
              color="white"
              fontFamily="Montserrat"
              fontWeight="500"
              lineHeight="normal"
              fontSize=".9rem"
              className="abt-d"
              zIndex="15"
            >
              We at Volaverse are working towards creating a community driven
              metaverse on blockchain for Web 3.0 enthusiasts around the globe.
              To contribute to the flourishing fast growing ecosystem we aim to
              build a learning, teaching and socializing platform creating a
              gamified and immersive experience for our users.
            </Text>
          </Box>
          <div className="vd-wrap">
            <video autoPlay loop muted className="abt-video">
              <source src="/videos/about1.mp4" autoPlay loop type="video/mp4" />
            </video>
          </div>
        </Box>
      </Box>

      {/* products */}
      <Box
        display="flex"
        px="100px"
        className="all-cnt abt-boxes"
        my="50px"
        gap="20px"
      >
        {/* p-1 */}
        <Box
          bg="rgba(255,255,255,.01)"
          boxShadow="inset 3.17746px 3.17746px 6.35492px #161b1d40, inset -3.17746px -3.17746px 6.35492px #fafbff"
          px="10px"
          pb="30px"
          borderRadius="1.9rem"
          w="25%"
          className="abt-box"
          data-aos="zoom-in"
        >
          <Box
            py="50px"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Image w="60%" src="/images/p1.png" alt="3D IMMERSIVE" />
          </Box>
          <Text
            color="#3B3B3B"
            fontFamily="Bebas Neue"
            fontWeight="400"
            fontSize="1.5rem"
            lineHeight="normal"
          >
            3D IMMERSIVE
          </Text>
          <Text
            color="#3B3B3B"
            fontFamily="Montserrat"
            fontWeight="500"
            fontSize=".7rem"
            lineHeight="normal"
          >
            Some people are unable to visualize how a block chain works and
            hence, comes the ideas to teach Web3.0 using 3D immersive content
          </Text>
        </Box>

        {/* p-2 */}
        <Box
          bg="rgba(255,255,255,.01)"
          boxShadow="inset 3.17746px 3.17746px 6.35492px #161b1d40, inset -3.17746px -3.17746px 6.35492px #fafbff"
          px="10px"
          pb="30px"
          borderRadius="1.9rem"
          w="25%"
          className="abt-box"
          data-aos="zoom-in"
        >
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            pt="50px"
            pb="38px"
          >
            <Image w="55%" src="/images/p2.png" alt="3D IMMERSIVE" />
          </Box>
          <Text
            color="#3B3B3B"
            fontFamily="Bebas Neue"
            fontWeight="400"
            fontSize="1.5rem"
            lineHeight="normal"
            textTransform="uppercase"
          >
            gamification
          </Text>
          <Text
            color="#3B3B3B"
            fontFamily="Montserrat"
            fontWeight="500"
            fontSize=".7rem"
            lineHeight="normal"
          >
            Exciting gamified experience for the users, incentivizing them to
            learn and earn from the content
          </Text>
        </Box>

        {/* p-3 */}
        <Box
          bg="rgba(255,255,255,.01)"
          boxShadow="inset 3.17746px 3.17746px 6.35492px #161b1d40, inset -3.17746px -3.17746px 6.35492px #fafbff"
          px="10px"
          pb="30px"
          borderRadius="1.9rem"
          w="25%"
          className="abt-box"
          data-aos="zoom-in"
        >
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            pt="50px"
            pb="31px"
          >
            <Image w="50%" src="/images/p3.png" alt="3D IMMERSIVE" />
          </Box>
          <Text
            color="#3B3B3B"
            fontFamily="Bebas Neue"
            fontWeight="400"
            fontSize="1.5rem"
            lineHeight="normal"
            textTransform="uppercase"
          >
            economy
          </Text>
          <Text
            color="#3B3B3B"
            fontFamily="Montserrat"
            fontWeight="500"
            fontSize=".7rem"
            lineHeight="normal"
          >
            Create and earn on our decentralized platform where you own your
            content
          </Text>
        </Box>

        {/* p-4 */}
        <Box
          bg="rgba(255,255,255,.01)"
          boxShadow="inset 3.17746px 3.17746px 6.35492px #161b1d40, inset -3.17746px -3.17746px 6.35492px #fafbff"
          px="10px"
          pb="30px"
          borderRadius="1.9rem"
          w="25%"
          className="abt-box"
          data-aos="zoom-in"
        >
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            pt="50px"
            pb="10px"
          >
            <Image w="30%" src="/images/p4.png" alt="3D IMMERSIVE" />
          </Box>
          <Text
            color="#3B3B3B"
            fontFamily="Bebas Neue"
            fontWeight="400"
            fontSize="1.5rem"
            lineHeight="normal"
            textTransform="uppercase"
          >
            easy to build
          </Text>
          <Text
            color="#3B3B3B"
            fontFamily="Montserrat"
            fontWeight="500"
            fontSize=".7rem"
            lineHeight="normal"
          >
            Easy to use in house tools and aid the users to build on their
            plots/estates
          </Text>
        </Box>
      </Box>
    </>
  );
};

export default About;
