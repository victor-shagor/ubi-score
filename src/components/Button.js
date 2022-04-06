import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles({
  btn: {
    backgroundColor: (props) => props.bgColor,
    height: "56px",
    width: (props) => props.width,
    color: "white",
    borderRadius: "5px",
    border: "none",
    fontFamily: "outfitMedium",
  },
});

const Button = ({ text, loading, onClick, ...props }) => {
  const Classes = useStyles(props);
  return (
    <button onClick={onClick} className={Classes.btn} type="submit">
      {loading ? <CircularProgress color="inherit" /> : text}
    </button>
  );
};

export default Button;
