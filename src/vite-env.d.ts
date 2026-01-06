/// <reference types="vite/client" />

// CSS Modules の型定義
declare module '*.module.css' {
    const classes: { readonly [key: string]: string };
    export default classes;
}
