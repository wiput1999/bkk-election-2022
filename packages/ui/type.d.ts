export {};

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'ui-navbar': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      >;
    }
  }
}
