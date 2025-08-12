// View Transitions API types
declare global {
  interface Document {
    startViewTransition?: (callback: () => void) => {
      ready: Promise<void>;
    };
  }
}

export {};