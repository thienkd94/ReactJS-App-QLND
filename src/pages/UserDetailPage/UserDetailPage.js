import React, { useState, useEffect} from 'react';
import callAPI from "./../../utils/apiCaller";

const UserDetailPage = (props) => {
    const [user, setUser] = useState({});

    let { match } = props;
    let { id } = match.params;

    useEffect(() => {
        callAPI(`users/${id}`, "GET", null).then((res) => setUser(res.data));
      }, [id]);

    return (
        <div>
            {user.id}
            {user.name}
            {user.phone}
        </div>
    )
}

export default UserDetailPage
