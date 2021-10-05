"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Auth_1 = require("../authentication/Auth");
const { createTask, uploadFileCloudinary, updateTask } = require("../controllers/tasks_controller");
const router = (0, express_1.Router)();
router.post("/create", Auth_1.authorization, createTask);
// router.delete("/delete/:id", authorization, deleteTask);
// router.get("/getTasks", authorization, getAllTasks);
router.post("/upload", Auth_1.authorization, uploadFileCloudinary);
router.put("/update/:task", Auth_1.authorization, updateTask);
exports.default = router;
