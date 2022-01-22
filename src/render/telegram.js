import React from 'react';
import { UrbanBotTelegram } from '@urban-bot/telegram';
import { render, Root } from '@urban-bot/core';
import dotenv from 'dotenv';
import { App } from '../App';

dotenv.config();

const { TELEGRAM_TOKEN, PORT } = process.env;
 
if (!TELEGRAM_TOKEN) {
    throw new Error('Provide TELEGRAM_TOKEN to .env https://core.telegram.org/bots#6-botfather');
}

const urbanBotTelegram = new UrbanBotTelegram({
    token: TELEGRAM_TOKEN,
    isPolling: true,
});

render(
    <Root bot={urbanBotTelegram} port={PORT ? Number(PORT) : undefined} isNewMessageEveryRender={false}>
        <App />
    </Root>,
    () => console.log('telegram bot has started'),
);
