import React, { useEffect } from 'react';
import {Container, Box,Text,Tab,Tabs,TabList,TabPanels,TabPanel} from '@chakra-ui/react';
import Login from '../components/Authentication/Login';
import SignUp from '../components/Authentication/SignUp';
import { useHistory } from 'react-router-dom';
const Homepage = () => {

  const history = useHistory();
  useEffect(()=>{
    const user= JSON.parse(localStorage.getItem("userInfo"));

    if(user){
      history.push("/chats");
    }

  },[history])

  return (
    <Container maxWidth='xl' centerContent>
      <Box
        display="flex"
        justifyContent="center"
        p={3}
        bg={"white"}
        w="100%"
        m="40px 0 15px 0"
        borderRadius="lg"
        borderWidth="1px"
        
      >
        <Text fontSize="4xl" fontFamily="Work sans" color="black">
            ChitChat
        </Text>
      </Box>
      <Box bg="white" w="100%" p={4} borderRadius="lg" borderWidth="1px" color="black">
        <Tabs variant='soft-rounded'>
        <TabList marginBottom="1em">
        <Tab width="50%">Login</Tab>
        <Tab width="50%">Sign Up</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Login/>
          </TabPanel>
          <TabPanel>
            <SignUp/>
          </TabPanel>
        </TabPanels>
        </Tabs>
      </Box>
    </Container>
  )
}

export default Homepage
