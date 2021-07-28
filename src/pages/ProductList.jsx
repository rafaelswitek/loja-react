import { useEffect, useState } from "react";
import { Backdrop, Container, Grid, makeStyles } from "@material-ui/core";
import CircularProgress from '@material-ui/core/CircularProgress';

import ProductCard from "../components/ProductCard";
import { get } from '../api'

const useStyles = makeStyles((theme) => ({
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
    },
}));

function ProductList() {
    const classes = useStyles();
    const [products, setProduct] = useState([]);
    const [open, setOpen] = useState(true);
    const handleToggle = () => {
        setOpen(!open);
    };

    useEffect(() => {
        get(setProduct, handleToggle)
    }, [])
    return (
        <Container className={classes.cardGrid} maxWidth="md">
            <Backdrop className={classes.backdrop} open={open} >
                <CircularProgress color="inherit" />
            </Backdrop>
            <Grid container spacing={4}>
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </Grid>
        </Container>
    );
}

export default ProductList;