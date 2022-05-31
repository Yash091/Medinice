import {React , useContext, useState} from 'react'
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Image,
} from '@chakra-ui/react'
import { Tabs, TabList, TabPanels, Tab, TabPanel, Button, ButtonGroup } from '@chakra-ui/react'
import LoginPic from "../../../images/login.png"
import doctor from "../../../images/doctor.png"
import patient from "../../../images/patient.png"
import admin from "../../../images/admin.png"
import "./Login.css"
import { logPatient , logDoctor , logAdmin } from '../../../services/Api'
import {Link , useNavigate} from "react-router-dom";
import { AppContext } from '../../../context/Context'

const Login = () => {

    const navigate = useNavigate();
    const {userData , setUserData} = useContext(AppContext);
    const initial = {
        designation: "admin",
        email: "",
        password: "",
    };

    const [user , setUser] = useState(initial);

    const logUser = async () => {
        if(user.designation === "patient") {
            const data = await logPatient(user);
            console.log(data.data);
            if(data?.data?.message === "Patient logged in Successfully") {
                window.localStorage.setItem("user",JSON.stringify(data?.data?.data));
                setUserData(data?.data?.data);
                navigate("/patientlandingpage");
            } else {
                window.alert("Invalid Credentails");
            }
        } else if(user.designation === "doctor") {
            const data = await logDoctor(user);
            // console.log(data.data);
            if(data?.data?.message === "Doctor logged in Successfully") {
                window.localStorage.setItem("user",JSON.stringify(data?.data?.data));
                setUserData(data?.data?.data);
                navigate("/doctor");
            } else {
                window.alert("Invalid Credentails");
            }
        } else if(user.designation === "admin") {
            const data = await logAdmin(user);
            // console.log(data);
            if(data.data.message === "Admin logged in Successfully") {
                window.localStorage.setItem("user",JSON.stringify(data?.data?.data));
                setUserData(data?.data?.data);
                navigate("/admin");
            } else {
                window.alert("Invalid Credentails");
            }
        }
    }

    const handleInputChange = (e) => {
        setUser({...user , [e.target.name]: e.target.value});
        console.log(user);
    }

    return (
        <div className="login-container">
            <div className="left-container flex-child">
                <img src={LoginPic} />
            </div>
            <div className="right-container flex-child">
                <Tabs defaultIndex={0} style={{display: "flex", justifyContent: "center", flexDirection: "column"}}>
                    <TabPanels >
                        <TabPanel style={{display: "flex", justifyContent: "center",}}>
                            <Image
                                boxSize='200px'
                                fit='cover'
                                src={admin}
                            />
                        </TabPanel>
                        <TabPanel style={{display: "flex", justifyContent: "center",}}>
                            <Image
                                boxSize='200px'
                                fit='cover'
                                src={doctor}
                            />
                        </TabPanel>
                        <TabPanel style={{display: "flex", justifyContent: "center",}}>
                            <Image
                                boxSize='200px'
                                fit='cover'
                                src={patient}
                            />
                        </TabPanel>
                    </TabPanels>
                    <TabList style={{display: "flex", justifyContent: "center", colorScheme: "#2AA7FF"}}>
                        <Tab onClick={()=>setUser({...user , designation:"admin"})} >Admin</Tab>
                        <Tab onClick={()=>setUser({...user , designation:"doctor"})}>Doctor</Tab>
                        <Tab onClick={()=>setUser({...user , designation:"patient"})}>Patient</Tab>
                    </TabList>
                    <TabPanels>
                        {/* for admin */}
                        <TabPanel>
                            <FormControl>
                                <FormLabel style={{colorScheme: "#2AA7FF"}} htmlFor='email'>Email</FormLabel>
                                <Input
                                    id='email'
                                    type='email'
                                    name="email"
                                    onChange={(e)=>handleInputChange(e)}
                                />

                                <FormLabel style={{colorScheme: "#2AA7FF"}} htmlFor='password'>Password</FormLabel>
                                <Input
                                    id='password'
                                    type='password'
                                    name="password"
                                    onChange={(e)=>handleInputChange(e)}
                                />
                                <Button className="submit" colorScheme='blue' onClick={()=>logUser()}>Login</Button>
                            </FormControl>
                        </TabPanel>
                        {/* for doctor */}
                        <TabPanel>
                            <FormControl>
                                <FormLabel htmlFor='email'>Email</FormLabel>
                                <Input
                                    id='email'
                                    type='email'
                                    name="email"
                                    onChange={(e)=>handleInputChange(e)}
                                />

                                <FormLabel htmlFor='password'>Password</FormLabel>
                                <Input
                                    id='password'
                                    type='password'
                                    name="password"
                                    onChange={(e)=>handleInputChange(e)}
                                />
                                <div>
                                    <p>New User? <Link style={{color : '#2AA7FF' , textDecoration : 'none'}} to ="/register">Register Now</Link></p>
                                </div>
                                <Button className="submit" colorScheme='blue' onClick={()=>logUser()}>Login</Button>
                            </FormControl>
                        </TabPanel>
                        <TabPanel>
                            {/* for patient */}
                            <FormControl>
                                <FormLabel htmlFor='email'>Email</FormLabel>
                                <Input
                                    id='email'
                                    type='email'
                                    name="email"
                                    onChange={(e)=>handleInputChange(e)}
                                />

                                <FormLabel htmlFor='password'>Password</FormLabel>
                                <Input
                                    id='password'
                                    type='password'
                                    name="password"
                                    onChange={(e)=>handleInputChange(e)}
                                />
                                <div>
                                    <p>New User? <Link style={{color : '#2AA7FF'}} to ="/register">Register Now</Link></p>
                                </div>
                                <Button className="submit" colorScheme='blue' onClick={()=>logUser()}>Login</Button>
                            </FormControl>
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </div>
        </div>
    )
}

export default Login