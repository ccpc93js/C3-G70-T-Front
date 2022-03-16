
const {
    REACT_APP_CLIEN_ID,
    REACT_APP_PROJECT_ID,
    REACT_APP_AUTH_URI,
    REACT_APP_TOKEN_URI,
    REACT_APP_AUTH_PROVIDER_X509_CERT_URL,
    REACT_APP_CLIENT_SECRET,
    REACT_APP_REDIRECT_URIS,
    REACT_APP_JAVASCRIPT_ORIGINS
} = process.env

export const client_secret_google = {
    client_id: REACT_APP_CLIEN_ID,
    project_id: REACT_APP_PROJECT_ID,
    auth_uri: REACT_APP_AUTH_URI,
    token_uri: REACT_APP_TOKEN_URI,
    auth_provider_x509_cert_url: REACT_APP_AUTH_PROVIDER_X509_CERT_URL,
    client_secret: REACT_APP_CLIENT_SECRET,
    redirect_uris: REACT_APP_REDIRECT_URIS,
    javascript_origins: REACT_APP_JAVASCRIPT_ORIGINS
}