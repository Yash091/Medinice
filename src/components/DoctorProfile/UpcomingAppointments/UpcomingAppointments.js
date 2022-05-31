import * as React from "react";
import "./UpcomingAppointments.css"

const UpcomingAppointments = () => {
  return (
    <div className="upcoming-appointments">
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Time Slot</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>John</td>
            <td>Doe</td>
            <td>john@example.com</td>
          </tr>
          <tr>
            <td>Mary</td>
            <td>Moe</td>
            <td>mary@example.com</td>
          </tr>
          <tr>
            <td>July</td>
            <td>Dooley</td>
            <td>july@example.com</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
};

export default UpcomingAppointments;
