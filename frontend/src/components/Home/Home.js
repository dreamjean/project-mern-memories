import { Container, Grid, Grow } from "@material-ui/core";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import postsAction from "../../actions/posts";
import Form from "../Form/Form";
import Posts from "../Posts/Posts";
import useStyles from "./styles";

const Home = () => {
  const [currentId, setCurrentId] = useState(null);
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(postsAction.getPosts());
  }, [currentId, dispatch]);

  return (
    <div>
      <Grow in>
        <Container>
          <Grid
            className={classes.mainContainer}
            container
            justify="space-between"
            align-items="strech"
            spacing={3}
          >
            <Grid item xs={12} sm={7}>
              <Posts {...{ setCurrentId }} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form {...{ currentId, setCurrentId }} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </div>
  );
};

export default Home;
