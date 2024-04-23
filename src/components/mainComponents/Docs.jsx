import React, { useEffect } from "react";
import { Box, Text } from "@chakra-ui/react";
import "../../styles/docs.css";
import { docs } from "../../data/docsData";
import Aos from "aos";
import "aos/dist/aos.css";

const Docs = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <Box
      mb="70px"
      pt="70px"
      px="100px"
      zIndex="10"
      className="all-cnt docs-main"
    >
      <Box zIndex="10">
        <Text
          color="#3B3B3B"
          fontFamily="Bebas Neue"
          fontWeight="400"
          lineHeight="normal"
          fontSize="4.5rem"
          className="all-title"
          data-aos="zoom-out-right"
        >
          DOCS
        </Text>

        <Box
          mt="30px"
          display="grid"
          gridTemplateColumns="1fr 1fr 1fr"
          className="docs-cards"
          gap="20px"
          zIndex="10"
        >
          {docs.map((d) => (
            <Box
              bg="#ECF0F3"
              boxShadow="11.298px 11.298px 28.244px 0px rgba(22, 27, 29, 0.25)"
              borderRadius="1.9rem"
              px="20px"
              py="30px"
              zIndex="10"
              key={d.id}
              className="docs-card"
              data-aos="zoom-in"
            >
              <Text
                textTransform="uppercase"
                color="#3B3B3B"
                fontFamily="Bebas Neue"
                fontWeight="400"
                lineHeight="110%"
                fontSize="1.6rem"
                className="docs-t"
              >
                {d.title}
              </Text>
              <Text
                color="#3B3B3B"
                fontFamily="Montserrat"
                fontWeight="300"
                lineHeight="110%"
                fontSize="1.05rem"
                mt="10px"
                className="docs-d"
              >
                {d.description}
              </Text>
              <Box
                display="flex"
                justifyContent="space-between"
                mt="20px"
                mb="8px"
              >
                <Text
                  color="#3B3B3B"
                  fontFamily="Montserrat"
                  fontWeight="300"
                  lineHeight="normal"
                  className="docs-duration"
                >
                  {d.duration} read
                </Text>
                <Text
                  color="#3B3B3B"
                  fontFamily="Montserrat"
                  fontWeight="300"
                  lineHeight="normal"
                  className="docs-date"
                >
                  {d.date}
                </Text>
              </Box>
              <a
                style={{
                  textDecoration: "none",
                  color: "#745AC3",
                  fontFamily: "Montserrat",
                  fontWeight: "600",
                }}
                href={d.link}
                target="_blank"
              >
                read more
              </a>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Docs;
