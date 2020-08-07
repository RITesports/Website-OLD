type Twttr = {
  widgets: {
    /* eslint-disable @typescript-eslint/no-explicit-any */
    // TODO: actually type props
    createShareButton: (...props: any) => Promise<HTMLElement>;
    createFollowButton: (...props: any) => Promise<HTMLElement>;
    createHashtagButton: (...props: any) => Promise<HTMLElement>;
    createMentionButton: (...props: any) => Promise<HTMLElement>;
    createTweet: (...props: any) => Promise<HTMLElement>;
    createTimeline: (...props: any) => Promise<HTMLElement>;
  }
};

declare global {
  interface Window {
    twttr: {
      ready: (callbackfn: (twttr: Twttr) => void) => void
    }
  }
}

export { default } from './TwitterTimeline';
