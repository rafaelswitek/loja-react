import { Fragment } from 'react';
import { Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { AddCircle, RemoveCircle } from '@material-ui/icons';
import ValueContext from '../context/cart';

const useStyles = makeStyles(() => ({
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  }
}));

function ProductCard({ card }) {
  const classes = useStyles();
  return (
    <Grid item key={card.id} xs={12} sm={6} md={4}>
      <Card className={classes.card}>
        <CardMedia
          className={classes.cardMedia}
          image={card.image}
          title="Imagem do produto"
        />
        <CardContent className={classes.cardContent}>
          <Typography gutterBottom variant="h5" component="h2">
            {card.name}
          </Typography>
          <Typography>
            Estoque: {card.stock}
          </Typography>
        </CardContent>
        <CardActions>
          <ValueContext.Consumer>
            {
              (options) => (
                <Fragment>
                  {
                    options.state.map((value) => {
                      return value.id
                    }).includes(card.id) ?
                      <Button
                        variant="contained"
                        size="small"
                        color="secondary"
                        endIcon={<RemoveCircle className={classes.icon} />}
                        onClick={() => {
                          let newState = options.state.filter(value => {
                            return value.id !== card.id
                          });
                          options.setState([...newState]);
                        }}
                      >
                        remover
                      </Button> :
                      <Button
                        variant="contained"
                        size="small"
                        color="primary"
                        endIcon={<AddCircle className={classes.icon} />}
                        onClick={() => {
                          let product = { ...card, quantity: 1 }
                          options.setState([...options.state, product]);
                        }}
                      >
                        adicionar
                      </Button>
                  }
                </Fragment>
              )
            }
          </ValueContext.Consumer>

        </CardActions>
      </Card>
    </Grid>
  );
}

export default ProductCard