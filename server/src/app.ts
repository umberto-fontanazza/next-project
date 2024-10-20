import cors from "cors";
import express from "express";
import { StatusCodes } from "http-status-codes";
import morgan from "morgan";
import TemplateRouter from "./router/TemplateRouter";

const prefix = "/new-project/api";
const templatePrefix = `${prefix}/templates`;

const app = express();

// Middlewares
app.use(express.json());
app.use(morgan("dev"));

const corsOptions = {
  origin: "http://localhost:5173",
  optionsSuccessStatus: StatusCodes.ACCEPTED,
  credentials: true,
};
app.use(cors(corsOptions));

// Routes

const templateRouter = new TemplateRouter();
app.use(templatePrefix, templateRouter.router);

export default app;
