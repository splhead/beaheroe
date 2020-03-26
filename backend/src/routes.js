import express from "express";
import ONGController from "./controllers/ONGController";
import IncidentController from "./controllers/IncidentController";
import ProfileController from "./controllers/ProfileController";
import SessionController from "./controllers/SessionController";

const routes = express.Router();

routes.post("/sessions", SessionController.store);

routes.get("/incidents", IncidentController.index);
routes.post("/incidents", IncidentController.store);
routes.delete("/incidents/:id", IncidentController.delete);

routes.get("/profile", ProfileController.index);

routes.post("/ongs", ONGController.store);
routes.get("/ongs", ONGController.index);

export default routes;
