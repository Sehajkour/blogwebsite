import React, { useEffect } from "react";
import { Box, Text, Image } from "@chakra-ui/react";
import "../../styles/join.css";
import Aos from "aos";
import "aos/dist/aos.css";

const Join = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <Box
      minH="100dvh"
      px="100px"
      display="flex"
      alignItems="center"
      zIndex="10"
      className="all-cnt join-main"
    >
      <Box w="100%" zIndex="10">
        <Text
          color="#3B3B3B"
          fontFamily="Bebas Neue"
          fontWeight="400"
          lineHeight="normal"
          fontSize="4.5rem"
          zIndex="10"
          className="all-title"
          data-aos="zoom-out-right"
        >
          JOIN US
        </Text>
        <Box display="flex" justifyContent="space-evenly" mt="30px" zIndex="10">
          <Box
            bg="#ECF0F3"
            borderRadius="2rem"
            p="15px"
            boxShadow="-15.8632px -13.2194px 33.0484px #fafbff, 13.2194px 13.2194px 33.0484px #161b1d40"
            zIndex="10"
            className="join-box"
            position="relative"
            overflow="hidden"
            data-aos="zoom-in"
          >
            <Box
              className="join-hover"
              p="10px"
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Box display="flex" gap="5px" alignItems="center">
                <a
                  href="https://www.youtube.com/@shinewithswati9"
                  target="_blank"
                >
                  <Image h="2.5rem" src="/images/youtube.png" />
                </a>
                <a
                  href="https://www.instagram.com/shine.with.swati/"
                  target="_blank"
                >
                  <Image h="2rem" src="/images/insta.png" />
                </a>
              </Box>
            </Box>
            <Box display="flex" justifyContent="center">
              <Image src="images/j1.png" w="13rem" />
            </Box>
            <Text
              color="#3B3B3B"
              fontFamily="Bebas Neue"
              fontWeight="400"
              lineHeight="normal"
              textAlign="center"
              fontSize="1.6rem"
            >
              SHINE WITH SWATI
            </Text>
          </Box>
          <Box
            bg="#ECF0F3"
            borderRadius="2rem"
            p="15px"
            boxShadow="-15.8632px -13.2194px 33.0484px #fafbff, 13.2194px 13.2194px 33.0484px #161b1d40"
            zIndex="10"
            className="join-box"
            overflow="hidden"
            position="relative"
            data-aos="zoom-in"
          >
            <Box
              className="join-hover"
              p="10px"
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Box display="flex" gap="5px" alignItems="center">
                <a href="https://www.youtube.com/@VolabeeVines" target="_blank">
                  <Image h="2.5rem" src="/images/youtube.png" />
                </a>
                <a
                  href="https://www.instagram.com/volabeevines/"
                  target="_blank"
                >
                  <Image h="2rem" src="/images/insta.png" />
                </a>
              </Box>
            </Box>
            <Box display="flex" justifyContent="center">
              <Image src="images/j2.png" w="13rem" />
            </Box>
            <Text
              color="#3B3B3B"
              fontFamily="Bebas Neue"
              fontWeight="400"
              lineHeight="normal"
              textAlign="center"
              fontSize="1.6rem"
            >
              VOLABEE VINES
            </Text>
          </Box>
          <Box
            bg="#ECF0F3"
            borderRadius="2rem"
            p="15px"
            boxShadow="-15.8632px -13.2194px 33.0484px #fafbff, 13.2194px 13.2194px 33.0484px #161b1d40"
            zIndex="10"
            className="join-box"
            overflow="hidden"
            position="relative"
            data-aos="zoom-in"
          >
            <Box
              className="join-hover"
              p="10px"
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Box display="flex" gap="5px" alignItems="center">
                <a href="https://www.youtube.com/@Web3Buddha" target="_blank">
                  <Image h="2.5rem" src="/images/youtube.png" />
                </a>
                <a
                  href="https://www.instagram.com/web3buddhaa/"
                  target="_blank"
                >
                  <Image h="2rem" src="/images/insta.png" />
                </a>
              </Box>
            </Box>
            <Box display="flex" justifyContent="center">
              <Image src="images/j3.png" w="13rem" />
            </Box>
            <Text
              color="#3B3B3B"
              fontFamily="Bebas Neue"
              fontWeight="400"
              lineHeight="normal"
              textAlign="center"
              fontSize="1.6rem"
            >
              WEB3 BUDDHA
            </Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Join;
