interface ImportMetaEnv {
  readonly VITE_API_URL: string
  readonly VITE_API_PORT: string
  readonly VITE_API_VERSION: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
