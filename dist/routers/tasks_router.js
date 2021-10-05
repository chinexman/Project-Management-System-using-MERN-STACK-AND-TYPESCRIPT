"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Auth_1 = require("../authentication/Auth");
const { createTask, uploadFileCloudinary, } = require("../controllers/tasks_controller");
const router = (0, express_1.Router)();
router.post("/create", Auth_1.authorization, createTask);
router.post("/upload/:taskid", Auth_1.authorization, uploadFileCloudinary);
exports.default = router;
