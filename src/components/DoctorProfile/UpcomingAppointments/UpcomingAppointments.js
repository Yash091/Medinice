import React, { useEffect, useContext, useRef, useState } from "react";
import "./UpcomingAppointments.css";
import { AppContext } from "../../../context/Context";
import { addPastAppt, getDoctor } from "../../../services/Api";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import Peer from "simple-peer";

const UpcomingAppointments = ({socket}) => {

  const navigate = useNavigate();
  const { upcomingAppt, userData, setUpcomingAppt, setPastAppt , callUser} = useContext(AppContext);

  useEffect(() => {
    const func = async () => {
      const data = await getDoctor(userData._id);
      // console.log(data.data[0]);
      setUpcomingAppt([data?.data[0]?.upcomingAppt]);
    };
    func();
  }, []);

  const addPast = async (elem) => {
    const obj = {
      pid: elem?._id?._id,
      did: userData?._id,
      time: elem?.time,
      date: elem?.date,
    };
    const data = await addPastAppt(obj);
    console.log(data);
    setPastAppt([data.data.data.pastAppt]);
    setUpcomingAppt([data.data.data.upcomingAppt]);
    callUser({id : elem?._id._id , me : userData?._id , name : userData?.name});
    navigate(`/appointment/?did=${obj.did}&pid=${obj.pid}`);
  };

  return (
    <div className="upcoming-appointments">
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Date</th>
            <th>Time Slot</th>
            <th>Join Call</th>
          </tr>
        </thead>
        <tbody>
          {upcomingAppt[0]?.map((ele) => {
            return (
              <tr>
                <td>{ele?._id?.name}</td>
                <td>{ele?.date}</td>
                <td>{ele?.time}</td>
                <td>
                  <Button
                    colorScheme="teal"
                    width={"100%"}
                    variant="solid"
                    onClick={() => addPast(ele)}
                  >
                    Join
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

export default UpcomingAppointments;
