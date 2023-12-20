```
function verifyJWT(req, res, next) {

    const authHeader = req.headers.authorization;
    console.log('authHeader', authHeader);
    if (!authHeader) {
        return res.status(401).send('unauthorized access'); //ekhane message nai keno
    }

    const token = authHeader.split(' ')[1];
    console.log('token', token);
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, function (err, decoded) {
        if (err) {
            return res.status(403).send({ message: 'forbidden access' })
        }
        req.decoded = decoded;
        next();
    })

}
///// আমার কারিকুরি
function verifyToken(req, res, next) {
    const authHeader = req.headers.authorization;

    console.log('authHeader',authHeader);

    if (!authHeader) {
        return res.status(401).send('unauthorized access')

    }
    const token = authHeader.split(' ')[1];

    console.log('token by useing ##verifyToken::::::::', token);
    console.log('####process.env.ACCESS_TOKEN:::::::::::::,',process.env.ACCESS_TOKEN)

    jwt.verify(token, process.env.ACCESS_TOKEN, function (ভুল,  মেইল সহ iat,exp) {
        console.log('###verifyToken Function ###err[ভুল],decoded[ মেইল সহ iat,exp]::::::::::::',ভুল,'DECODED', মেইল সহ iat,exp);
        if (ভুল) { 
            return res.status(403).send({ message: 'From verifyToken:forbidden access' }) 
        }
        req.decoded =  মেইল সহ iat,exp;
        console.log('Final DECODED##',req.decoded);
        next()
    })
}
```
# Verify Admin
```
const verifyAdmin = async (req, res, next) => {
    const decodedEmail = req.decoded.email;
    const query = { email: decodedEmail };
    const user = await usersCollection.findOne(query);
        if (user?.role !== 'admin') {
            return res.status(403).send({ message: 'forbidden access' })
        }
    next();
}
```