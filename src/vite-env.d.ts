/// <reference types="vite/client" />

declare module '*?format=webp&w=800' {
  const src: string;
  export default src;
}

declare module '*?format=webp&w=400;800;1200&as=srcset' {
  const src: string;
  export default src;
}

declare module '*&as=srcset' {
  const src: string;
  export default src;
}

