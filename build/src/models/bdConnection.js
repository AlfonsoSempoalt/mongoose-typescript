"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const connectbd = () => {
    const URL = 'mongodb://localhost:27017';
    return mongoose_1.default.connect(URL);
};
exports.default = connectbd;
