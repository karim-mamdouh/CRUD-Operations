//React
import React from "react";
//Scss styling file
import "./DataTable.scss";
//Redux store
import { useSelector, useDispatch } from "react-redux";
import { removeUser, setEditID } from "../../redux store/features/dataSlice";
//Components
import TableField from "../TableField/TableField";
//Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faList,
  faPenToSquare,
  faPhone,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

const DataTable = () => {
  const dispatch = useDispatch(); //Variable to dispatch store actions
  const data = useSelector((state) => state.userData.data); //Variable for accessing data array in store
  const activeUser = useSelector((state) => state.userData.editID); //Variable for accessing editId variable in store
  //Function called by TableField to delete user from store
  const deleteUser = (id) => {
    if (activeUser === id) {
      dispatch(setEditID(undefined));
    }
    dispatch(removeUser(id));
  };
  //Function called by TableField to set editId in store
  const editUser = (id) => {
    dispatch(setEditID(id));
  };

  return (
    <div className="data-table">
      <table>
        <thead>
          <tr className="data-table__header">
            {/* Index header */}
            <th className="data-table__header-cell">
              <FontAwesomeIcon icon={faList} /> &nbsp; Index
            </th>
            {/* First name header */}
            <th className="data-table__header-cell">
              <FontAwesomeIcon icon={faUser} /> &nbsp; First Name
            </th>
            {/* Last name header */}
            <th className="data-table__header-cell">
              <FontAwesomeIcon icon={faUser} /> &nbsp; Last Name
            </th>
            {/* Phone header */}
            <th className="data-table__header-cell">
              <FontAwesomeIcon icon={faPhone} /> &nbsp; Phone
            </th>
            <th className="data-table__header-cell">
              <FontAwesomeIcon icon={faPenToSquare} /> &nbsp; Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {/* Table data from store */}
          {data.map((element, index) => (
            <TableField
              user={element}
              key={index}
              deleteUser={deleteUser}
              editUser={editUser}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
