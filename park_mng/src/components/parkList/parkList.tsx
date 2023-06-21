import React, { FC } from "react";
import { FormInfo } from "../../interface";
import './parkList.css'

interface ParkListProps {
  parkData: FormInfo[];
}

const ParkList: FC<ParkListProps> = ({ parkData }) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Owner Name</th>
            <th>Vehicle Type</th>
            <th>License No</th>
            <th>Entry Time</th>
            <th>Exit Time</th>
            <th>Status</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
        {parkData.map((item,i) => (
            <tr key={i}>
                <td>{item.license_no}</td>
              <td>{item.name}</td>
              <td>{item.type}</td>
              <td>{item.license_no}</td>
              <td>{item.entry_date}</td>
              <td>{item.exit_date}</td>
              <td>{item.status}</td>
              <td>Edit button</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ParkList;
