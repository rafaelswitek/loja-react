import { Card, CardContent, List, Typography } from "@material-ui/core";
import { useCart } from '../context/CartContext';
import ProductCart from "../components/ProductCart";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    ...theme.typography.button,
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(1),
  },
}));

function Cart() {
  const classes = useStyles();
  const { cartData, amount } = useCart();

  return (
    <List>
      {
        cartData.length > 0 ?
          cartData.map((product) => (
            <ProductCart key={product.id} product={product} />
          ))
          :
          <Typography className={classes.root}>Nenhum produto foi adicionado ainda!</Typography>
      }

      <Card>
        <CardContent>
          <Typography color="textSecondary" gutterBottom>
            TOTAL DOS PRODUTOS
          </Typography>
          <Typography variant="h5" component="h2">
            {new Intl.NumberFormat('pr-BR', { style: 'currency', currency: 'BRL' }).format(amount)}
          </Typography>
        </CardContent>
      </Card>
    </List >
  );
}

export default Cart;