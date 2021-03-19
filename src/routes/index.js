import whoami from './whoami';
import alert from './alert';

const AppRoutes = (app) => {
    app.use(whoami.routePrefix, [], whoami.route());
    app.use(alert.routePrefix, [], alert.route());
}

export default AppRoutes;
