export const OktaConfig = {
    clientId: '0oa7nav4e4E5WL5Vb5d7',
    issuer: 'https://dev-19092266.okta.com/oauth2/default',
    redirectUri: 'http://localhost:3000/login/callback',
    scopes: ['openid', 'profile', 'email'],
    pkce: true,
    disableHttpsChecks: true
}