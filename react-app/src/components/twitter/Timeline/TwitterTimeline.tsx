import React, { useEffect, useRef } from 'react';

type BaseProps = {
  noHeader?: boolean;
  noFooter?: boolean;
  noBorders?: boolean;
  transparent?: boolean;
  noScrollbar?: boolean;

  height?: number;

  tweetLimit?: number;

  borderColor?: string;

  ariaPolite?: 'polite' | 'assertive' | 'rude',
};

type Profile =
  | { sourceType: 'profile', screenName: string }
  | { sourceType: 'profile', userId: string };

type Likes =
  | { sourceType: 'likes', screenName: string }
  | { sourceType: 'likes', userId: string };

type List =
  | { sourceType: 'list', ownerScreenName: string, slug: string }
  | { sourceType: 'list', id: string };

type Collection = { sourceType: 'collection', id: string };

type URL = { sourceType: 'url', url: string };

type Props = (Profile | Likes | List | Collection | URL) & BaseProps;
const TwitterTimeline: React.FC<Props> = ({
  noHeader = false, noFooter = false, noBorders = false, transparent = false, noScrollbar = false, height, tweetLimit, borderColor, ariaPolite, ...rest
}) => {
  const twitterTimeline = useRef<HTMLDivElement>(null);

  const getCalculatedHeight = () => {
    if (twitterTimeline.current && twitterTimeline.current.parentElement) {
      const style = getComputedStyle(twitterTimeline.current.parentElement);

      const refHeight = parseInt(style.getPropertyValue('height'), 10) || 0;
      const refpaddingTop = parseInt(style.getPropertyValue('padding-top'), 10) || 0;
      const refpaddingBottom = parseInt(style.getPropertyValue('padding-bottom'), 10) || 0;

      const calculated = refHeight - refpaddingTop - refpaddingBottom;

      return refHeight < calculated ? refHeight : calculated;
    }

    return 0;
  };

  useEffect(() => {
    if (twitterTimeline.current) {
      window.twttr.ready((twttr) => {
        twttr.widgets.createTimeline(
          rest,
          twitterTimeline.current,
          {
            chrome: `${noHeader ? 'noheader ' : ''}${noFooter ? 'nofooter ' : ''}${noBorders ? 'noborders ' : ''}${transparent ? 'transparent ' : ''}${noScrollbar ? 'noscrollbar ' : ''}`.trim(),
            height: height || getCalculatedHeight() || 600,
            ...tweetLimit && (1 <= tweetLimit && tweetLimit <= 20) && { tweetLimit },
            ...borderColor && { borderColor },
            ...ariaPolite && { ariaPolite },
          },
        ).catch(() => { });
      });
    }
  }, [noHeader, noFooter, noBorders, transparent, noScrollbar, height, tweetLimit, borderColor, ariaPolite, rest]);

  return (
    <div ref={twitterTimeline} />
  );
};

export default TwitterTimeline;
