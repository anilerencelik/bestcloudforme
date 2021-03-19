import express from 'express';

const route = () => {
    const router = new express.Router();

    router.route('/').get((req, res) => {
        const { firstname, lastname } = req.query;
        return res.json({ firstname: firstname || null, lastname: lastname || null });
    });
    return router;
}

export default {
    route,
    routePrefix: `/whoami`
}