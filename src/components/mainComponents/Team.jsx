import React, { useEffect } from "react";
import { Box, Text, Image, Stack } from "@chakra-ui/react";
import { team } from "../../data/teamData";
import "../../styles/team.css";
import Aos from "aos";
import "aos/dist/aos.css";

const Team = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <Box
      minH="100dvh"
      pt="70px"
      px="100px"
      zIndex="10"
      className="all-cnt tm-main"
    >
      <Box zIndex="10">
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
          MEET THE TEAM
        </Text>

        {/* team cards */}
        <Box
          display="flex"
          justifyContent="space-between"
          mt="30px"
          zIndex="10"
        >
          {team.map((t) => (
            <Box
              key={t.name}
              zIndex="10"
              display="flex"
              justifyContent="center"
              flexDirection="column"
            >
              <Box
                bg="#ECF0F3"
                boxShadow="-13.3826px -11.1521px 27.8803px #fafbff, 11.1521px 11.1521px 27.8803px #161b1d40"
                overflow="hidden"
                borderRadius="1.9rem"
                display="flex"
                justifyContent="center"
                alignItems="center"
                zIndex="10"
                className="tm-box"
                position="relative"
                data-aos="zoom-in"
              >
                <Image src={t.image} h="15rem" w="16rem" zIndex="10" />
                <Box className="tm-hover" p="10px">
                  <Text
                    color="#ECF0F3"
                    fontFamily="Bebas Neue"
                    fontWeight="400"
                    lineHeight="normal"
                    textTransform="uppercase"
                    fontSize="1.5rem"
                    my="10px"
                  >
                    {t.name}
                  </Text>
                  <Text
                    color="#ECF0F3"
                    fontFamily="Montserrat"
                    fontWeight="300"
                    lineHeight="normal"
                    fontSize="1rem"
                    mb="10px"
                  >
                    {t.moto}
                  </Text>
                  <Box display="flex" gap="5px">
                    <a href={t.linkedIm} target="_blank">
                      <Image h="2.5rem" src="/images/linkedIn.png" />
                    </a>
                    <a href={t.twitter} target="_blank">
                      <Image h="2.5rem" src="/images/twitter.png" />
                    </a>
                  </Box>
                </Box>
              </Box>
              <Box ps="10px" zIndex="10" className="tm-txt-cnt">
                <Text
                  color="#3B3B3B"
                  fontFamily="Bebas Neue"
                  fontWeight="400"
                  lineHeight="normal"
                  textTransform="uppercase"
                  fontSize="2rem"
                  mt="15px"
                  zIndex="10"
                  className="tm-n"
                >
                  {t.name}
                </Text>
                <Text
                  color="#3B3B3B"
                  fontFamily="Montserrat"
                  fontWeight="300"
                  lineHeight="normal"
                  fontSize="1.2rem"
                  className="tm-p"
                >
                  {t.profile}
                </Text>
              </Box>
            </Box>
          ))}
        </Box>

        <Box
          bg="rgba(236,240,243,.01)"
          boxShadow="-12px -10px 25px #fafbffb3, 10px 10px 25px #161b1d40"
          display="flex"
          justifyContent="space-between"
          mt="50px"
          p="30px"
          gap="50px"
          zIndex="10"
          className="tm-2-txt"
          borderRadius="1.5rem"
        >
          <Stack minW="55%" zIndex="10">
            <Text
              color="#3B3B3B"
              fontFamily="Montserrat"
              fontWeight="300"
              lineHeight="normal"
              zIndex="10"
              className="tm-hd"
            >
              THE TEAM
            </Text>
            <Text
              color="#3B3B3B"
              fontFamily="Bebas Neue"
              fontWeight="400"
              lineHeight="normal"
              fontSize="1.5rem"
              letterSpacing="1.5px"
              zIndex="10"
              className="tm-hd-1"
            >
              THE VOLAVERSE ROSTER
            </Text>
            <Text
              color="#3D3D3D"
              fontFamily="Montserrat"
              fontWeight="300"
              lineHeight="normal"
              zIndex="10"
              className="tm-d-2"
            >
              The Volaverse roster is an exclusive, dynamic and curious team of
              Web3 enthusiasts and Edtech experts working diligently towards
              making an impact in the lives of people all around the globe by
              contributing to the flourishment of Web 3.0 ecosystem
            </Text>
          </Stack>
          <Stack zIndex="10">
            <Text
              color="#3B3B3B"
              fontFamily="Bebas Neue"
              fontWeight="400"
              lineHeight="normal"
              letterSpacing="1.5px"
              fontSize="1.5rem"
              zIndex="10"
              className="tm-hd-1"
            >
              CAPABILITIES
            </Text>
            <Text
              color="#3B3B3B"
              fontFamily="Montserrat"
              fontWeight="500"
              lineHeight="normal"
              display="flex"
              flexWrap="wrap"
              rowGap="10px"
              columnGap="20px"
              fontSize=".9rem"
              zIndex="10"
              className="tm-d-2"
            >
              <span>BLOCKCHAIN</span>
              <span>EDUCATION</span>
              <span>CRYPTO</span>
              <span>GAMIFICATION</span>
              <span>METAVERSE ILLUSTRATION</span>
              <span>PLATFORM INTEGRATION</span>
              <span>3D ANIMATION</span>
            </Text>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};

export default Team;
