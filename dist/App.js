"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
const react_1 = __importStar(require("react"));
const core_1 = require("@urban-bot/core");
const DELETE_TODOS_MODE = 'DELETE_TODOS_MODE';
const COMPLETE_TODOS_MODE = 'COMPLETE_TODOS_MODE';
function TodoList() {
    const [mode, setMode] = react_1.default.useState(COMPLETE_TODOS_MODE);
    const [todos, setTodos] = (0, react_1.useState)([]);
    function addTodo(text) {
        const newTodo = { text, id: Math.random(), isCompleted: false };
        setTodos([...todos, newTodo]);
    }
    function deleteTodo(deletedId) {
        const newTodos = todos.filter(({ id }) => id !== deletedId);
        setTodos(newTodos);
    }
    function toggleTodo(toggledId) {
        const newTodos = todos.map((todo) => {
            if (todo.id === toggledId) {
                return {
                    ...todo,
                    isCompleted: !todo.isCompleted,
                };
            }
            return todo;
        });
        setTodos(newTodos);
    }
    function toggleMode() {
        setMode(mode === DELETE_TODOS_MODE ? COMPLETE_TODOS_MODE : DELETE_TODOS_MODE);
    }
    function clickTodo(id) {
        if (mode === DELETE_TODOS_MODE) {
            deleteTodo(id);
        }
        else {
            toggleTodo(id);
        }
    }
    (0, core_1.useText)(({ text }) => {
        addTodo(text);
    });
    if (todos.length === 0) {
        return react_1.default.createElement(core_1.Text, null, "Todo list is empty");
    }
    const title = todos.map((todo) => (react_1.default.createElement(react_1.default.Fragment, null,
        todo.isCompleted ? react_1.default.createElement("s", null, todo.text) : todo.text,
        react_1.default.createElement("br", null))));
    const todosButtons = todos.map(({ text, id }) => (react_1.default.createElement(core_1.Button, { key: id, onClick: () => clickTodo(id) }, text)));
    return (react_1.default.createElement(core_1.ButtonGroup, { title: title, maxColumns: 3 },
        react_1.default.createElement(core_1.Button, { key: mode, onClick: toggleMode }, mode === DELETE_TODOS_MODE ? 'Delete mode' : 'Complete mode'),
        todosButtons));
}
const App = () => {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(core_1.Text, null, "Welcome to todo list. Type your new todo."),
        react_1.default.createElement(TodoList, null)));
};
exports.App = App;
//# sourceMappingURL=App.js.map