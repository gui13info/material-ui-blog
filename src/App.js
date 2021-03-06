import './App.css';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: "#fff"
  }
}));

function App() {
  const classes = useStyles();

  return (
    <div className="App">
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" color="primary">
            Blog
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default App;
