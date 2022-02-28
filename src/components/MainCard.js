import React, { useEffect, useState } from "react";
import "./maincard.css";
import UserProfile from "./UserProfile";
import { data } from "./data";
import UserCard from "./UserCard";
function MainCard(props) {
  const [hover, setHover] = useState(false);
  const [showId, setShowId] = useState(null);
  const [user, setUser] = useState({});

  useEffect(() => {
    const singledata = data.find((item) => showId === item.id);
    setUser(singledata);
  }, [showId]);

  return (
    <div className="row">
      <div className="col-sm-8 offset-sm-2">
        <div className="card card-body shadow-sm p-3 mt-4">
          <table className="table table-borderless">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Status</th>
                <th scope="col">Access</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => {
                return (
                  <UserProfile
                    isOwner={item.id === 1 ? true : false}
                    key={item.id}
                    first_name={item.first_name}
                    email={item.email}
                    last_name={item.last_name}
                    avatar={item.avatar}
                    id={item.id}
                    hover={hover}
                    setHover={setHover}
                    setShowId={setShowId}
                  />
                );
              })}
            </tbody>
          </table>
        </div>
        {hover && user && <UserCard user={user} />}
      </div>
    </div>
  );
}

export default MainCard;
