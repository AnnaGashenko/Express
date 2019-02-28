export const checkPass = () => (req, res, next) => {

    const pass = req.headers.authorization;

    if (pass === process.env.PASSWORD) {
        next();
    } else {
        res.sendStatus(401);
    }
};
