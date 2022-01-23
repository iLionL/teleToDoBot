"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const telegram_1 = require("@urban-bot/telegram");
const core_1 = require("@urban-bot/core");
const dotenv_1 = __importDefault(require("dotenv"));
const App_1 = require("../App");
dotenv_1.default.config();
const { TELEGRAM_TOKEN, PORT } = process.env;
if (!TELEGRAM_TOKEN) {
    throw new Error('Provide TELEGRAM_TOKEN to .env https://core.telegram.org/bots#6-botfather');
}
const urbanBotTelegram = new telegram_1.UrbanBotTelegram({
    token: TELEGRAM_TOKEN,
    isPolling: true,
});
(0, core_1.render)(react_1.default.createElement(core_1.Root, { bot: urbanBotTelegram, port: PORT ? Number(PORT) : undefined, isNewMessageEveryRender: false },
    react_1.default.createElement(App_1.App, null)), () => console.log('telegram bot has started'));
//# sourceMappingURL=telegram.js.map