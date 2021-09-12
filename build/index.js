"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _dotenv = require("dotenv");

var _models = _interopRequireDefault(require("./db/models"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _morgan = _interopRequireDefault(require("morgan"));

var _cors = _interopRequireDefault(require("cors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

(0, _dotenv.config)();
var app = (0, _express["default"])();
var PORT = process.env.PORT || 2000;
app.use(_bodyParser["default"].json());
app.use(_bodyParser["default"].urlencoded({
  extended: false
}));
app.use((0, _cors["default"])());
app.use((0, _morgan["default"])("dev")); // app.use(router)

app.get('/', function (req, res) {
  res.status(200).json({
    message: 'Welcome to Smart Attendance '
  });
});
app.use(function (req, res) {
  res.status(404).json({
    error: 'route not found'
  });
});
app.use(function (error, req, res, next) {
  res.status(500).json({
    error: error.message,
    next: next
  });
});

_models["default"].sequelize.sync({
  alter: false
}).then(function () {
  console.log('Database Connected!');
  app.listen(PORT, function () {
    console.log("Server listening on port: ".concat(PORT));
  });
});

var _default = app;
exports["default"] = _default;
//# sourceMappingURL=index.js.map