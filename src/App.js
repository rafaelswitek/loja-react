import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Store from '@material-ui/icons/Store';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import ProductCard from './components/ProductCard';
import { ShoppingCart } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  }
}));

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function App() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <Store className={classes.icon} />
          <Typography variant="h6" color="inherit" noWrap>
            Loja
          </Typography>
          <ShoppingCart className={classes.icon} />
        </Toolbar>
      </AppBar>
      <main>
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            {cards.map((card) => (
              <ProductCard card={card} img="http://lorempixel.com/640/480/food"/>
            ))}
          </Grid>
        </Container>
      </main>
    </React.Fragment>
  );
}

export default App;
