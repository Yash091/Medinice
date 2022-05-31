import React from "react";
import "./EditPatientProfile.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState , useContext } from "react";
// import { createUser, uploadFile } from "../../../service/api";
import { Input, Stack, VStack, HStack } from "@chakra-ui/react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Select,
  Button,
} from "@chakra-ui/react";
import { Avatar, AvatarBadge, AvatarGroup } from "@chakra-ui/react";
import { useBreakpointValue } from "@chakra-ui/media-query";
import { useMediaQuery } from "@chakra-ui/react";
import { updatePatient } from "../../../../services/Api";
import { AppContext } from '../../../../context/Context';
import { useToast } from '@chakra-ui/react'

const EditPatientProfile = () => {

  const toast = useToast();
  const navigate = useNavigate();
  const initial = {
    name: "",
    email: "",
    password: "",
    cpassword: "",
    mobile: "",
    dob: "",
    gender: "",
    address: "",
    age: "",
  };
  const {userData , setUserData} = useContext(AppContext);
  const [user, setUser] = useState(userData);
  
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    console.log(user);
  };

  const EditUser = async (e) => {
    e.preventDefault();
    try {
      // console.log(user);
      const data = await updatePatient(user);
      console.log(data);
      if (data?.status === 200) {
        if (data?.data?.message !== "User Updated") window.alert(data.data.message);
        else {
          // updatedUser.designation="patient";
            setUserData(data.data.data);
            toast({
                title: `User Updated`,
                status: 'success',
                isClosable: true,
            })
            window.localStorage.setItem("user",JSON.stringify(data.data.data));
            navigate("/patient");
        }
    } else throw new Error("Server Error:500");
    } catch (error) {
      window.alert.apply(error);
    }
  };

  const AvatarSize = useBreakpointValue({ base: "sm", md: "md" });
  const [isMobile] = useMediaQuery("(max-width: 768px)");

  return (
    <>
      <FormControl style={{ display: "flex" }}>
        <VStack
          spacing={5}
          width="50%"
          style={{ display: "flex", alignItems: "flex-start" }}
        >
          <FormLabel htmlFor="name">Name</FormLabel>
          <Input
            height="2rem"
            width="16rem"
            variant="outline"
            onChange={(e) => handleChange(e)}
            name="name"
            isRequired
            id="name"
            placeholder="Name"
            type="text"
            value={user.name}
          />

          <FormLabel htmlFor="mobile-number">Mobile Number</FormLabel>
          <Input
            height="2rem"
            width="16rem"
            variant="outline"
            onChange={(e) => handleChange(e)}
            name="mobile"
            isRequired
            id="mobile-number"
            placeholder="Mobile Number"
            type="number"
            value={user.mobile}
          />

          <FormLabel htmlFor="gender">Gender</FormLabel>
          <Select
            height="2rem"
            width="16rem"
            id="gender"
            name="gender"
            placeholder="Select Gender"
            value = {user.gender}
            onChange={(e) => handleChange(e)}
          >
            <option>Male</option>
            <option>Female</option>
            <option>Others</option>
          </Select>

          {/* <FormLabel htmlFor="profession">Profession</FormLabel>
              <Input height="2rem" width="16rem" variant='outline' onChange={(e) => handleChange(e)} name="profession" isRequired id="profession" placeholder='Profession' /> */}

          {/* <FormLabel htmlFor="mother-tongue">language</FormLabel>
              <Input height="2rem" width="16rem" variant='outline' onChange={(e) => handleChange(e)} name="mothertongue" isRequired id="mother-tongue" placeholder='Mother Tongue' /> */}

          <FormLabel htmlFor="password">Password</FormLabel>
          <Input
            height="2rem"
            width="16rem"
            variant="outline"
            onChange={(e) => handleChange(e)}
            name="password"
            isRequired
            id="password"
            placeholder="Password"
            type="password"
            
          />

          <Button
            bg="#2AA7FF"
            // bg="black"
            color="white"
            _hover={{ bg: "#162D55" }}
            className="register-btn"
            style={{ margin: "3rem" }}
            height="2rem"
            width="16rem"
            onClick={(e) => EditUser(e)}
          >
            Update Details
          </Button>
        </VStack>
        <VStack
          spacing={5}
          width="50%"
          style={{ display: "flex", alignItems: "flex-start" }}
        >
          <FormLabel htmlFor="email">Email ID</FormLabel>
          <Input
            height="2rem"
            width="16rem"
            variant="outline"
            onChange={(e) => handleChange(e)}
            name="email"
            isRequired
            id="email"
            placeholder="Email ID"
            value={user.email}
          />
          <FormLabel htmlFor="dob">Date of Birth</FormLabel>
          <Input
            height="2rem"
            type="date"
            width="16rem"
            variant="outline"
            onChange={(e) => handleChange(e)}
            name="dob"
            isRequired
            id="dob"
            value = {user.dob}
            placeholder="Date of Birth"
          />
          <FormLabel htmlFor="address">Address</FormLabel>
          <Input
            height="2rem"
            width="16rem"
            variant="outline"
            onChange={(e) => handleChange(e)}
            name="address"
            isRequired
            id="address"
            placeholder="Address"
            value={user.address}
          />
          <FormLabel htmlFor="age">Age</FormLabel>
          <Input
            height="2rem"
            width="16rem"
            variant="outline"
            onChange={(e) => handleChange(e)}
            name="age"
            isRequired
            id="age"
            placeholder="Age"
            value={user.age}
          />
        </VStack>
      </FormControl>
    </>
  );
};

export default EditPatientProfile;
