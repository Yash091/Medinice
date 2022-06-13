import {React , useContext, useEffect} from "react";
import { AppContext } from "../../../context/Context";
import { addPatPastAppt, getPatient } from "../../../services/Api";
import "./UpcomingAppointments.css"
import { Button, ButtonGroup } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const UpcomingAppointments = ({socket}) => {
    
  const navigate = useNavigate();
  const {patUpcomingAppt, setPatUpcomingAppt,userData , setPatPastAppt , patPastAppt} = useContext(AppContext)
  
  useEffect(() => {
    const getPat = async() => {
      const data = await getPatient(userData._id);
      setPatUpcomingAppt([data.data[0].upcomingAppt]);
    }
    getPat();
  },[])
  
  const addPast = async (elem) => {
    const obj = {
      pid: userData?._id,
      did: elem?._id?._id,
      time: elem?.time,
      date: elem?.date,
    };
    const data = await addPatPastAppt(obj);
    console.log(data);
    setPatPastAppt([data.data.data.pastAppt]);
    setPatUpcomingAppt([data.data.data.upcomingAppt]);
    navigate(`/appointment/${obj.did}`);
  };
  
  return (
    <div className="upcoming-appointments">
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Doctor</th>
            <th>Time Slot</th>
            <th>Date</th>
            <th>Join Call</th>
          </tr>
        </thead>
        <tbody>
        {
          patUpcomingAppt[0]?.map((elem) => {
            console.log(elem);
            return (
              <tr>
                <td>{elem?._id.name}</td>
                <td>{elem?.time}</td>
                <td>{elem?.date}</td>
                <td>
                  <Button colorScheme="teal" width={"100%"} variant="solid" onClick={()=>addPast(elem)}>
                    Join
                  </Button>
                </td>
              </tr>
            );
          })
        }
        </tbody>
      </table>
    </div>
  )
};

export default UpcomingAppointments;
