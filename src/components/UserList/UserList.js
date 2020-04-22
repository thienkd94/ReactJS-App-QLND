import React from "react";
// import UserItem from "../UserItem/UserItem";

const UserList = (props) => {
  return (
    <>
      <div className="table">
        <div className="row header mx-0">
          <div className="cell">#</div>
          <div className="cell">Họ tên</div>
          <div className="cell">Ngày sinh</div>
          <div className="cell">Email</div>
          <div className="cell">Nghề nghiệp</div>
          <div className="cell">Công ty</div>
          <div className="cell">Số ĐT</div>
          <div className="cell"></div>
        </div>
        {props.children}
      </div>
    </>
  );
};

export default UserList;
