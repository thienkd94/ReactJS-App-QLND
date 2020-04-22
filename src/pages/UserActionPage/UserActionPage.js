import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import callAPI from "../../utils/apiCaller";
import "./UserActionPage.css";

const UserActionPage = ({ match, history }) => {
  const [user, setUser] = useState({
    id: "",
    name: "",
    birthday: "",
    gender: "male",
    email: "",
    phone: "",
    job: "",
    company: "",
  });

  useEffect(() => {
    if (match) {
      let id = match.params.id;
      callAPI(`users/${id}`, 'GET', null).then(res => {
        let { id, name, email, birthday, job, company, phone, gender } = res.data;
        setUser({
          id: id,
          name: name,
          email: email,
          birthday: birthday,
          gender: gender,
          phone: phone,
          job: job,
          company: company
        })
    })
}
  }, [match])

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    const { id, name, email, birthday, job, company, phone, gender } = user;
    e.preventDefault();
    if (id) {
      callAPI(`users/${id}`, 'PUT', {
        name: name,
        email: email,
        birthday: birthday,
        gender: gender,
        phone: phone,
        job: job,
        company: company,
      }).then(res => {
        history.goBack();
        })
    } else {
      callAPI("users", "POST", {
        name: name,
        email: email,
        birthday: birthday,
        gender: gender,
        phone: phone,
        job: job,
        company: company,
      }).then(res => {
        history.goBack(); // or history.push("/user-list")
      })
    }
  };

  return (
    <div className="wrapper">
      <h3 className="mb-0">{user.id ? "Thay đổi thông tin người dùng" : "Thêm người dùng"}</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group mb-0">
          <label htmlFor="name">
            <b>Họ tên:</b>
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={user.name}
            placeholder="John Doe"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="form-group mb-0">
          <label htmlFor="birthday">
            <b>Ngày sinh:</b>
          </label>
          <input
            type="date"
            name="birthday"
            id="birthday"
            value={user.birthday}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="radio">
          <label id="gender-label">
            <b>Giới tính:</b>{" "}
          </label>
          <input
            type="radio"
            value="male"
            name="gender"
            id="male"
            checked={user.gender === "Male"}
            onChange={(e) => handleChange(e)}
          />
          <label htmlFor="male">Nam</label>
          <input
            type="radio"
            value="female"
            name="gender"
            id="female"
            checked={user.gender === "Female"}
            onChange={(e) => handleChange(e)}
          />
          <label htmlFor="female">Nữ</label>
        </div>
        <div className="form-group mb-0">
          <label htmlFor="email">
            <b>Email:</b>
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="johndoe@dev.us"
            value={user.email}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="form-group mb-0">
          <label htmlFor="phone">
            <b>Số điện thoại:</b>
          </label>
          <input
            type="tel"
            name="phone"
            id="phone"
            placeholder="123456789"
            value={user.phone}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="form-group mb-0">
          <label htmlFor="job">
            <b>Nghề nghiệp:</b>
          </label>
          <input
            type="job"
            name="job"
            id="job"
            placeholder="Front-end Developer"
            value={user.job}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="form-group mb-0">
          <label htmlFor="company">
            <b>Công ty:</b>
          </label>
          <input
            type="company"
            name="company"
            id="company"
            placeholder="Facebook"
            value={user.company}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="button">
          <Link to="/user-list">
            <input type="button" name="cancel" value="Hủy" />
          </Link>
          <input type="submit" name="submit" value={user.id ? "Lưu lại" : "Thêm mới"} />
        </div>
      </form>
    </div>
  );
};

export default UserActionPage;
