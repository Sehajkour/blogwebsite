import React, { useEffect } from "react";
import { Box, Text } from "@chakra-ui/react";
import "../../styles/roadmap.css";
import Aos from "aos";
import "aos/dist/aos.css";

const Roadmap = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <Box minH="100dvh" px="100px" pt="70px" mb="150px" className="all-cnt rd">
      <Box position="relative">
        <Text
          color="#3B3B3B"
          fontFamily="Bebas Neue"
          fontWeight="400"
          lineHeight="normal"
          fontSize="4.5rem"
          className="all-title"
          data-aos="zoom-out-right"
        >
          ROADMAP
        </Text>
        <Box>
          {/* timeline-svg */}
          <Box position="absolute" top="-330px" left="0" className="timeline">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="2260"
              viewBox="0 0 51 2260"
              fill="none"
            >
              <circle
                cx="25"
                cy="25"
                r="22"
                stroke="#3D3D3D"
                stroke-width="6"
              />
              <path
                d="M25.5 48L25.5 270"
                stroke="#3D3D3D"
                stroke-width="5"
                stroke-linecap="round"
              />
              <path
                d="M26 318L26 834"
                stroke="#3D3D3D"
                stroke-width="5"
                stroke-linecap="round"
              />
              <path
                d="M26 884L26 1400"
                stroke="#3D3D3D"
                stroke-width="5"
                stroke-linecap="round"
              />
              <path
                d="M26 1449L26 1965"
                stroke="#3D3D3D"
                stroke-width="5"
                stroke-linecap="round"
              />
              <path
                d="M26 2016L26 2257"
                stroke="#3D3D3D"
                stroke-width="5"
                stroke-linecap="round"
              />
              <path
                d="M24.9119 300.739C22.6345 300.739 20.6802 299.923 19.049 298.292C17.4179 296.661 16.6023 294.706 16.6023 292.429C16.6023 290.152 17.4179 288.197 19.049 286.566C20.6802 284.935 22.6345 284.119 24.9119 284.119C27.1894 284.119 29.1437 284.935 30.7749 286.566C32.406 288.197 33.2216 290.152 33.2216 292.429C33.2216 293.937 32.8369 295.322 32.0675 296.584C31.3288 297.846 30.3286 298.861 29.0668 299.631C27.8357 300.369 26.4508 300.739 24.9119 300.739Z"
                fill="#3D3D3D"
              />
              <path
                d="M25.9119 865.739C23.6345 865.739 21.6802 864.923 20.049 863.292C18.4179 861.661 17.6023 859.706 17.6023 857.429C17.6023 855.152 18.4179 853.197 20.049 851.566C21.6802 849.935 23.6345 849.119 25.9119 849.119C28.1894 849.119 30.1437 849.935 31.7749 851.566C33.406 853.197 34.2216 855.152 34.2216 857.429C34.2216 858.937 33.8369 860.322 33.0675 861.584C32.3288 862.846 31.3286 863.861 30.0668 864.631C28.8357 865.369 27.4508 865.739 25.9119 865.739Z"
                fill="#3D3D3D"
              />
              <path
                d="M25.9119 1431.74C23.6345 1431.74 21.6802 1430.92 20.049 1429.29C18.4179 1427.66 17.6023 1425.71 17.6023 1423.43C17.6023 1421.15 18.4179 1419.2 20.049 1417.57C21.6802 1415.93 23.6345 1415.12 25.9119 1415.12C28.1894 1415.12 30.1437 1415.93 31.7749 1417.57C33.406 1419.2 34.2216 1421.15 34.2216 1423.43C34.2216 1424.94 33.8369 1426.32 33.0675 1427.58C32.3288 1428.85 31.3286 1429.86 30.0668 1430.63C28.8357 1431.37 27.4508 1431.74 25.9119 1431.74Z"
                fill="#3D3D3D"
              />
              <path
                d="M25.9119 1996.74C23.6345 1996.74 21.6802 1995.92 20.049 1994.29C18.4179 1992.66 17.6023 1990.71 17.6023 1988.43C17.6023 1986.15 18.4179 1984.2 20.049 1982.57C21.6802 1980.93 23.6345 1980.12 25.9119 1980.12C28.1894 1980.12 30.1437 1980.93 31.7749 1982.57C33.406 1984.2 34.2216 1986.15 34.2216 1988.43C34.2216 1989.94 33.8369 1991.32 33.0675 1992.58C32.3288 1993.85 31.3286 1994.86 30.0668 1995.63C28.8357 1996.37 27.4508 1996.74 25.9119 1996.74Z"
                fill="#3D3D3D"
              />
            </svg>
          </Box>

          {/* timeline-1 */}
          <Box
            position="relative"
            ps="70px"
            mt="35px"
            className="rd-txt-cnt rd-1"
          >
            <Box
              position="absolute"
              top="140px"
              left="120px"
              className="rd-ab-cnt"
              data-aos="fade-left"
            >
              <Text
                textTransform="uppercase"
                color="#3B3B3B"
                fontFamily="Bebas Neue"
                fontWeight="400"
                fontSize="4rem"
                className="rd-hd"
                lineHeight="100%"
              >
                Launching metaverse
              </Text>
              <Text
                color="#3B3B3B"
                fontFamily="Montserrat"
                fontWeight="500"
                w="50%"
                fontSize="1.1rem"
                className="rd-d"
              >
                Launching the Metaverse platform and selling Land NFTsPromoting
                social media handles to build the Volaverse Community Building
                initial courses for the community
              </Text>
            </Box>
            <Text
              color="#e0e5eb"
              fontFamily="Bebas Neue"
              fontWeight="400"
              lineHeight="normal"
              textShadow="10px 10px 25px rgba(0, 0, 0, 0.25), -12px -10px 25px rgba(255, 255, 255, 0.25)"
              fontSize="15rem"
              className="rd-num"
            >
              01
            </Text>
          </Box>

          {/* timeline-2 */}
          <Box
            position="relative"
            ps="70px"
            mt="44px"
            className="rd-txt-cnt rd-2"
          >
            <Box
              position="absolute"
              top="140px"
              left="120px"
              className="rd-ab-cnt"
              data-aos="fade-left"
            >
              <Text
                textTransform="uppercase"
                color="#3B3B3B"
                fontFamily="Bebas Neue"
                fontWeight="400"
                fontSize="4rem"
                className="rd-hd"
                lineHeight="100%"
              >
                Building Creator’s economy
              </Text>
              <Text
                color="#3B3B3B"
                fontFamily="Montserrat"
                fontWeight="500"
                w="50%"
                fontSize="1.1rem"
                className="rd-d"
              >
                Incentivizing the course and content creators to build more
                coursesBuilding a model to fund the course/content creators
              </Text>
            </Box>
            <Text
              color="#e0e5eb"
              fontFamily="Bebas Neue"
              fontWeight="400"
              lineHeight="normal"
              textShadow="10px 10px 25px rgba(0, 0, 0, 0.25), -12px -10px 25px rgba(255, 255, 255, 0.25)"
              fontSize="15rem"
              className="rd-num"
            >
              02
            </Text>
          </Box>

          {/* timeline-3 */}
          <Box
            position="relative"
            ps="70px"
            mt="46px"
            className="rd-txt-cnt rd-3"
          >
            <Box
              position="absolute"
              top="140px"
              left="120px"
              className="rd-ab-cnt"
              data-aos="fade-left"
            >
              <Text
                textTransform="uppercase"
                color="#3B3B3B"
                fontFamily="Bebas Neue"
                fontWeight="400"
                fontSize="4rem"
                className="rd-hd"
                lineHeight="100%"
              >
                Building gamified experience
              </Text>
              <Text
                color="#3B3B3B"
                fontFamily="Montserrat"
                fontWeight="500"
                w="50%"
                fontSize="1.1rem"
                className="rd-d"
              >
                Encouraging the end users to consume more content through better
                gamification.Expanding the course domains to other fields
              </Text>
            </Box>
            <Text
              color="#e0e5eb"
              fontFamily="Bebas Neue"
              fontWeight="400"
              lineHeight="normal"
              textShadow="10px 10px 25px rgba(0, 0, 0, 0.25), -12px -10px 25px rgba(255, 255, 255, 0.25)"
              fontSize="15rem"
              className="rd-num"
            >
              03
            </Text>
          </Box>

          {/* timeline-4 */}
          <Box
            position="relative"
            ps="70px"
            mt="45px"
            className="rd-txt-cnt rd-4"
          >
            <Box
              position="absolute"
              top="140px"
              left="120px"
              className="rd-ab-cnt"
              data-aos="fade-left"
            >
              <Text
                textTransform="uppercase"
                color="#3B3B3B"
                fontFamily="Bebas Neue"
                fontWeight="400"
                fontSize="4rem"
                className="rd-hd"
                lineHeight="100%"
              >
                CREATING PARTNESHIPS FOR JOBS
              </Text>
              <Text
                color="#3B3B3B"
                fontFamily="Montserrat"
                fontWeight="500"
                w="50%"
                fontSize="1.1rem"
                className="rd-d"
              >
                Launch a platform to place content consumers into jobs or
                matchmake for web 3.0 projects Collaborating with universities
                for official degree programs
              </Text>
            </Box>
            <Text
              color="#e0e5eb"
              fontFamily="Bebas Neue"
              fontWeight="400"
              lineHeight="normal"
              textShadow="10px 10px 25px rgba(0, 0, 0, 0.25), -12px -10px 25px rgba(255, 255, 255, 0.25)"
              fontSize="15rem"
              className="rd-num"
            >
              04
            </Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Roadmap;
