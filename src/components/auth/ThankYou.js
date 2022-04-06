import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Button from "components/Button";
import logo from "assets/images/logo.png";

const useStyles = makeStyles({
  wrapper: {
    backgroundColor: "#f6f7f8",
    height: "100vh",
    width: "50vw",
    padding: "0 43px 43px 43px",
  },
  header: {
    fontFamily: "EpilogueBold",
    fontSize: "28px",
    marginTop: "70px",
    marginBottom: "8px",
  },
  detail: { fontFamily: "outfit", opacity: 0.6, marginBottom: "50px" },
  read: {
    marginRight: "10px",
    color: "#6D707A",
  },
  link: { color: "#1F8EDE", fontFamily: "EpilogueSemiBold" },
});

const ThankYou = () => {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <Box
        height="90%"
        paddingLeft="45px"
        paddingTop="58px"
        paddingRight="77px"
        bgcolor="white"
        borderRadius="0px 0px 20px 20px"
      >
        <img src={logo} alt="logo" />
        <p className={classes.header}>Thank You</p>
        <p className={classes.detail}>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor{" "}
        </p>
        <Button text="Back to Home" width="256px" bgColor="#4285DE" />
        <p className={classes.read}>
          Question? Email us
          <a className={classes.link} href="email">
            {" "}
            Login
          </a>
        </p>
      </Box>
    </div>
  );
};

export default ThankYou;
