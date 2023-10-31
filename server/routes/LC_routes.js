// const express = require("express");
// const lc_controller = require("../controller/LC_controller").default;
import express from "express";
import lc_controller from "../controller/LC_controller";
const router = express.Router();

// auth user
router.post("/auth", lc_controller.LC_auth);

export default "router";
