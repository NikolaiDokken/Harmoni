import React from "react";
import { NavLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { fade, Theme, createStyles, Grid, Button } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    card: {
      position: "relative",
      maxWidth: "400px",
      maxHeight: "200px",
      backgroundColor: "#ffffff",
      margin: "12px",
      marginBottom: "12px"
    },
    customImage: {
      transition: "transform 0.2s",
      "&:hover": {
        transform: "scale(1.05)"
      }
    },
    content: {
      fontSize: "20px",
      color: "black",
      alignItems: "rtl",
      backgroundColor: "white"
    },
    title: {
      color: "black",
      textAlign: "center"
    },
    chip: {
      position: "absolute",
      top: "70%",
      left: 0,
      paddingTop: "10px",
      paddingLeft: "2px",
      paddingBottom: "3px",
      width: "30%",
      height: "auto",
      backgroundColor: "#ffffff",
      color: "black",
      borderTopRightRadius: "4px",
      fontSize: 14
    }
  })
);

export default function EventCard(props: any) {
  const classes = useStyles();
  var date = new Date(props.event.event_start);
  return (
    <NavLink
      to={"/event/" + props.event.id}
      style={{ textDecoration: "none", margin: "auto" }}
    >
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            className={classes.customImage}
            component="img"
            height="160"
            image={props.event.event_image}
            title={props.event.event_name}
          />
          <div className={classes.chip}>
            {date.toDateString().substring(0, 3) +
              " " +
              date.toDateString().substring(7, 10) +
              ". " +
              date.toDateString().substring(4, 7) +
              " "}
          </div>
          <CardContent>
            <Grid container spacing={6} direction="row" justify="space-evenly">
              <div style={{ width: "100%", textAlign: "center" }}>
                <h2
                  style={{
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    marginLeft: "10%",
                    marginRight: "10%"
                  }}
                >
                  {props.event.event_name}
                </h2>
              </div>
            </Grid>
          </CardContent>
        </CardActionArea>
      </Card>
    </NavLink>
  );
}
