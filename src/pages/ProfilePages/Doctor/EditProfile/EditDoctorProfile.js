import React, { useContext } from 'react'
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
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
import defaultImage from "../../../../images/default-image.png"
import { updateDoctor } from "../../../../services/Api";
import { useToast } from '@chakra-ui/react'
import "./EditDoctorProfile.css"
import { AppContext } from '../../../../context/Context';
import { useParams } from 'react-router-dom';

const EditDoctorProfile = () => {

  const {id} = useParams();
    // console.log(id);
  const toast = useToast()
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
      speciality: "",
      experience: "",
      picture: "",
      qualification: "",
  };

  const {userData , setUserData} = useContext(AppContext);
  const [imageURL, setImageURL] = useState("");
  const [file, setFile] = useState("");
  const [user, setUser] = useState(userData);

  const handleChange = (e) => {
      setUser({ ...user, [e.target.name]: e.target.value });
      console.log(user);
  };

  const uploadImage = (pic) =>{
      const formData = new FormData();
      formData.append("file",pic);
      formData.append("upload_preset","xxjgqy4h");
      const data = axios.post("http://api.cloudinary.com/v1_1/yashh-cloud/image/upload",formData).then((res) => {return res});
      return data;
  }
  useEffect(() => {
      const getImage = async () => {
          if (file) {
              const image = await uploadImage(file);
              console.log(image);
              user.picture = image.data.url;
              setImageURL(image.data.url);
          }
      };
      getImage();
  }, [file]);

  const EditUser = async (e) => {
    e.preventDefault();
    console.log("click");
    try {
        console.log(user);
        const data = await updateDoctor(user);
        console.log(data); 
        if (data.status === 200) {
            if (data.data.message !== "User Updated") window.alert(data.data.message);
            else {
                // updatedUser.designation="doctor";
                setUserData(data.data.updatedUser);
                toast({
                    title: `User Updated`,
                    status: 'success',
                    isClosable: true,
                })
                window.localStorage.setItem("user",JSON.stringify(data.data.updatedUser));
                navigate("/doctor");
            }
        } else throw new Error("Server Error:500");
    } catch (err) {
        window.alert(err);
    }
  };

  const AvatarSize = useBreakpointValue({ base: "sm", md: "md" });
  const [isMobile] = useMediaQuery("(max-width: 768px)");

  return (
    <FormControl style={{display: "flex"}}>
        <VStack spacing={5} width="50%" style={{display: "flex" , alignItems: "center"}}>

            <FormLabel htmlFor="name" >Name</FormLabel>
            <Input height="2rem" width="16rem" variant='outline' onChange={(e) => handleChange(e)} name="name" isRequired id="name" placeholder='Name' value={user.name} type="text" />

            <FormLabel htmlFor="mobile-number" >Mobile Number</FormLabel>
            <Input height="2rem" width="16rem" variant='outline' onChange={(e) => handleChange(e)} name="mobile" isRequired id="mobile-number" placeholder='Mobile Number' value={user.mobile} type="number" />

            <FormLabel htmlFor='gender'>Gender</FormLabel>
            <Select height="2rem" width="16rem" id='gender' name="gender" placeholder='Select Gender' value={user.gender} onChange={(e) => handleChange(e)}>
                <option>Male</option>
                <option>Female</option>
                <option>Others</option>
            </Select>

            <FormLabel htmlFor="speciality">Speciality</FormLabel>
            <Input height="2rem" width="16rem" variant='outline' onChange={(e) => handleChange(e)} name="speciality" isRequired id="speciality" placeholder='Speciality' value={user.speciality} />

            <FormLabel htmlFor="password">Password</FormLabel>
            <Input height="2rem" width="16rem" variant='outline' onChange={(e) => handleChange(e)} name="password" isRequired id="password" placeholder='Password' type="password" />

            {/* <FormLabel htmlFor="cpassword">Confirm Password</FormLabel>
            <Input height="2rem" width="16rem" variant='outline' onChange={(e) => handleChange(e)} name="cpassword" isRequired id="cpassword" placeholder='Confirm Password' type="password" /> */}
            <FormLabel htmlFor="age">Age</FormLabel>
            <Input height="2rem" width="16rem" variant='outline' onChange={(e) => handleChange(e)} name="age" isRequired id="age" placeholder='Age' value={user.age}/>

            <Button
                bg="#2AA7FF"
                // bg="black"
                color="white"
                _hover={{ bg: "#162D55" }}
                className="register-btn"
                style={{ margin: "3rem" }}
                height="2rem" width="16rem"
                onClick={(e) => (EditUser(e))} 
            >
                Update Details
            </Button>
        </VStack>
        <VStack spacing={5} width="50%" style={{display: "flex" , alignItems: "center"}}>
            <FormLabel htmlFor="email">Email ID</FormLabel>
            <Input height="2rem" width="16rem" variant='outline' onChange={(e) => handleChange(e)} name="email" isRequired id="email" placeholder='Email ID' value={user.email}/>

            <FormLabel htmlFor="dob">Date of Birth</FormLabel>
            <Input height="2rem" type="date" width="16rem" variant='outline' onChange={(e) => handleChange(e)} name="dob" isRequired id='dob' placeholder='Date of Birth' value={user.dob}/>

            <FormLabel htmlFor="address">Address</FormLabel>
            <Input height="2rem" width="16rem" variant='outline' onChange={(e) => handleChange(e)} name="address" isRequired id="address" placeholder='Address' value={user.address}/>

            <FormLabel htmlFor="expericence">Experience</FormLabel>
            <Input height="2rem" width="16rem" variant='outline' onChange={(e) => handleChange(e)} name="experience" isRequired id="experience" placeholder='Experience' value={user.experience}/>

            <FormLabel htmlFor="qualification">Qualification</FormLabel>
            <Input height="2rem" width="16rem" variant='outline' onChange={(e) => handleChange(e)} name="qualification" isRequired id="qualification" placeholder='Qualification' value={user.qualification}/>

            
            <Avatar
                size='md'
                // name={"name" |}
                src={user.picture || defaultImage}
                style={{ border: "1px solid #2AA7FF" }}
                bg="transparent"
              //   padding="1rem"
            />
            <label htmlFor="regimg">
                <i className="fa fa-plus-circle"></i>Upload image
            </label>
            <div style = {{display:"none"}}>
              <Input type="file" name="picture" className="imgfile" id="regimg" onChange={(e) => setFile(e.target.files[0])} />
            </div>
        </VStack>
      </FormControl>
  )
}

export default EditDoctorProfile