import React, { useEffect } from "react";
import { Box, Text, Image, Button } from "@chakra-ui/react";

import "../../styles/home.css";

const Home = () => {
  const handleClick = () => {
    window.open("https://mvp.volaverse.com/", "_blank");
  };

  return (
    <Box minH="92vh" position="relative" className="home-main">
      {/* welcome text */}
      <Text
        position="absolute"
        h="92vh"
        fontFamily="Montserrat"
        fontWeight="200"
        lineHeight="normal"
        letterSpacing="5px"
        fontSize="2rem"
        className="pc"
      >
        <span className="sp-1">WELCOME</span>
        <span className="sp-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="53"
            height="77"
            viewBox="0 0 53 77"
            fill="none"
          >
            <g clipPath="url(#clip0_429_916)">
              <mask
                id="mask0_429_916"
                maskType="luminance"
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="53"
                height="77"
              >
                <path
                  d="M52.0918 0.97467H0V76.0221H52.0918V0.97467Z"
                  fill="white"
                />
              </mask>
              <g mask="url(#mask0_429_916)">
                <path
                  d="M26.0459 76.0221C25.2918 40.4729 24.6754 39.5903 0 38.4984C24.6754 37.412 25.288 36.5239 26.0459 0.97467C26.7999 36.5239 27.4164 37.4066 52.0918 38.4984C27.4164 39.5903 26.8038 40.462 26.0459 76.0221Z"
                  fill="#3D3D3D"
                />
              </g>
            </g>
            <defs>
              <clipPath id="clip0_429_916">
                <rect
                  width="52.0918"
                  height="75.0475"
                  fill="white"
                  transform="translate(0 0.97467)"
                />
              </clipPath>
            </defs>
          </svg>
        </span>
        <span className="sp-3">2023</span>
      </Text>

      {/* right social links */}
      <Box
        position="absolute"
        right="10px"
        display="flex"
        flexDirection="column"
        gap="30px"
        className="home-sc-links"
        zIndex="10"
      >
        <a
          className="slide-in-right1"
          href="https://twitter.com/Volaverse"
          target="_blank"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 23 23"
            fill="none"
          >
            <path
              d="M11.6582 0.28125C5.59208 0.28125 0.673828 5.1995 0.673828 11.2656C0.673828 17.3317 5.59208 22.25 11.6582 22.25C17.7243 22.25 22.6426 17.3317 22.6426 11.2656C22.6426 5.1995 17.7243 0.28125 11.6582 0.28125ZM17.5751 9.00925C17.5806 9.131 17.5834 9.25182 17.5834 9.37265C17.5834 13.0964 14.7503 17.3876 9.56843 17.3876C7.97661 17.3876 6.49646 16.9217 5.25065 16.1216C5.47125 16.1482 5.69552 16.1601 5.92344 16.1601C7.24432 16.1601 8.45809 15.7106 9.42105 14.9536C8.18806 14.9307 7.14729 14.1161 6.78938 12.9975C6.96147 13.0304 7.13813 13.0478 7.31938 13.0478C7.57659 13.0478 7.82649 13.0131 8.06174 12.949C6.7729 12.6909 5.8017 11.5521 5.8017 10.1873C5.8017 10.1754 5.8017 10.1635 5.8017 10.1516C6.18158 10.3631 6.61546 10.4894 7.07772 10.504C6.32254 9.99968 5.82459 9.13649 5.82459 8.15979C5.82459 7.64261 5.96281 7.15839 6.20538 6.74373C7.5949 8.44813 9.67095 9.57037 12.0115 9.68754C11.9639 9.48158 11.9392 9.26647 11.9392 9.04587C11.9392 7.49066 13.2006 6.22837 14.7558 6.22837C15.5659 6.22837 16.2982 6.57072 16.8117 7.11811C17.4534 6.99087 18.0566 6.75746 18.6012 6.43433C18.3907 7.09248 17.944 7.64353 17.3618 7.9932C17.9312 7.92546 18.474 7.77443 18.9802 7.55016C18.604 8.11586 18.1271 8.61107 17.5751 9.00925Z"
              fill="#3B3B3B"
            />
          </svg>
        </a>
        <a
          href="https://www.instagram.com/volaverse?igshid=YmMyMTA2M2Y%3D"
          target="_blank"
          className="slide-in-right2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="26"
            viewBox="0 0 32 33"
            fill="none"
          >
            <path
              d="M22.632 0.882553H9.2665C3.46098 0.882553 0 4.34353 0 10.1491V23.4986C0 29.32 3.46098 32.781 9.2665 32.781H22.616C28.4215 32.781 31.8825 29.32 31.8825 23.5145V10.1491C31.8984 4.34353 28.4375 0.882553 22.632 0.882553ZM15.9492 23.0201C12.5361 23.0201 9.76093 20.2449 9.76093 16.8318C9.76093 13.4186 12.5361 10.6435 15.9492 10.6435C19.3624 10.6435 22.1375 13.4186 22.1375 16.8318C22.1375 20.2449 19.3624 23.0201 15.9492 23.0201ZM25.3912 8.66577C25.3114 8.85716 25.1998 9.03261 25.0562 9.1921C24.8967 9.33564 24.7213 9.44729 24.5299 9.52703C24.3385 9.60678 24.1312 9.65462 23.9238 9.65462C23.4932 9.65462 23.0945 9.49513 22.7914 9.1921C22.6479 9.03261 22.5363 8.85716 22.4565 8.66577C22.3768 8.47438 22.3289 8.26704 22.3289 8.0597C22.3289 7.85236 22.3768 7.64502 22.4565 7.45363C22.5363 7.24629 22.6479 7.0868 22.7914 6.92731C23.1583 6.56048 23.7165 6.38503 24.2269 6.49668C24.3385 6.51263 24.4342 6.54453 24.5299 6.59237C24.6256 6.62427 24.7213 6.67212 24.817 6.73592C24.8967 6.78377 24.9765 6.86351 25.0562 6.92731C25.1998 7.0868 25.3114 7.24629 25.3912 7.45363C25.4709 7.64502 25.5188 7.85236 25.5188 8.0597C25.5188 8.26704 25.4709 8.47438 25.3912 8.66577Z"
              fill="#3B3B3B"
            />
          </svg>
        </a>
        <a
          href="https://www.youtube.com/@volaverse123"
          target="_blank"
          className="slide-in-right3"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="23"
            viewBox="0 0 32 27"
            fill="none"
          >
            <path
              d="M23.9119 0.781006H7.97064C3.18826 0.781006 0 3.96926 0 8.75164V18.3164C0 23.0988 3.18826 26.287 7.97064 26.287H23.9119C28.6943 26.287 31.8826 23.0988 31.8826 18.3164V8.75164C31.8826 3.96926 28.6943 0.781006 23.9119 0.781006ZM18.9542 15.176L15.0167 17.5353C13.4226 18.4918 12.1153 17.7585 12.1153 15.8933V11.1588C12.1153 9.29366 13.4226 8.56036 15.0167 9.51684L18.9542 11.8761C20.4686 12.8007 20.4686 14.2673 18.9542 15.176Z"
              fill="#3B3B3B"
            />
          </svg>
        </a>
      </Box>

      {/* scroll */}
      <Box position="absolute" right="1%" bottom="5%" className="pc">
        <a href="#about">
          <span className="sp-4">SCROLL</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="28"
            viewBox="0 0 22 30"
            fill="none"
          >
            <path
              d="M2 18.7621L11.3078 28.0699L20.6156 18.7621"
              stroke="#3B3B3B"
              stroke-width="2.191"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M11.3076 2.00235L11.3076 27.8097"
              stroke="#3B3B3B"
              stroke-width="2.191"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </a>
      </Box>

      <Box display="flex" justifyContent="center" position="relative">
        {/* border-box */}
        <Box
          border="1px solid #3B3B3B"
          mt="50px"
          position="relative"
          h="500"
          w="380px"
          className="hm-box"
          // ml="55px"
        >
          <hr className="hr-1" />
          <hr className="hr-2" />

          {/* <Model /> */}
          <Image
            src="/images/home.png"
            // h="550px"
            minW="450px"
            position="absolute"
            className="home-img"
            zIndex="10"
          />

          {/* text-1 */}
          <Text
            color="#3B3B3B"
            fontFamily="Bebas Neue"
            fontWeight="400"
            lineHeight="normal"
            fontSize="6rem"
            position="absolute"
            top="35px"
            left="-168px"
            className="all-title-h t-a slide-in-left"
          >
            VOLAVERSE
          </Text>

          {/* text-2 */}
          <Text
            color="#3B3B3B"
            fontFamily="Bebas Neue"
            fontWeight="400"
            lineHeight="normal"
            fontSize="6rem"
            position="absolute"
            top="190px"
            right="-252px"
            className="all-title-h t-b slide-in-right"
          >
            EDUCATION
          </Text>
          {/* text-3 */}
          <Text
            color="#3B3B3B"
            fontFamily="Bebas Neue"
            fontWeight="400"
            lineHeight="normal"
            fontSize="6rem"
            position="absolute"
            bottom="12px"
            left="-295px"
            className="all-title-h t-c slide-in-left1"
          >
            METAVERSE
          </Text>
        </Box>
      </Box>

      {/* home-button */}
      <Box
        display="flex"
        justifyContent="center"
        mt="75px"
        className="hm-btn-cnt"
      >
        <Button
          fontFamily="Bebas Neue"
          fontWeight="400"
          fontSize="2.3rem"
          background="linear-gradient(90deg,#745AC3 66.98%,rgba(248,138,176,.8) 100%)"
          boxShadow="8.75205px 9.62725px 26.2561px #0006"
          color="white"
          padding="25px 25px"
          className="home-btn slide-in-blurred-bottom"
          onClick={handleClick}
          zIndex="10"
        >
          GETS STARTED
        </Button>
      </Box>
    </Box>
  );
};

export default Home;
