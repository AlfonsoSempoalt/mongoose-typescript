"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.set('port', 3000);
app.get('/user', (req, res) => {
    res.send({
        name: 'user',
        password: 'password',
    });
});
app.listen(app.get('port'), () => {
    console.log(`listening on port ${app.get('port')}`);
});
//middleware
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
