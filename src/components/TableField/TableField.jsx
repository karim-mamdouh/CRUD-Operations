//React
import PropTypes from "prop-types";
//Scss styling file
import "./TableField.scss";
//Icons
import { faPen, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TableField = ({ user, editUser, deleteUser }) => {
  return (
    <tr className="data-table__row">
      {/* User id cell */}
      <td>{user.id}</td>
      {/* First name cell */}
      <td>{user["First Name"]}</td>
      {/* Last name cell */}
      <td>{user["Last Name"]}</td>
      {/* Phone celll */}
      <td>{user["Phone"]}</td>
      <td>
        {/* Edit button */}
        <button
          onClick={() => {
            editUser(user.id);
          }}
        >
          <FontAwesomeIcon icon={faPen} className="edit-icon" />
        </button>
        {/* Delete button */}
        <button
          onClick={() => {
            deleteUser(user.id);
          }}
        >
          <FontAwesomeIcon icon={faTrashCan} className="trash-icon" />
        </button>
      </td>
    </tr>
  );
};

//Props type validation
TableField.propTypes = {
  user: PropTypes.object.isRequired,
  editUser: PropTypes.func.isRequired,
  deleteUser: PropTypes.func.isRequired,
};

export default TableField;
