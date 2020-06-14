import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Button from "react-bootstrap/Button";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import { blue } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: blue[500],
  },
}));
export default function CardMaterial(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            {props.AvatarLetter}
          </Avatar>
        }
        title={props.CardTitle}
        subheader={props.SubTitle}
      />
      <CardMedia
        className={classes.media}
        image={props.ImgUrl}
        title={props.ImgTitle}
      />
      <CardContent>
        <Typography variant="body2" component="p">
          Total Units: {props.UnitNum}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Link to={props.LinkRoute}>
          <Button variant="dark">{props.ButtonText}</Button>
        </Link>
      </CardActions>
    </Card>
  );
}
