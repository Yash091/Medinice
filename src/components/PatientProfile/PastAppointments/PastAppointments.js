import {React , useContext , useEffect} from 'react'
import "./PastAppointments.css";
import { AppContext } from "../../../context/Context";
import { getPatient } from "../../../services/Api";

const PastAppointments = () => {

    const {userData , patPastAppt , setPatPastAppt} = useContext(AppContext);
    useEffect(() => {
      
        const getPat = async () => {
            const data = await getPatient(userData?._id);
            // console.log(data);
            setPatPastAppt([data?.data[0]?.pastAppt]);
        }
        getPat();
    }, [])
    
  return (
    <div>
      <div className="past-appointments">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Doctor</th>
              <th>Time Slot</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {patPastAppt[0]?.map((ele) => {
              return (
                <tr>
                  <td>{ele?._id?.name}</td>
                  <td>{ele?.date}</td>
                  <td>{ele?.time}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default PastAppointments