export const OktaConfig = {
    clientId: '<clientid>',
    issuer: 'https://<oktadevurl>/oauth2/default',
    redirectUri: 'http://localhost:3000/login/callback',
    scopes: ['openid', 'profile', 'email'],
    pkce: true,
    disableHttpsChecks: true
}