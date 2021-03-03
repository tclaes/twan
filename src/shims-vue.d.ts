/* eslint-disable */
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module "apollo-link-prismic" {
  export function PrismicLink(args: {
      uri: string; 
      accessToken?: string;
    }): any;
}