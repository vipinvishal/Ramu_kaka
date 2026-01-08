
// Fix: Augment the existing NodeJS.ProcessEnv interface to avoid redeclaring the 'process' variable, which causes conflicts in environments where it is already defined.
declare namespace NodeJS {
  interface ProcessEnv {
    API_KEY: string;
    [key: string]: string | undefined;
  }
}
