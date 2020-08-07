declare global {
  interface Window {
    twttr: {
      widgets: {
        /* eslint-disable @typescript-eslint/no-explicit-any */
        // TODO: actually type these
        createShareButton: (...props: any) => void;
        createFollowButton: (...props: any) => void;
        createHashtagButton: (...props: any) => void;
        createMentionButton: (...props: any) => void;
        createTweet: (...props: any) => void;
        createTimeline: (...props: any) => void;
      }
    }
  }
}

export { default } from './TwitterTimeline';
