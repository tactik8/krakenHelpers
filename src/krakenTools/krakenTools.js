import { KrTimer } from './krakenTimer/krakenTimer.js';
import { KrCache } from './krakenCache/krakenCache.js';
import { KrStorage } from './krakenStorage/krakenStorage.js';
import { KrChatGPT } from './krakenChatGpt/krakenChatGpt.js';


export const krakenTools = {
    KrTimer: KrTimer,
    KrCache: KrCache,
    KrStorage: KrStorage,
    KrChatGPT: KrChatGPT,
}