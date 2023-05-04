import React from "react";
import classes from "./ButtonDel.module.css";

const ButtonDel = props => {
    return <button className={classes.button} 
    type={props.type || 'button'} 
    onClick={props.onClick}
    >
        {props.children}
    </button>
};

export default ButtonDel;