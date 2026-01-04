/// <reference types="vite/client" />

interface ImportMetaEnv {
  /**
   * Required for initializing the Facebook SDK
   */
  readonly VITE_FACEBOOK_APP_ID: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}