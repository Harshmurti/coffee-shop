import React from 'react';
import { Link } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import Img from 'gatsby-image';

import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import { fluidObject } from '../utils';

const useStyles = makeStyles(theme => ({
  heroContainer: {
    justifyContent: 'center',
    textAlign: 'center',
    marginTop: 100,
  },
  bgHeroImg: {
    position: 'relative',
    color: theme.palette.text.primary,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    height: '60vh',
  },
  heroImg: {
    display: 'none',
  },
  heroOverlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,.3)',
  },
  heroContent: {
    position: 'relative',
    top: '50%',
    transform: 'translateY(-50%)',
    padding: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(6),
    },
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
}));

const Hero = ({ img }) => {
  const classes = useStyles();

  return (
    <Container maxWidth="lg" className={classes.heroContainer}>
      <BackgroundImage fluid={img} className={classes.bgHeroImg}>
        {/* Increase the priority of the hero background image */}
        <Img className={classes.heroImg} fluid={img} alt="Hero Image" />

        <div className={classes.heroOverlay} />

        <div className={classes.heroContent}>
          <Typography variant="h5" color="inherit" paragraph>
            Baking and decorating supplies
          </Typography>
          <Typography component="h1" variant="h3" color="inherit" gutterBottom>
            Because life is sweet
          </Typography>

          <div className={classes.heroButtons}>
            <Link to="/shop">
              <Button variant="contained" color="primary">
                Shop Now
              </Button>
            </Link>
          </div>
        </div>

        {/* </Paper> */}
      </BackgroundImage>
    </Container>
  );
};

Hero.propTypes = {
  img: fluidObject.isRequired,
};

export default Hero;
