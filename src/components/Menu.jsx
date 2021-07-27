import { AppBar, Badge, IconButton, makeStyles, Toolbar, Typography } from "@material-ui/core";
import { Store, ShoppingCart } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

function Menu() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" href="/">
                        <Store />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        Loja
                    </Typography>
                    <IconButton color="inherit" href="/carrinho">
                        <Badge badgeContent={4} color="secondary">
                            <ShoppingCart />
                        </Badge>
                    </IconButton>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Menu