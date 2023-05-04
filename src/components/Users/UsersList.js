import React from "react";
import Card from "../UI/Card";
import classes from "./UsersList.module.css";
import ButtonDel from "../UI/ButtonDel";

const UsersList = ({users, onRemoveUser}) => {


  return (
    <Card className={classes.users}>
   
      <ul>
        
        {users.map((user) => (
          <li key={user.id}>
            {user.name} ({user.age} years old)

            <ButtonDel 
              className="button" 
              type="submit" 
              onClick={() => onRemoveUser(user.id)}
            >
              close
            </ButtonDel>
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UsersList;
