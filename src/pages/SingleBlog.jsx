import React, { useEffect, useState } from "react";
import {
  Box,
  Image,
  Text,
  Card,
  CardBody,
  Stack,
  Heading,
} from "@chakra-ui/react";
import { Link, useParams } from "react-router-dom";
import Layout from "../components/layout/Layout";
// import { blogs } from "../data/blogData";
import "../styles/blogs.css";
import Aos from "aos";
import "aos/dist/aos.css";

const SingleBlog = () => {
  const [blogs, setBlogs] = useState([]);
  const { id } = useParams();
  const [index, setIndex] = useState();

  const getAllBlogs = async () => {
    const data = await fetch("https://backend.volaverse.com/block/blog");

    const value = await data.json();
    const keys = Object.keys(value);
    setBlogs(value[keys]);
    // console.log(value[keys]);
  };

  useEffect(() => {
    getAllBlogs();
    Aos.init();
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    setIndex(Number(id) - 1);
    window.scrollTo(0, 0);
  }, [id]);

  const replaceNewlinesWithBreaks = (text) => {
    return text.replace(/\n/g, "<br/>");
  };

  return (
    <Layout title={`${blogs[index]?.title}`}>
      <Box
        minH="100dvh"
        px="100px"
        mb="100px"
        py="50px"
        className="all-cnt"
        zIndex="10"
      >
        <Link to="/blogs" className="back">
          <span>{"<"}</span>BACK
        </Link>

        <Text
          color="#3B3B3B"
          fontFamily="Bebas Neue"
          fontWeight="400"
          lineHeight="normal"
          fontSize="4.5rem"
          textAlign="center"
          mt="30px"
          className="all-title"
          zIndex="10"
        >
          {blogs[index]?.title}
        </Text>
        {blogs[index]?.content.map((c, i) => (
          <Box key={i} zIndex="10">
            <Box display="flex" justifyContent="center" mb="30px" zIndex="10">
              <Image
                borderRadius="1.5rem"
                boxShadow="10px 10px 25px 0px rgba(22, 27, 29, 0.25)"
                // w="50%"
                src={c.img}
                zIndex="10"
              />
            </Box>
            <Text
              color="#3B3B3B"
              fontFamily="Montserrat"
              fontWeight="500"
              fontSize="1.2rem"
              lineHeight="165%"
              className="bpg-cnt-txt"
              mb="30px"
              dangerouslySetInnerHTML={{
                __html: replaceNewlinesWithBreaks(c.desc),
              }}
              zIndex="10"
            />
          </Box>
        ))}

        <Box display="flex" my="70px" zIndex="10">
          <hr className="hr" />
          <span className="b-sp">END</span>
          <hr className="hr" />
        </Box>

        <Text
          color="#3B3B3B"
          fontFamily="Bebas Neue"
          fontWeight="400"
          lineHeight="normal"
          fontSize="4.5rem"
          mb="30px"
          className="all-title"
          zIndex="10"
        >
          SIMILAR BLOGS
        </Text>

        <Box
          display="grid"
          gridTemplateColumns="1fr 1fr 1fr"
          gap={8}
          className="bpg-2-cnt"
          zIndex="10"
        >
          {blogs.map((b, i) => (
            <>
              {index === i ? (
                <></>
              ) : (
                <Card
                  maxW="sm"
                  borderRadius="1.9rem"
                  bg="#ECF0F3"
                  boxShadow="10px 10px 25px 0px rgba(22, 27, 29, 0.25)"
                  key={b.title}
                  data-aos="zoom-in"
                  zIndex="10"
                  className="aos-init"
                >
                  <CardBody p="18px" pb="50px" className="card-2" zIndex="10">
                    <Image
                      src={b.content[0].img}
                      alt="Green double couch with wooden legs"
                      borderTopRadius="1.7rem"
                      h="50%"
                      w="100%"
                      zIndex="10"
                    />
                    <Stack mt="15px" spacing="3" zIndex="10">
                      <Text
                        color="#3D3D3D"
                        fontFamily="Inter"
                        fontWeight="600"
                        lineHeight="16px"
                        className="bpg-2-dt"
                        zIndex="10"
                      >
                        {b.date}
                      </Text>
                      <Link to={`/blogs/${b.id}`}>
                        <Heading
                          textTransform="uppercase"
                          color="#3B3B3B"
                          fontFamily="Bebas Neue"
                          fontWeight="400"
                          lineHeight="100%"
                          className="bpg-2-t"
                          zIndex="10"
                        >
                          {b.title}
                        </Heading>
                      </Link>

                      <Text
                        color="#3B3B3B"
                        fontFamily="Montserrat"
                        fontWeight="300"
                        lineHeight="110%"
                        className="bpg-2-ds"
                        zIndex="10"
                      >
                        {b.content[0].desc.substring(0, 200)}...
                      </Text>
                      <Link to={`/blogs/${b.id}`}>Read More</Link>
                    </Stack>
                  </CardBody>
                </Card>
              )}
            </>
          ))}
        </Box>
      </Box>
    </Layout>
  );
};

export default SingleBlog;
