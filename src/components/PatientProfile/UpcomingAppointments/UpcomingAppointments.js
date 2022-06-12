import {React , useContext, useEffect} from "react";
import { AppContext } from "../../../context/Context";
import { getPatient } from "../../../services/Api";
import "./UpcomingAppointments.css"

const UpcomingAppointments = ({socket}) => {
  
  const {patUpcomingAppt, setPatUpcomingAppt,userData} = useContext(AppContext)
  
  useEffect(() => {
    const getPat = async() => {
      const data = await getPatient(userData._id);
      console.log(data);
      setPatUpcomingAppt([data.data[0].upcomingAppt]);
    }
    getPat();
  },[])
  console.log(patUpcomingAppt ? patUpcomingAppt : "Wait");

  return (
    <div className="upcoming-appointments">
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Doctor</th>
            <th>Time Slot</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
        {
          patUpcomingAppt[0]?.map((elem) => {
            return (
              <tr>
                <td>{elem?._id.name}</td>
                <td>{elem?.time}</td>
                <td>{elem?.date}</td>
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
