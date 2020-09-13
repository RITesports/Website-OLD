import React from 'react';
import ReactPlayer from 'react-player';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { createStyles, makeStyles } from '@material-ui/core/styles';

import Brick from './Brick';
import {
  Banner_Home, Banner_Welcome_Back, Kitch_Holding_Keyboard, Merch_Casual, Merch_Sports,
} from '../../assets';
import Carousel from '../../components/Carousel';
import TwitterTimeline from '../../components/twitter/Timeline';

const useStyles = makeStyles((theme) => createStyles({
  banner: {
    height: theme.spacing(47),

    [theme.breakpoints.down('md')]: {
      height: theme.spacing(40),
    },
    [theme.breakpoints.down('sm')]: {
      height: theme.spacing(30),
    },
    [theme.breakpoints.down('xs')]: {
      height: theme.spacing(25),
    },
  },
  bannerImgHome: {
    height: '100%',
    width: '100%',

    objectFit: 'cover',
    objectPosition: 'left',
  },
  bannerImgWelcomeBack: {
    height: '100%',
    width: '100%',

    objectFit: 'cover',
    objectPosition: 'right',
  },

  brick: {
    height: theme.spacing(60),

    [theme.breakpoints.down('md')]: {
      height: theme.spacing(53),
    },
    [theme.breakpoints.down('sm')]: {
      height: theme.spacing(43),
    },
    [theme.breakpoints.down('xs')]: {
      height: theme.spacing(38),
    },
  },

  carousel: {
    height: '100%',
  },

  merchContainer: {
    height: '100%',
  },
  merchContent: {
    flex: 1,
    minHeight: 0,
  },
  merchImg: {
    height: '100%',
    width: '100%',

    objectFit: 'contain',
  },

  matchesContainer: {
    height: '100%',
  },

  aboutUs: {
    height: '100%',

    minHeight: theme.spacing(60),
    [theme.breakpoints.down('md')]: {
      minHeight: theme.spacing(53),
    },
    [theme.breakpoints.down('sm')]: {
      minHeight: theme.spacing(43),
    },
    [theme.breakpoints.down('xs')]: {
      minHeight: theme.spacing(38),
    },

    padding: theme.spacing(3),

    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.secondary.contrastText,
  },
  aboutUsContainer: {
    height: `calc(100% + ${theme.spacing(3)}px)`,
  },
  aboutUsImg: {
    height: '100%',
    width: '100%',

    objectFit: 'cover',

    borderRadius: theme.spacing(2),
  },
}));

const Home: React.FC = () => {
  const classes = useStyles();

  return (
    <Container disableGutters>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Carousel className={classes.banner}>
            <img src={Banner_Home} alt="Home Banner" className={classes.bannerImgHome} />
            <img src={Banner_Welcome_Back} alt="Welcome Back Banner" className={classes.bannerImgWelcomeBack} />
          </Carousel>
        </Grid>
        <Grid item xs={12} sm={7}>
          <Brick title="STREAM" variant="secondary" className={classes.brick}>
            <ReactPlayer url="https://www.twitch.tv/ritesports" height="100%" width="100%" />
          </Brick>
        </Grid>
        <Grid item xs={12} sm={5}>
          <Brick title="TWITTER" variant="secondary" className={classes.brick}>
            <TwitterTimeline sourceType="profile" screenName="RITesports" noHeader noFooter noBorders />
          </Brick>
        </Grid>
        <Grid item xs={12} sm={5}>
          <Brick title="MERCH" className={classes.brick}>
            <Carousel indicators className={classes.carousel}>
              <Link href="https://metathreads.com/collections/rit-esports" target="_blank" rel="noopener noreferrer" underline="none">
                <Grid container direction="column" spacing={2} alignItems="center" className={classes.merchContainer}>
                  <Grid item>
                    <Typography>SPORTS WEAR</Typography>
                  </Grid>
                  <Grid item className={classes.merchContent}>
                    <img src={Merch_Sports} alt="RIT Esports Sports Jersey" className={classes.merchImg} />
                  </Grid>
                </Grid>
              </Link>
              <Link href="https://teamstore.gtmsportswear.com/ritesports" target="_blank" rel="noopener noreferrer" color="secondary" underline="none">
                <Grid container direction="column" spacing={2} alignItems="center" className={classes.merchContainer}>
                  <Grid item>
                    <Typography>CASUAL WEAR</Typography>
                  </Grid>
                  <Grid item className={classes.merchContent}>
                    <img src={Merch_Casual} alt="RIT Esports T-Shirt With Logo" className={classes.merchImg} />
                  </Grid>
                </Grid>
              </Link>
            </Carousel>
          </Brick>
        </Grid>
        <Grid item xs={12} sm={7}>
          <Brick title="UPCOMING MATCHES" className={classes.brick}>
            <Grid container alignItems="center" justify="center" className={classes.matchesContainer}>
              <Typography variant="h3" align="center">Coming Soon!™</Typography>
            </Grid>
          </Brick>
        </Grid>
        <Grid item xs={12}>
          <Paper square elevation={0} className={classes.aboutUs}>
            <Grid container spacing={3} className={classes.aboutUsContainer}>
              <Grid item xs={12} sm={6}>
                <img src={Kitch_Holding_Keyboard} alt="RIT Esports Member Kitch Hugging His Keyboard Tenderly" className={classes.aboutUsImg} />
              </Grid>
              <Grid item xs={12} sm={6} container direction="column" justify="center" spacing={3}>
                <Grid item>
                  <Typography variant="h4">ABOUT US</Typography>
                </Grid>
                <Grid item>
                  <Typography>RIT Esports is a student run club on RIT&apos;s campus. We started under the Golisano College of Computing and Information Sciences, growing to become one of the largest clubs on campus. This growth is due to incredibly dedicated and passionate staff on our competitive teams, as well as in our support teams.</Typography>
                </Grid>
                <Grid item>
                  <Typography>We are one of the only collegiate esports clubs in the country to operate mimicking not only professional team management, staffed by students, but also in recreating broadcasting, community, development, and production departments within our program.</Typography>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Link href="https://forms.gle/6JsrhYJtyrR98WEq6" target="_blank" rel="noopener noreferrer">
            <Alert severity="info" icon={<TigerLogoColorIcon />} classes={{ icon: classes.alertIcon }} className={classes.alert}>
              <AlertTitle>Let us know what you think!</AlertTitle>
              Click here to send us feedback.
            </Alert>
          </Link>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
