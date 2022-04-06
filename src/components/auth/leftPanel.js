import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import triangle from "assets/images/triangle.png";
import circle from "assets/images/circle.png";

const useStyles = makeStyles({
  wrapper: {
    padding: "103px",
    backgroundColor: "#141933",
    width: "50vw",
    color: "white",
  },
  circle: { position: "absolute", top: "203px", left: "460px" },
  triangle: { position: "absolute", top: "1px", left: "1px" },
  name: { fontFamily: "EpilogueSemiBold", marginBottom: "3px" },
  role: {
    fontFamily: "outfit",
    fontSize: "14px",
    opacity: 0.6,
  },
  text: {
    marginTop: "25px",
    marginBottom: "35px",
    width: "403px",
    lineHeight: "160%",
    fontFamily: "EpilogueRegular",
    fontSize: "15px",
  },
  box: {
    opacity: 0.15,
  },
});

const LeftPanel = ({ name, role, text }) => {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <img src={circle} className={classes.circle} alt="circle" />
      <img src={triangle} className={classes.triangle} alt="triangle" />
      <p className={classes.name}>{name}</p>
      <span className={classes.role}>{role}</span>
      <p className={classes.text}>{text}</p>
      <Box display="flex">
        <Box width="40px" height="4px" bgcolor="white" borderRadius="10px" />
        <Box
          className={classes.box}
          width="20px"
          height="5px"
          bgcolor="white"
          borderRadius="10px"
          marginLeft="7px"
        />
        <Box
          className={classes.box}
          width="20px"
          height="5px"
          bgcolor="white"
          borderRadius="10px"
          marginLeft="7px"
        />
      </Box>
    </div>
  );
};

export default LeftPanel;
