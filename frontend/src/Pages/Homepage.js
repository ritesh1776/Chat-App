import React, { useEffect } from "react";
import { Box } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { Container } from "@chakra-ui/react";
import Login from "../components/Authentication/Login";
import { useHistory } from "react-router-dom";
import Signup from "../components/Authentication/Signup";

const Homepage = () => {
  const history = useHistory();
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));

    if (user) {
      history.push("/chats");
    }
  }, [history]);
  return (
    <Container maxW="xl" centerContent>
      <Box
        display="flex"
        justifyContent="center"
        p={2}
        bg={"white"}
        w="100%"
        m="50px 15px 15px 50px"
        borderRadius="lg"
        borderWidth="1px"
      >
        <Text
          fontSize="2xl"
          fontFamily="Work sans"
          color="black"
          textAlign="center"
        >
          Converse-Crew
        </Text>
      </Box>
      <Box
        bg="white"
        w="100%"
        p={4}
        borderRadius="lg"
        color="black"
        borderWidth="1px"
        m="50px 15px 15px 50px"
      >
        <Tabs isFitted variant="soft-rounded" colorScheme="blue">
          <TabList mb="3em">
            <Tab width="80%">Login</Tab>
            <Tab width="80%">Sign Up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel>
              <Signup />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
};

export default Homepage;
