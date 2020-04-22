import React, { useEffect } from "react";

const HomePage = () => {
  useEffect(() => {
    document.title = "Trang chủ";
  }, []);

  return (
    <div>
      <h3 className="mt-2">Giới thiệu</h3>
      <p>Đây là một sản phẩm nhỏ mà tôi làm ra trong quá trình tự tìm hiểu về ReactJS. Sản phẩm quản lý người dùng hiện tại có các chức năng:</p>
      <p>+ Thêm người dùng</p>
      <p>+ Chỉnh sửa thông tin người dùng</p>
      <p>+ Xóa người dùng</p>
      <p>+ Tìm kiếm (đang cập nhật)</p>
      <i>* Ghi chú: Các chức năng đều được thực hiện với thao tác gọi API từ server (fake trên heroku <code>http://fake-rest-api-nodejs-2.herokuapp.com/users</code>)</i>
    </div>
  );
};

export default HomePage;
