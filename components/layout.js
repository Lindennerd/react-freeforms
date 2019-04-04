import Grid from '@material-ui/core/Grid';

const Layout = props => (
    <div>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" />
        <Grid container>
            {props.children}
        </Grid>
    </div>
)

export default Layout;