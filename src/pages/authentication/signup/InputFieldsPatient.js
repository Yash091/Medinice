import React from "react";
import "./Signup.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
// import { createUser, uploadFile } from "../../../service/api";
import { Input, Stack, VStack, HStack } from '@chakra-ui/react'
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Select,
    Button
} from "@chakra-ui/react";
import { Avatar, AvatarBadge, AvatarGroup } from "@chakra-ui/react";
import { useBreakpointValue } from '@chakra-ui/media-query';
import { useMediaQuery } from "@chakra-ui/react";
import defaultImage from "../../../images/default-image.png"
import { addPatient } from "../../../services/Api";

const InputFields = () => {
    
    const navigate = useNavigate();
    const initial = {
      designation: "patient",
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
    const [user, setUser] = useState(initial);
    const [imageURL, setImageURL] = useState("");
    const [file, setFile] = useState("");
    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
        // console.log(user);
    };

    // useEffect(() => {
    //     const getImage = async () => {
    //         if (file) {
    //             const data = new FormData();
    //             data.append("name", file.name);
    //             data.append("file", file);

    //             const image = await uploadFile(data);
    //             user.picture = image.data;
    //             setImageURL(image.data);
    //         }
    //     };
    //     getImage();
    // }, [file]);

    const saveUser = async (e) => {
        e.preventDefault();
        try {
            const data = await addPatient(user);
            if (data.status === 200) {
                if (data.data.message !== "Registration successfull") window.alert(data.data.message);
                else navigate("/login");
            } else throw new Error("Server Error:500");
        } catch (err) {
            window.alert(err);
        }
    };

    const AvatarSize = useBreakpointValue({ base: "sm", md: "md" });
    const [isMobile] = useMediaQuery("(max-width: 768px)") 
  return (
    <>
        <FormControl style={{display: "flex"}}>
          <VStack spacing={5} width="50%" style={{display: "flex" , alignItems: "flex-start"}}>

              <FormLabel htmlFor="name" >Name</FormLabel>
              <Input height="2rem" width="16rem" variant='outline' onChange={(e) => handleChange(e)} name="name" isRequired id="name" placeholder='Name' type="text" />

              <FormLabel htmlFor="mobile-number" >Mobile Number</FormLabel>
              <Input height="2rem" width="16rem" variant='outline' onChange={(e) => handleChange(e)} name="mobile" isRequired id="mobile-number" placeholder='Mobile Number' type="number" />

              <FormLabel htmlFor='gender'>Gender</FormLabel>
              <Select height="2rem" width="16rem" id='gender' name="gender" placeholder='Select Gender' onChange={(e) => handleChange(e)}>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Others</option>
              </Select>

              {/* <FormLabel htmlFor="profession">Profession</FormLabel>
              <Input height="2rem" width="16rem" variant='outline' onChange={(e) => handleChange(e)} name="profession" isRequired id="profession" placeholder='Profession' /> */}

              {/* <FormLabel htmlFor="mother-tongue">language</FormLabel>
              <Input height="2rem" width="16rem" variant='outline' onChange={(e) => handleChange(e)} name="mothertongue" isRequired id="mother-tongue" placeholder='Mother Tongue' /> */}

              <FormLabel htmlFor="password">Password</FormLabel>
              <Input height="2rem" width="16rem" variant='outline' onChange={(e) => handleChange(e)} name="password" isRequired id="password" placeholder='Password' type="password" />

              <FormLabel htmlFor="cpassword">Confirm Password</FormLabel>
              <Input height="2rem" width="16rem" variant='outline' onChange={(e) => handleChange(e)} name="cpassword" isRequired id="cpassword" placeholder='Confirm Password' type="password" />

              <Button
                  bg="#2AA7FF"
                  // bg="black"
                  color="white"
                  _hover={{ bg: "#162D55" }}
                  className="register-btn"
                  style={{ margin: "3rem" }}
                  height="2rem" width="16rem"
                  onClick={(e) => (saveUser(e))} 
               >
                  Create Account
              </Button>
          </VStack>
          <VStack spacing={5} width="50%" style={{display: "flex" , alignItems: "flex-start"}}>
              <FormLabel htmlFor="email">Email ID</FormLabel>
              <Input height="2rem" width="16rem" variant='outline' onChange={(e) => handleChange(e)} name="email" isRequired id="email" placeholder='Email ID' />

              <FormLabel htmlFor="dob">Date of Birth</FormLabel>
              <Input height="2rem" type="date" width="16rem" variant='outline' onChange={(e) => handleChange(e)} name="dob" isRequired id='dob' placeholder='Date of Birth' />

              <FormLabel htmlFor="address">Address</FormLabel>
              <Input height="2rem" width="16rem" variant='outline' onChange={(e) => handleChange(e)} name="address" isRequired id="address" placeholder='Address' />

              <FormLabel htmlFor="age">Age</FormLabel>
              <Input height="2rem" width="16rem" variant='outline' onChange={(e) => handleChange(e)} name="age" isRequired id="age" placeholder='Age' />

              {/* <FormLabel htmlFor="about">About Yourself</FormLabel>
              <Input height="2rem" width="16rem" variant='outline' onChange={(e) => handleChange(e)} name="description" isRequired id="about" placeholder='About Yourself' /> */}

             

              {/* <img src={imageURL || blank} /> */}``
              {/* <Avatar
                  size='md'
                  src={imageURL || defaultImage}
                  style={{ border: "1px solid #2AA7FF" }}
                  bg="transparent"
              /> */}
              {/* <label htmlFor="regimg">
                  <i className="fa fa-plus-circle"></i>Upload image
              </label> */}
              
                {/* <Input type="file" name="picture" className="imgfile" id="regimg" onChange={(e) => setFile(e.target.files[0])} /> */}
              
          </VStack>
        </FormControl>
    </>
  )
}

export default InputFields