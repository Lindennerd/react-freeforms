import Layout from "../components/layout";
import CreateForm from "../components/createForm";
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

class Index extends React.Component {
    saveForm(form) {
        console.log(form);
    }

    render() {
        const { classes } = this.props;

        return (
            <Layout>
              <Grid item xs>
                <Paper className={classes.root} elevation={1}>
                    <CreateForm
                        saveForm={this.saveForm}>
                    </CreateForm>
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
}

export default withStyles(styles)(Index);
