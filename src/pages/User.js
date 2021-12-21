import React from 'react';
import {useParams, useHistory} from 'react-router-dom'
import {usersList} from '../utils/Data'

function User() {
    const history = useHistory()
    const {userId} = useParams()
    const userDetails = usersList.find(user => user.id.toString() === userId)


    const handleClick = () => {
        setTimeout(() => {
            history.push("/users")
        }, 3000)
    }

    return (
        <div>
            <h1>Hi I am coming from a nested route</h1>
            <p><strong>{userDetails.name}</strong> - {userDetails.age}</p>
            <button onClick={handleClick}>GO BACK TO USERS PAGE</button>
        </div>
    );
}

export default User;