import React from "react";
import { Line } from "rc-progress";
import Avatar from "react-avatar";
function UserCard({ user }) {
  return (
    <div className="card shadow-lg p-3 hovercard usercard">
      <div className="text-center">
        <Avatar round size="100" src={user.avatar} />
        <h6 className="mt-2">{`${user.first_name} ${user.last_name}`}</h6>
        <p className="userp">{user.email}</p>
        <p className="mt-1">Your Plan: Standard</p>
        <button className="btn btn-warning w-75 text-white">Active User</button>
        <div className="mt-3">
          <p>Plan Uses</p>
          <Line
            percent={25}
            strokeWidth="2"
            strokeColor="#feb23f"
            className="mt-3 w-75 mx-2"
          />
        </div>

        <div className="d-flex justify-content-center mt-3">
          <div className="d-flex flex-column line-height">
            <p className="times">2500</p>
            <p className="desc">clicks reviewed</p>
          </div>
          <div className="d-flex flex-column devider"></div>
          <div className="d-flex flex-column line-height">
            <p className="times">5000</p>
            <p className="desc">monthly clicks</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserCard;
