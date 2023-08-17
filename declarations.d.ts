declare module "react" {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}
