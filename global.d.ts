import th from "./messages/th.json";

type Messages = typeof th;

declare global {
  // Use type safe message keys with `next-intl`
  interface IntlMessages extends Messages {}
}

namespace JSX {
  interface IntrinsicAttributes extends React.Attributes {
    id?: string;
    className?: string;
    style?: CSSProperties;
    onClick?: (...args: any) => any;
  }
}

namespace NodeJS {
  interface Global {
    document: Document;
    window: Window;
    navigator: Navigator;
    localStorage: Storage;
  }
}

declare module "*.svg";
declare module "*.png";
declare module "*.jpg";

type Override<T, U> = Pick<T, Exclude<keyof T, keyof U>> & U;
