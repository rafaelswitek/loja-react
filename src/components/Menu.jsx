import { AppBar, CssBaseline, makeStyles, Toolbar, Typography } from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import Store from "@material-ui/icons/Store";
import { Fragment } from "react";

const useStyles = makeStyles((theme) => ({
    icon: {
        marginRight: theme.spacing(2),
    },
}));

function Menu() {
    const classes = useStyles();
    return (
        <Fragment>
            <CssBaseline />
            <AppBar position="relative">
                <Toolbar>
                    <Store className={classes.icon} />
                    <Typography variant="h6" color="inherit" noWrap>
                        Lojas
                    </Typography>
                    <ShoppingCart className={classes.icon} />
                </Toolbar>
            </AppBar>
        </Fragment>
    );
}

export default Menu