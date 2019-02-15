import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";

import { Link } from "react-router-dom";

import axios from "axios";

const baseUrl = "http://localhost:4000";

const styles = {
  card: {
    minWidth: 275
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
};

class ProjectList extends React.Component {
  state = {
    projects: []
  };

  componentDidMount() {
    axios
      .get(`${baseUrl}/api/projects`)
      .then(res => {
        console.log(res.data);
        this.setState({
          projects: res.data.projects
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    const { classes } = this.props;
    console.log(this.state)
    console.log(this.state.projects);
    const projects = this.state.projects.map(project => {
      return (
        <ListItem key={project.id}>
          <Card className={classes.card}>
            <CardContent>
              <Typography variant="h5" component="h2">
                {project.name}
              </Typography>
              <Typography component="p">{project.description}</Typography>
            </CardContent>
            <Button variant="contained" size="small" component={Link} to={`/projects/:id`}>
              View Project
            </Button>
          </Card>
        </ListItem>
      );
    });
    return <List>{projects}</List>;
  }
}

export default withStyles(styles)(ProjectList);
