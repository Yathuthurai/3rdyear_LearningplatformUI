import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    maxWidth: 255,
    minWidth: 255,
    marginTop: 20,
  },
  media: {
    height: 140,
  },
});

export default function PhysicsUnit(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.image}
          title={props.name}
        />
        <CardContent>
          <Typography gutterBottom variant="body2" component="p">
            {props.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Total Modules: {props.modulesCount}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Link to={`/${props.id}/modules`}>
          <Button size="small" color="primary">
            Go
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}
