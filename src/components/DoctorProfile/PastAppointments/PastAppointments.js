import React, { useContext, useEffect } from "react";
import { AppContext } from "../../../context/Context";
import { getDoctor } from "../../../services/Api";
import "./PastAppointments.css";

const PastAppointments = () => {
  const { pastAppt, setPastAppt, userData } = useContext(AppContext);
  useEffect(() => {
    const getdoc = async () => {
      const data = await getDoctor(userData?._id);
      // console.log(data,"from past")
      setPastAppt([data?.data[0]?.pastAppt]);
    };
    getdoc();
  }, []);
  console.log(pastAppt?pastAppt:"wait");
  return (
    <div>
      <div className="past-appointments">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Name</th>
              <th>Time Slot</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {pastAppt[0]?.map((ele) => {
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
};

export default PastAppointments;