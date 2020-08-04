import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { createStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => createStyles({
  root: (props: { variant: 'primary' | 'secondary' }) => ({
    backgroundColor: theme.palette[props.variant].main,
    color: theme.palette[props.variant].contrastText,

    padding: theme.spacing(1, 3, 3),
  }),

  container: {
    height: `calc(100% + ${theme.spacing(1)}px)`,
  },

  content: {
    flex: 1,
    minHeight: 0,
  },
  contentPaper: {
    height: '100%',
    padding: theme.spacing(2),
  },
}));

type Props = {
  title: string;
  variant?: 'primary' | 'secondary';

  className?: string;
  children: React.ReactNode;
};
const Brick: React.FC<Props> = ({
  title, variant = 'primary', className = '', children,
}) => {
  const classes = useStyles({ variant });

  return (
    <Paper square elevation={0} className={`${classes.root} ${className}`}>
      <Grid container direction="column" spacing={1} className={classes.container}>
        <Grid item>
          <Typography variant="h4">{title}</Typography>
        </Grid>
        <Grid item className={classes.content}>
          <Paper elevation={0} className={classes.contentPaper}>
            {children}
          </Paper>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Brick;
