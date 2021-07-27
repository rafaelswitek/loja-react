import { Container, Grid, makeStyles } from "@material-ui/core";
import ProductCard from "../components/ProductCard";

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

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function ProductList() {
    const classes = useStyles();
    return (
        <Container className={classes.cardGrid} maxWidth="md">
            <Grid container spacing={4}>
                {cards.map((card) => (
                    <ProductCard card={card} img="http://lorempixel.com/640/480/food" />
                ))}
            </Grid>
        </Container>
    );
}

export default ProductList;