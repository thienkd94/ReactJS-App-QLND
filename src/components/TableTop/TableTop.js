import React, { useState } from "react";

const TableTop = ({ searchKeyword }) => {
  const [keyword, setKeyword] = useState("");

  const handleChange = (e) => {
    setKeyword(e.target.value);
  };

  const handleClickBtnSearch = () => {
    searchKeyword(keyword);
  };

  return (
    <div className="table-top">
      <p>Danh sách người dùng</p>
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder="Nhập vào tên người dùng"
          aria-describedby="basic-addon2"
          value={keyword}
          onChange={handleChange}
        />
        <div className="input-group-append">
          <button
            className="btn btn-search"
            type="button"
            title="Tìm kiếm"
            onClick={handleClickBtnSearch}
          >
            <i className="fas fa-search"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TableTop;
