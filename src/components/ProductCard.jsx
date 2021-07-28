import { useEffect, useState } from 'react';
import { Button, Card, CardMedia, CardActions, CardContent, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { AddCircle, RemoveCircle } from '@material-ui/icons';
import { useCart } from '../context/CartContext';

const useStyles = makeStyles(() => ({
  product: {
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

function ProductCard({ product }) {
  const classes = useStyles();
  const { cartData, changeCartData } = useCart();
  const [inCart, setInCart] = useState(false);

  useEffect(() => {
    setInCart(cartData.find(element => element.id === product.id));
  }, [])

  const processProduct = () => {
    const newData = [];

    if (inCart) {
      cartData.forEach(item => {
        if (item.id !== product.id) newData.push(item);
      })
      changeCartData(newData);
    } else {
      product.quantity = 1;
      product.total = product.price;
      changeCartData([...cartData, product]);
    }

    setInCart(!inCart);
  }

  return (
    <Grid item key={product.id} xs={12} sm={6} md={4}>
      <Card className={classes.product}>
        <CardMedia
          className={classes.cardMedia}
          image="https://picsum.photos/200/300"
          // image={product.image}
          title="Imagem do produto"
        />
        <CardContent className={classes.cardContent}>
          <Typography gutterBottom variant="h5" component="h2">
            {product.name}
          </Typography>
          <Typography variant="h6" component="h3">
            Preço: {
              new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(product.price)
            }
          </Typography>
          <Typography>
            Estoque: {product.stock}
          </Typography>
        </CardContent>
        <CardActions>

          <Button
            variant="contained"
            size="small"
            color={inCart ? "secondary" : "primary"}
            endIcon={
              inCart ? <RemoveCircle className={classes.icon} /> :
                <AddCircle className={classes.icon} />
            }
            onClick={processProduct}
          >
            {inCart ? 'Remover' : 'Adicionar'}
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}

export default ProductCard