import React from "react";
import { Link } from "react-router-dom";

const UserItem = ({ user, index, currentPage, usersPerPage, deleteUser }) => {
  const getUserId = (id) => {
    if (confirm("Bạn có chắc chắn muốn xóa ?")) {//eslint-disable-line
      deleteUser(id);
    }
  };

  // const confirmDelete = () => {
  //   console.log(userId)
  // }

  return (
    // <Link to={`user/${user.id}/name=${user.name}`} className="text-decoration-none">

    <div className="row mx-0">
      <div className="cell">
        {currentPage * usersPerPage + index + 1 - usersPerPage}
      </div>
      <div className="cell" data-title="Họ tên">
        {user.name}
      </div>
      <div className="cell" data-title="Ngày sinh">
        {user.birthday}
      </div>
      <div className="cell" data-title="Email">
        {user.email}
      </div>
      <div className="cell" data-title="Nghề nghiệp">
        {user.job}
      </div>
      <div className="cell" data-title="Công ty">
        {user.company}
      </div>
      <div className="cell" data-title="Số ĐT">
        {user.phone}
      </div>
      <div className="cell" data-title="Hành động">
        <Link to={`/user/${user.id}/edit`}>
          <span title="Chỉnh sửa" style={{ color: "#8DAFCE", marginRight: 15 }}>
            <i className="far fa-edit"></i>
          </span>
        </Link>
        <span
          title="Xóa"
          data-toggle="modal"
          data-target="#exampleModal"
          style={{ color: "tomato" }}
          onClick={() => getUserId(user.id)}
        >
          <i className="far fa-trash-alt"></i>
        </span>
      </div>

      {/*
  <div className="modal fade" id="exampleModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">Xóa người dùng</h5>
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <div className="modal-body">
          Bạn có chắc chắn muốn xóa người dùng này ?
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" data-dismiss="modal">Hủy</button>
          <button type="button" className="btn btn-primary" onClick={confirmDelete} >Xác nhận</button>
        </div>
      </div>
    </div>
  </div> */}
    </div>
    // </Link>
  );
};

export default UserItem;
