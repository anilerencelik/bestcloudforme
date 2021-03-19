import whoami from './whoami';

const AppRoutes = (app) => {
    app.use(whoami.routePrefix, [], whoami.route());
}

export default AppRoutes;
