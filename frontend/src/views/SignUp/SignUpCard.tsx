import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "../../components/Card/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import InputField from "../../components/InputField/InputField";
import Grid from "@material-ui/core/Grid";
import Button from "../../components/Button/Button";
import useForm from "../../service/Form/useForm";
import validate from "../../service/Form/Validate";

const useStyles = makeStyles({
  grid: {
    maxWidth: "450px",
    minWidth: "250px"
  },

  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: "20px"
  },
  pos: {
    marginBottom: 12
  },
  notchedOutline: {
    borderRadius: 0
  }
});

export default () => {
  const classes = useStyles();

  const { handleChange, handleSubmit, values, errors } = useForm(
    submit,
    {
      email: "",
      emailConfirmed: "",
      password: "",
      passwordConfirmed: "",
      fullName: "",
      telephone: ""
    },
    validate
  );

  function submit() {
    console.log("Submitted form");
    /////////// KODE FOR SIGN UP VERIFICATION HER
  }
  return (
    <Card width={"80%"} style={{ minWidth: "250px", maxWidth: "450px" }}>
      <Grid container className={classes.grid}>
        <CardContent>
          <Grid container justify="center" direction="row">
            <Typography className={classes.title} variant="h3" align="center">
              Sign up
            </Typography>
          </Grid>
          <form onSubmit={handleSubmit} noValidate>
            {errors.email && <Typography>{errors.email}</Typography>}

            <InputField
              name="email"
              label="Email"
              type="text"
              required={true}
              value={values.email}
              onChange={handleChange}
            />
            {errors.emailConfirmed && (
              <Typography>{errors.emailConfirmed}</Typography>
            )}
            <InputField
              name="emailConfirmed"
              label="Confirm email"
              type="text"
              required={true}
              value={values.emailConfirmed}
              onChange={handleChange}
            />
            {errors.password && <Typography>{errors.password}</Typography>}

            <InputField
              name="password"
              label="Password *"
              type="password"
              autoComplete="current-password"
              value={values.password}
              onChange={handleChange}
            />
            {errors.passwordConfirmed && (
              <Typography>{errors.passwordConfirmed}</Typography>
            )}
            <InputField
              name="passwordConfirmed"
              label="Confirm password *"
              type="password"
              autoComplete="current-password"
              value={values.passwordConfirmed}
              onChange={handleChange}
            />
            {errors.fullName && <Typography>{errors.fullName}</Typography>}
            <InputField
              name="fullName"
              label="Full name"
              type="text"
              required={true}
              value={values.fullName}
              onChange={handleChange}
            />
            <InputField
              name="telephone"
              label="Telephone"
              type="text"
              pattern="[0-9]*"
              required={true}
              value={values.telephone}
              onChange={handleChange}
            />
            <Grid container direction="row" justify="space-between">
              <Button>Already have a user?</Button>
              <Button type="submit">Sign up</Button>
            </Grid>
          </form>
        </CardContent>
      </Grid>
    </Card>
  );
};