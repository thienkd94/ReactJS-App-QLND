import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import callAPI from "./../../utils/apiCaller";
import UserList from "../../components/UserList/UserList";
import UserItem from "../../components/UserItem/UserItem";
import Pagination from "../../components/Pagination/Pagination";
import TableTop from "../../components/TableTop/TableTop";


const UserListPage = (props) => {
  // let { users } = props
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage, setUsersPerPage] = useState(8);
  const [searchTerm, setSearchTerm] = useState('')


  //Get curent  user
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUser = users.slice(indexOfFirstUser, indexOfLastUser);

  //Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  useEffect(() => {
    setLoading(true);
    callAPI("users?_sort=id&_order=desc", "GET", null).then((res) => {
      setUsers(res.data);
      setLoading(false);
    });
    document.title = "Danh sách người dùng";
  }, []);

  const deleteUser = (id) => {
    callAPI(`users/${id}`, "DELETE", null).then((res) => {
      if (res.status === 200) {
        let newUsers = [...users].filter((user) => user.id !== id);
        setUsers(newUsers);
      }
    });
  };

  const searchKeyword = (keyword) => {
     setSearchTerm(keyword)
  }

  if (searchTerm) {
    // let newUsers = [...users].filter(user => {
    //   return user.name.toLowerCase().indexOf(searchTerm) !== -1
    // })
    return (
      <>
        <TableTop searchKeyword={searchKeyword} />
       </>
    )
  }

  if (loading) {
    return (
      <>
        <TableTop />
        <p>Loading...</p>
      </>
    );
  }

  return (
    <>
      <TableTop searchKeyword={searchKeyword} />
      <UserList>
        {showUsers(users, currentUser, currentPage, usersPerPage, deleteUser)}
      </UserList>
      <Pagination
        usersPerPage={usersPerPage}
        currentPage={currentPage}
        totalUsers={users.length}
        paginate={paginate}
      />
    </>
  );
};

const showUsers = (
  users,
  currentUser,
  currentPage,
  usersPerPage,
  deleteUser
) => {
  let result = null;
  if (currentUser.length > 0) {
    result = currentUser.map((user, index) => {
      return (
        <UserItem
          key={index}
          user={user}
          index={index}
          currentPage={currentPage}
          usersPerPage={usersPerPage}
          deleteUser={deleteUser}
        />
      );
    });
  }
  return result;
};

const mapStateToProps = (state) => {
  return {
    users: state.users,
  };
};

export default connect(mapStateToProps, null)(UserListPage);
