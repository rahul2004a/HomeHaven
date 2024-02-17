import { auth } from 'express-oauth2-jwt-bearer';

const jwtCheck = auth({
    audience: "http://localhost:8000",
    issuerBaseURL: "https://dev-84lq4qdikixm2nuq.us.auth0.comm",
    tokenSigningAlg: "RS256"
})

export default jwtCheck