import { useEffect, useState } from "react";
import { Container, Grid, makeStyles } from "@material-ui/core";
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
    }
}));

function ProductList() {
    const classes = useStyles();
    const [products, setProduct] = useState([]);
    useEffect(() => {
        get(setProduct)
    }, [])
    return (
        <Container className={classes.cardGrid} maxWidth="md">
            <Grid container spacing={4}>
                {products.map((product) => (
                    <ProductCard product={product} />
                ))}
            </Grid>
        </Container>
    );
}

export default ProductList;