import React, { useContext, useEffect , useState } from "react";
import { AppContext } from "../../../context/Context";
import { addupcomingAppt, deletependingReq, getDoctor } from "../../../services/Api";
import { Button, ButtonGroup } from '@chakra-ui/react'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react';
import { useDisclosure } from "@chakra-ui/react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Select,
  Input
} from "@chakra-ui/react";

const PendingRequests = ({socket}) => {

  const initial = {
    date: "",
    time: ""
  };
  const [info , setInfo] = useState(initial);
  const [render,setRender] = useState(false);
  const { requestedAppt, setrequestedAppt, userData,setUpcomingAppt } = useContext(AppContext);
  const { isOpen, onOpen, onClose } = useDisclosure();
  
  useEffect(() => {
    const getAppt = async () => {
      const data = await getDoctor(userData._id);
      // console.log(data?.data[0]?.pendingRequests);
      setrequestedAppt([...requestedAppt, data?.data[0]?.pendingRequests]);
      
    };
    getAppt();
  }, []);
    
  const handleChange = (e) => {
    e.preventDefault();
    setInfo({...info , [e.target.name]: e.target.value});
    // console.log(info);
  }
  
  const deleteReq = async(pid) =>{
    const obj = {
      pid: pid,
      did: userData._id,
    }
    const data = await deletependingReq(obj);
    // console.log(data);
    setrequestedAppt([data.data.data.pendingRequests]);
    
  }
  
  const onAccept = async (pid) => {
    socket.emit("acceptreq" , {info: info , pid: pid , did: userData._id , name: userData.name});
    const obj = {
      pid : pid,
      did : userData._id,
      date: info?.date,
      time: info?.time
    }
    const data = await addupcomingAppt(obj);
    console.log(data);
    setrequestedAppt([data.data.data.pendingRequests]);   
    setUpcomingAppt([data.data.data.upcomingAppt]);
  }
  
  return (
    <div className="upcoming-appointments">
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Description</th>
            <th>Accept Appointment</th>
            <th>Decline Appointment</th>
          </tr>
        </thead>
        <tbody>
          {requestedAppt[0]?.map((elem) => {
            return (
              <tr>
                <td>{elem?.name}</td>
                <td>{elem?.email}</td>
                <td></td>
                <td>
                  <Button colorScheme="blue" onClick={onOpen}>
                    Accept
                  </Button>
                  <Modal isOpen={isOpen} onClose={onClose}>
                    <ModalOverlay />
                    <ModalContent>
                      <ModalHeader>Specify Data and Time</ModalHeader>
                      <ModalCloseButton />
                      <ModalBody>
                        <FormControl isRequired>
                          <FormLabel htmlFor="date">Date</FormLabel>
                          <Input isRequired height="2rem" width="16rem" variant='outline' id="date" placeholder="Date" type="date" name="date" onChange={(e) => handleChange(e)}/>
                          <FormLabel htmlFor="date">Time</FormLabel>
                          <Input isRequired height="2rem" width="16rem" variant='outline' id="time" placeholder="Time" type="time" name="time" onChange={(e) => handleChange(e)}/>
                        </FormControl>
                      </ModalBody>
                      <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={() => (onClose() , onAccept(elem._id))}>
                          Accept
                        </Button>
                      </ModalFooter>
                    </ModalContent>
                  </Modal>
                </td>
                <td>
                  <Button colorScheme="red" onClick={()=>{deleteReq(elem._id)}}>
                    Decline
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default PendingRequests;
