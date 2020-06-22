import React from "react";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { Grid, Paper, Typography } from "@material-ui/core";
import { container, useGridStyles, useStyles } from "./Card.styles";

const OutlinedCard = ({ cardContents }) => {
    // console.log("Inside card 1: ", cardContents);
    // cardContents.map((content) =>
    //     console.log("Inside card 2: ", content)
    // );
    // let values = Object.values(cardContents);
    // for (let index = 0; index < values.length; index++) {
    //     //console.log("Value: ", values[index]);
    //     console.log("Keys: ", Object.keys(values[index]));
    // }

    const classes = useStyles();
    const gridStyles = useGridStyles();

    return (
        <div style={container} >
            <Grid classes={gridStyles} container spacing={4} wrap={'nowrap'}>
                {cardContents.map((content) => (
                    < Grid item>
                        <Paper>
                            <CardActionArea className={classes.actionArea}>
                                <Card className={classes.card} variant="elevation">
                                    <CardContent className={classes.content}>
                                        <Typography className={classes.title} variant={'h2'}>
                                            {content.symbol}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small">Learn More</Button>
                                    </CardActions>
                                </Card>
                            </CardActionArea>
                        </Paper>
                    </Grid>
                ))}
            </Grid >
        </div >
    );
};

export default OutlinedCard;