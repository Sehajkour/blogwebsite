import React from "react";
import { Box } from "@chakra-ui/react";

const FourDotsSlideAnimation = ({ currentIndex, onDotClick }) => {
  const handleDotClick = (index) => {
    onDotClick(index);
  };

  return (
    <Box display="flex" justifyContent="center" alignItems="center" mt="20px">
      <Box
        borderRadius={currentIndex === 0 ? "1rem" : "50%"}
        bg="#3D3D3D"
        h="8px"
        w={currentIndex === 0 ? "20px" : "8px"}
        mx="2px"
        opacity={currentIndex === 0 ? "1" : "0.5"}
        _hover={{ opacity: 1, cursor: "pointer" }}
        transition="opacity 0.3s, width 0.3s, border-radius 0.3s"
        onClick={() => handleDotClick(0)}
      />
      <Box
        borderRadius={currentIndex === 1 ? "1rem" : "50%"}
        bg="#3D3D3D"
        h="8px"
        w={currentIndex === 1 ? "20px" : "8px"}
        mx="2px"
        opacity={currentIndex === 1 ? "1" : "0.5"}
        _hover={{ opacity: 1, cursor: "pointer" }}
        transition="opacity 0.3s, width 0.3s, border-radius 0.3s"
        onClick={() => handleDotClick(1)}
      />
      <Box
        borderRadius={currentIndex === 2 ? "1rem" : "50%"}
        bg="#3D3D3D"
        h="8px"
        w={currentIndex === 2 ? "20px" : "8px"}
        mx="2px"
        opacity={currentIndex === 2 ? "1" : "0.5"}
        _hover={{ opacity: 1, cursor: "pointer" }}
        transition="opacity 0.3s, width 0.3s, border-radius 0.3s"
        onClick={() => handleDotClick(2)}
      />
      <Box
        borderRadius={currentIndex === 3 ? "1rem" : "50%"}
        bg="#3D3D3D"
        h="8px"
        w={currentIndex === 3 ? "20px" : "8px"}
        mx="2px"
        opacity={currentIndex === 3 ? "1" : "0.5"}
        _hover={{ opacity: 1, cursor: "pointer" }}
        transition="opacity 0.3s, width 0.3s, border-radius 0.3s"
        onClick={() => handleDotClick(3)}
      />
    </Box>
  );
};

export default FourDotsSlideAnimation;
