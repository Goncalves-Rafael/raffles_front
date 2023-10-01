import { MOCK_CREATE_RAFFLE } from './mockResponses';

export {
    createRaffle
};


const createRaffle = (raffleName) => {
    console.log(`Creating new raffle with name '${raffleName}'`);
    return new Promise((res, rej) => {
        res(MOCK_CREATE_RAFFLE);
    });
};