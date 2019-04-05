import Layout from "../components/layout";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2
  }
});

function Index(props) {
  const { classes } = props;

  return (
    <Layout>
      <Grid item xs>
        <Paper className={classes.root} elevation={1}>
          Item 1
        </Paper>
      </Grid>
      <Grid item xs>
        <Paper className={classes.root} elevation={1}>
          Item 2
        </Paper>
      </Grid>
    </Layout>
  );
}

export default withStyles(styles)(Index);
