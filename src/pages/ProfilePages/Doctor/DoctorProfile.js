import React from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel, Button, ButtonGroup } from '@chakra-ui/react'
import "./DoctorProfile.css"
import LeftContainer from "../../../components/DoctorProfile/LeftContainer/LeftContainer.js"
import UpcomingAppointments from '../../../components/DoctorProfile/UpcomingAppointments/UpcomingAppointments'
import PastAppointments from '../../../components/DoctorProfile/PastAppointments/PastAppointments'
import PendingRequests from '../../../components/DoctorProfile/PendingRequests/PendingRequests'

const DoctorProfile = ({socket}) => {
  return (
    <div className="doc-profile-container">
      <div className = "left-container">
        <LeftContainer />
      </div>
      <div className="right-container">
        <Tabs defaultIndex={0} style={{display: "flex", justifyContent: "center", flexDirection: "column"}}>
          <TabList style={{display: "flex", colorScheme: "#2AA7FF"}}>
              <Tab>Upcoming Appointments</Tab>
              <Tab>Past Appointments</Tab>
              <Tab>Pending Requests</Tab>
          </TabList>
          <TabPanels>
              <TabPanel>
                  <UpcomingAppointments socket={socket}/>
              </TabPanel>
              <TabPanel>
                  <PastAppointments />
              </TabPanel>
              <TabPanel>
                  <PendingRequests socket={socket}/>
              </TabPanel>
          </TabPanels>
      </Tabs>
      </div>
    </div>
  )
}

export default DoctorProfile