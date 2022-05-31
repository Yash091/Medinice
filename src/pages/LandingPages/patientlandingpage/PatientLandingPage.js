import React, { useState, useEffect } from "react";
import DoctorCards from "../../../components/doctorcard/DoctorCards";
import "./PatientLandingPage.css";
import { searchDoctor } from "../../../services/Api";

const PatientLandingPage = () => {
  const initial = {
    name: "",
    country: "",
    speciality: "",
    qualification: "",
  };
  useEffect(() => {
    const getDoctor = async () => {
      console.log(input);
      const data = await searchDoctor(input);
      console.log(data);
      setDoctors(data.data.data);
    };
    getDoctor();
  }, []);

  const [input, setInput] = useState(initial);
  const [doctors, setDoctors] = useState([]);
  // console.log(doctors);
  let doctor = doctors;
  const getDoctor = async () => {
    // console.log(input);
    const data = await searchDoctor(input);
    // console.log(data);
    setDoctors(data.data.data);
  };

  const handleChange = (e) => {
    if (e.target.value === "Select") {
      setInput({ ...input, [e.target.name]: "" });
      return;
    }

    setInput({ ...input, [e.target.name]: e.target.value });
  };

  if (input.name !== "") {
    if (
      input.country !== "" &&
      input.speciality !== "" &&
      input.qualification !== ""
    ) {
      doctor = doctor.filter((elem) => {
        return (
          elem.country === input.country &&
          elem.speciality === input.speciality &&
          elem.qualification === input.qualification
        );
      });
    } else if (input.country !== "" && input.speciality !== "") {
      doctor = doctor.filter((elem) => {
        return (
          elem.country === input.country && elem.speciality === input.speciality
        );
      });
    } else if (input.country !== "" && input.qualification !== "") {
      doctor = doctor.filter((elem) => {
        return (
          elem.country === input.country &&
          elem.qualification === input.qualification
        );
      });
    } else if (input.speciality !== "" && input.qualification !== "") {
      doctor = doctor.filter((elem) => {
        return (
          elem.speciality === input.speciality &&
          elem.qualification === input.qualification
        );
      });
    } else if (input.country !== "") {
      doctor = doctor.filter((elem) => {
        return elem.country === input.country;
      });
    } else if (input.speciality !== "") {
      doctor = doctor.filter((elem) => {
        return elem.speciality === input.speciality;
      });
    } else if (input.qualification !== "") {
      doctor = doctor.filter((elem) => {
        return elem.qualification === input.qualification;
      });
    }
  } else if (input.country !== "") {
    if (input.speciality !== "" && input.qualification !== "") {
      doctor = doctor.filter((elem) => {
        return (
          elem.speciality === input.speciality &&
          elem.qualification === input.qualification
        );
      });
    } else if (input.speciality !== "") {
      doctor = doctor.filter((elem) => {
        return elem.speciality === input.speciality;
      });
    } else if (input.qualification !== "") {
      doctor = doctor.filter((elem) => {
        return elem.qualification === input.qualification;
      });
    }
  } else if (input.speciality !== "") {
    if (input.qualification !== "") {
      doctor = doctor.filter((elem) => {
        return elem.qualification === input.qualification;
      });
    }
  }

  return (
    <div className="patientLandingPage-container">
      <div className="head">
        <div className="head-text">Search Doctor, Make an Appointment </div>
        <div className="sub-head-text">
          Discover the best doctors nearest to you🩺
        </div>
      </div>
      <div className="main-container">
        <div className="search-container">
          <div className="search-field">
            <label htmlFor="search">Search</label>
            <input
              className="name-input"
              name="name"
              placeholder="Search by name"
              onChange={(e) => {
                handleChange(e);
              }}
            />
          </div>

          <div className="search-country">
            <label htmlFor="country">Country</label>
            <select
              height="2rem"
              width="16rem"
              id="country"
              name="country"
              placeholder="Select Country"
              onChange={(e) => {
                handleChange(e);
              }}
            >
              <option>Select</option>
              <option>India</option>
              <option>UK</option>
              <option>USA</option>
            </select>
          </div>

          <div className="search-speciality">
            <label htmlFor="speciality">Speciality</label>
            <select
              height="2rem"
              width="16rem"
              id="speciality"
              name="speciality"
              placeholder="Speciality"
              onChange={(e) => {
                handleChange(e);
              }}
            >
              <option>Select</option>
              <option>Allergists</option>
              <option>Anesthesiologists</option>
              <option>Cardiologists</option>
              <option>Neurologists</option>
              <option>Pathologists</option>
              <option>Surgeon</option>
            </select>
          </div>

          <div className="search-qualification">
            <label htmlFor="qualification">Qualification</label>
            <select
              height="2rem"
              width="16rem"
              id="qualification"
              name="qualification"
              placeholder="qualification"
              onChange={(e) => {
                handleChange(e);
              }}
            >
              <option>Select</option>
              <option>BCS(Health)</option>
              <option>MBBS</option>
              <option>PHD</option>
            </select>
          </div>

          <button className="search-button" onClick={() => getDoctor()}>
            Search
          </button>
        </div>
        <div className="cards-container">
          {<DoctorCards doctors={doctor} />}
        </div>
      </div>
    </div>
  );
};

export default PatientLandingPage;
