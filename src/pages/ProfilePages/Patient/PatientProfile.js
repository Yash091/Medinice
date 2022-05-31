import React from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel, Button, ButtonGroup } from '@chakra-ui/react'
import "./PatientProfile.css"
import LeftContainer from "../../../components/PatientProfile/LeftContainer/LeftContainer.js"
import PastAppointments from '../../../components/PatientProfile/PastAppointments/PastAppointments'
import UpcomingAppointments from '../../../components/PatientProfile/UpcomingAppointments/UpcomingAppointments'

const PatientProfile = () => {
  return (
    <div className="patient-profile-container">
      <div className = "left-container">
        <LeftContainer />
      </div>
      <div className="right-container">
        <Tabs defaultIndex={0} style={{display: "flex", justifyContent: "center", flexDirection: "column"}}>
          <TabList style={{display: "flex", colorScheme: "#2AA7FF"}}>
              <Tab>Upcoming Appointments</Tab>
              <Tab>Past Appointments</Tab>
              {/* <Tab>Pending Requests</Tab> */}
          </TabList>
          <TabPanels>
              <TabPanel>
                  <UpcomingAppointments/>
              </TabPanel>
              <TabPanel>
                  <PastAppointments />
              </TabPanel>
              <TabPanel>
                  
              </TabPanel>
          </TabPanels>
      </Tabs>
      </div>
    </div>
  )
}

export default PatientProfile;