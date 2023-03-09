import type { Application, Router } from "express";
import * as ROUTES from "../components";

const _routes: [string, Router][] = [["user", ROUTES.UserRouter]];

const routes = (app: Application) => {
    _routes.forEach(([path, controler]) => {
        app.use(`/api/v1/${path}`, controler);
    });
};

export default routes;  