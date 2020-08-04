import React, {
  useCallback, useEffect, useRef, useState,
} from 'react';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import ChevronLeftIcon from 'mdi-material-ui/ChevronLeft';
import ChevronRightIcon from 'mdi-material-ui/ChevronRight';
import RecordIcon from 'mdi-material-ui/Record';

const useStyles = makeStyles({
  carousel: {
    display: 'flex',
    flexDirection: 'column',
  },

  content: {
    height: '100%',

    flex: 1,
    minHeight: 0,

    position: 'relative',
  },

  nav: {
    height: '100%',
    width: 'calc(100% / 12)',

    position: 'absolute',
    top: 0,

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  previous: {
    left: 0,
  },
  next: {
    right: 0,
  },

  indicators: {
    display: 'flex',
    justifyContent: 'center',
  },
});

type Props = {
  indicators?: boolean;

  interval?: number;

  className?: string;
  children: React.ReactNodeArray;
};
const Carousel: React.FC<Props> = ({
  indicators = false, interval = 5000, className = '', children,
}) => {
  const classes = useStyles();

  const [childIndex, setChildIndex] = useState(0);

  const next = useCallback(() => setChildIndex((pIndex) => (pIndex + 1) % children.length), [children]);
  const previous = useCallback(() => setChildIndex((pIndex) => ((pIndex - 1) + children.length) % children.length), [children]);

  const intervalRef = useRef<NodeJS.Timer | null>(null);
  const start = useCallback(() => {
    if (intervalRef.current === null) {
      intervalRef.current = setInterval(next, interval);
    }
  }, [interval, next]);
  const stop = useCallback(() => {
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);
  useEffect(() => {
    start();

    return () => stop();
  }, [start, stop]);

  return (
    <div className={`${className} ${classes.carousel}`} onMouseEnter={stop} onMouseLeave={start}>
      <div className={classes.content}>
        {children[childIndex]}
        <div className={`${classes.nav} ${classes.previous}`}>
          <IconButton color="primary" onClick={previous}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <div className={`${classes.nav} ${classes.next}`}>
          <IconButton color="primary" onClick={next}>
            <ChevronRightIcon />
          </IconButton>
        </div>
      </div>
      {indicators && (
        <div className={classes.indicators}>
          {React.Children.map(children, (child, index) => (
            <IconButton color={index === childIndex ? 'primary' : 'secondary'} size="small" onClick={() => setChildIndex(index)}>
              <RecordIcon />
            </IconButton>
          ))}
        </div>
      )}
    </div>
  );
};

export default React.memo(Carousel);
