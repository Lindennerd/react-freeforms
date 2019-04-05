import Grid from '@material-ui/core/Grid';

const Layout = props => (
    <div>
        <style jsx global>
            {` body { 
                background-color: #eee;
                padding: 0 2em 0 2em;
            } `}
        </style>
            
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" />
        <Grid container spacing={16} >
            {props.children}
        </Grid>
    </div>
)

export default Layout;