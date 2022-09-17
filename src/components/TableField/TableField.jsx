//React
import React from "react";
//Scss styling file
import "./TableField.scss";
//Icons
import { faPen, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TableField = (props) => {
  return (
    <tr className="data-table__row">
      {/* User id cell */}
      <td>{props.user.id}</td>
      {/* First name cell */}
      <td>{props.user["First Name"]}</td>
      {/* Last name cell */}
      <td>{props.user["Last Name"]}</td>
      {/* Phone celll */}
      <td>{props.user["Phone"]}</td>
      <td>
        {/* Edit button */}
        <button
          onClick={() => {
            props.editUser(props.user.id);
          }}
        >
          <FontAwesomeIcon icon={faPen} className="edit-icon" />
        </button>
        {/* Delete button */}
        <button
          onClick={() => {
            props.deleteUser(props.user.id);
          }}
        >
          <FontAwesomeIcon icon={faTrashCan} className="trash-icon" />
        </button>
      </td>
    </tr>
  );
};

export default TableField;
