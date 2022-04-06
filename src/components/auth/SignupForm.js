import React, { useState } from "react";
import {
  TextField,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Checkbox,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import { useForm, Controller } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Button from "components/Button";
import logo from "assets/images/logo.png";

const useStyles = makeStyles({
  wrapper: {
    backgroundColor: "#f6f7f8",
    height: "100vh",
    width: "50vw",
    padding: "0 43px 43px 43px",
    "@media (max-width: 800px)": {
      width: "100vw",
    },
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

const SignupForm = () => {
  const classes = useStyles();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const { control, handleSubmit, setError } = useForm();

  const onSubmit = (data) => {
    const companyEmailRegex =
      /^[a-zA-Z0-9._%+-]+@(?!gmail.com)(?!yahoo.com)(?!hotmail.com)(?!yahoo.co.in)(?!aol.com)(?!live.com)(?!outlook.com)[a-zA-Z0-9_-]+.[a-zA-Z0-9-.]{2,61}$/;
    if (!companyEmailRegex.test(data.email)) {
      const domain = data.email?.split("@")[1];
      setError("email", {
        type: "custom",
        message: `Please enter your business email address. This form does not accepet addresses from ${domain}`,
      });
    } else {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        navigate("/thankyou");
      }, 3000);
    }
  };

  return (
    <div className={classes.wrapper}>
      <Box
        // height="90%"
        paddingLeft="45px"
        paddingTop="58px"
        paddingRight="77px"
        paddingBottom="10px"
        bgcolor="white"
        borderRadius="0px 0px 20px 20px"
      >
        <img src={logo} alt="logo" />
        <p className={classes.header}>Signup</p>
        <p className={classes.detail}>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor{" "}
        </p>
        <form noValidate autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
          <Box marginBottom="35px">
            <Controller
              name="organizationWebsite"
              control={control}
              rules={{
                required: "Organization Website URL is required",
                pattern:
                  /^((https?|ftp|smtp):\/\/)?(www.)?[a-z0-9]+\.[a-z]+(\/[a-zA-Z0-9#]+\/?)*$/,
              }}
              render={({ field, formState: { errors } }) => {
                const error =
                  errors?.organizationWebsite?.type === "pattern"
                    ? "Please enter a valid url"
                    : errors?.organizationWebsite?.message;
                return (
                  <TextField
                    {...field}
                    error={errors.organizationWebsite ? true : false}
                    label="Organization Website URL"
                    variant="outlined"
                    fullWidth
                    helperText={error}
                  />
                );
              }}
            />
          </Box>
          <Box marginBottom="35px">
            <Controller
              name="email"
              control={control}
              rules={{
                required: "Work Email is required",
                pattern:
                  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              }}
              render={({ field, formState: { errors } }) => {
                const error =
                  errors?.email?.type === "pattern"
                    ? "Please enter a valid email address"
                    : errors?.email?.message;
                return (
                  <TextField
                    {...field}
                    error={errors.email ? true : false}
                    label="Work Email"
                    helperText={error}
                    variant="outlined"
                    fullWidth
                  />
                );
              }}
            />
          </Box>
          <Box marginBottom="35px">
            <Controller
              name="name"
              control={control}
              rules={{ required: "Name is required" }}
              render={({ field, formState: { errors } }) => (
                <TextField
                  {...field}
                  error={errors.name ? true : false}
                  label="Name"
                  helperText={errors?.name?.message}
                  variant="outlined"
                  fullWidth
                />
              )}
            />
          </Box>
          <Controller
            name="info"
            control={control}
            rules={{ required: true }}
            render={({ field, formState: { errors } }) => (
              <FormControl
                variant="outlined"
                fullWidth
                error={errors.info ? true : false}
              >
                <InputLabel id="about-us">
                  How did you hear about us?
                </InputLabel>
                <Select
                  {...field}
                  name="info"
                  labelId="about-us"
                  id="about"
                  label="How did you hear about us?"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={"google"}>Google Ad</MenuItem>
                  <MenuItem value={"instagram"}>Instagram Ad</MenuItem>
                  <MenuItem value={"linkedin"}>LinkedIn Ad</MenuItem>
                </Select>
              </FormControl>
            )}
          />
          <Box
            fontFamily="EpilogueRegular"
            display="flex"
            marginLeft="-10px"
            marginBottom="35px"
          >
            <Checkbox color="default" checked />
            <p className={classes.read}>Read and agree</p>
            <p>
              <a className={classes.link} href="test">
                Terms and Conditions.
              </a>
            </p>
          </Box>
          <Button
            text="Get started now"
            width="370px"
            bgColor="#4285DE"
            loading={loading}
          />
        </form>
        <p className={classes.read}>
          Already have an account?
          <a className={classes.link} href="test">
            {" "}
            Login
          </a>
        </p>
      </Box>
    </div>
  );
};

export default SignupForm;
