import {React , useState} from 'react'
import axios from "axios"
import { Input, Stack , VStack , HStack } from '@chakra-ui/react'
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Select,
  Button
} from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel, ButtonGroup , Image } from '@chakra-ui/react'
import { useBreakpointValue } from '@chakra-ui/media-query';
import { useMediaQuery } from "@chakra-ui/react";
import InputFieldsDoctor from './InputFieldsDoctor';
import InputFieldsMobileDoctor from './InputFieldsMobileDoctor';
import InputFieldsPatient from './InputFieldsPatient';
import InputFieldsMobilePatient from './InputFieldsMobilePatient';
import "./Signup.css"
import LoginPic from "../../../images/login.png"
import doctor from "../../../images/doctor.png"
import patient from "../../../images/patient.png"

const Signup = () => {



  

  const AvatarSize = useBreakpointValue({ base: "sm", md: "md" });
  const [isMobile] = useMediaQuery("(max-width: 850px)") 

  return (
    <div className="sign-up-container">
      <div className = "register-intro">
        {/* <div className = "logo-name"> */}
          {/* <img className = "logo" src = {logo} /> */}
          {/* <h3 className = "heading">Match Founder</h3> */}
        {/* </div> */}
        {/* <h6 className = "tag-line">A few clicks away from finding your soul mate</h6> */}
        <img className="couple-img" src={LoginPic} />
      </div>

      <div className = "register-fields">
        <h1 className="reg-heading" style={{textAlign: "left"}}>Register</h1>
        <Tabs defaultIndex={0} style={{display: "flex", justifyContent: "center", flexDirection: "column"}}>
            <TabList style={{colorScheme: "#2AA7FF"}}>
                <Tab>Doctor</Tab>
                <Tab>Patient</Tab>
            </TabList>
            <TabPanels>
                <TabPanel>
                  {/* for doctor */}
                  {
                    !isMobile ?  <HStack style={{display: "flex" , }}><InputFieldsDoctor /></HStack> : <VStack><InputFieldsMobileDoctor /></VStack>
                  }
                </TabPanel>
                <TabPanel>
                  {/* for patient */}
                  {
                    !isMobile ?  <HStack style={{display: "flex" , }}><InputFieldsPatient /></HStack> : <VStack><InputFieldsMobilePatient /></VStack>
                  }
                </TabPanel>
            </TabPanels>
        </Tabs>
      </div>
    </div>
  )
}

export default Signup