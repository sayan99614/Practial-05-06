import React, { useMemo } from "react";
import Avatar from "react-avatar";
import "./userprofile.css";
function UserProfile({
  isOwner,
  email,
  first_name,
  last_name,
  avatar,
  id,
  hover,
  setHover,
  setShowId,
}) {
  function mouseEnter(id) {
    setShowId(id);
    setHover(true);
  }

  function mouseOut() {
    setHover(false);
  }

  let access = ["Manager", "Read", "View"];
  const accessType = useMemo(() => {
    return access[Math.floor(Math.random() * access.length)];
  }, []);
  return (
    <tr>
      <th>
        <div className="d-flex">
          <div
            className="avatar"
            onMouseEnter={() => mouseEnter(id)}
            onMouseLeave={mouseOut}
          >
            <Avatar round size="35" src={avatar} />
          </div>
          <div className="d-flex flex-column">
            <div className="name">{`${first_name} ${last_name}`}</div>
            <div className="email text-secondary">{email}</div>
          </div>
        </div>
      </th>
      <td>
        {id === 1 ? (
          <h6 className="text-success">Active</h6>
        ) : (
          <select className="form-select form-control-sm" id="example1">
            <option>Inactive</option>
          </select>
        )}
      </td>
      <td>
        {id === 1 ? (
          <p className="fw-bold">Owner</p>
        ) : (
          <select className="form-select form-control-sm">
            <option>{accessType}</option>
          </select>
        )}
      </td>
      <td>
        {isOwner ? (
          <i className="fa-solid fa-lock fa-lg text-secondary" />
        ) : (
          <i className="fa-solid fa-trash-can fa-lg text-secondary"></i>
        )}
      </td>
    </tr>
  );
}

export default UserProfile;
