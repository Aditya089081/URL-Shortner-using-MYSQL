import express from "express";
import {
  renderHome,
  handleShortner,
  handleRedirect,
} from "../controller/shortnerController.js";

const router = express.Router();
router.get("/", renderHome);
router.post("/shorten", handleShortner);
router.get("/:shortId", handleRedirect);

export default router;
