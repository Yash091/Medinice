import React, { useContext } from 'react'
import { AppContext } from '../../../context/Context'

const PendingRequests = () => {

  const {requestedAppt} = useContext(AppContext);
    return (
    <div className="upcoming-appointments">
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Time Slot</th>
            <th>Description</th>
            <th>Appointment</th>
          </tr>
        </thead>
        <tbody>
          {
              requestedAppt.map((elem) => {
                return (
                  <tr>
            <td>{elem.name}</td>
            {/* <td>Doe</td> */}
            <td>{elem.email}</td>
            <td></td>
          </tr>
                )
              })
          }
          {/* <tr>
            <td>John</td>
            <td>Doe</td>
            <td>john@example.com</td>
            <td></td>
          </tr>
          <tr>
            <td>Mary</td>
            <td>Moe</td>
            <td>mary@example.com</td>
            <td></td>
          </tr>
          <tr>
            <td>July</td>
            <td>Dooley</td>
            <td>july@example.com</td>
            <td></td>
          </tr> */}
        </tbody>
      </table>
    </div>
  )
}

export default PendingRequests