import { useState } from 'react';
import { ListItem, ListItemAvatar, Avatar, ListItemText, ListItemSecondaryAction, IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useCart } from '../context/CartContext';
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

const useStyles = makeStyles((theme) => ({
  product: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  large: {
    width: theme.spacing(10),
    height: theme.spacing(10),
    marginRight: 15
  },
}));

function ProductCart({ product }) {
  const classes = useStyles();
  const { cartData, changeCartData } = useCart();
  const [quantity, setQuantity] = useState(product.quantity);
  const [total, setTotal] = useState(product.total);

  const removeProduct = () => {
    const newData = [];
    cartData.forEach(item => {
      if (item.id !== product.id) newData.push(item);
    })
    changeCartData(newData);
  }

  const addQuantity = () => {
    product.quantity += 1;
    changeProduct();
  }

  const removeQuantity = () => {
    product.quantity -= 1
    if (product.quantity == 0) {
      removeProduct();
    } else {
      changeProduct();
    }
  }

  const changeProduct = () => {
    product.total = product.quantity * product.price;
    setQuantity(product.quantity);
    setTotal(product.total);
    changeCartData(cartData);
  }

  return (
    <ListItem>
      <ListItemAvatar>
        <Avatar className={classes.large} src={product.image} />
      </ListItemAvatar>
      <ListItemText
        primary={product.name}
        secondary={
          new Intl.NumberFormat('pr-BR', { style: 'currency', currency: 'BRL' }).format(product.price)
        }
      />
      <ListItemText
        primary={
          `TOTAL: ${new Intl.NumberFormat('pr-BR', { style: 'currency', currency: 'BRL' }).format(total)}`
        }
        secondary={`Quantidade: ${quantity}`}
      />
      <ListItemSecondaryAction>
        <IconButton aria-label="delete" color="primary" onClick={addQuantity}>
          <AddIcon />
        </IconButton>
        <IconButton aria-label="delete" color="secondary" onClick={removeQuantity}>
          <RemoveIcon />
        </IconButton>
        <IconButton edge="end" aria-label="delete" color="default" onClick={removeProduct}>
          <DeleteIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
}

export default ProductCart