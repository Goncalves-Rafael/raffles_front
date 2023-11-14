import { MOCK_CREATE_RAFFLE, MOCK_STATUS_RAFFLE, MOCK_DRAW_RAFFLE, MOCK_REGISTER_RAFFLE, MOCK_CHECK_RAFFLE, MOCK_UPDATE_PARTICIPATION }
    from './mockResponses';

const createRaffle = (raffleName) => {
    console.log(`Creating new raffle with name '${raffleName}'`);
    return new Promise((res, rej) => {
        res(MOCK_CREATE_RAFFLE);
    });
};

const seenRaffle = (raffleId) => {
    console.log(`Retrieving participants from raffle with id '${raffleId}'`);
    return new Promise((res, rej) => {
        res(MOCK_STATUS_RAFFLE);
    });
};

const drawRaffle = (raffleId) => {
    console.log(`Drawing raffle with id '${raffleId}'`);
    return new Promise((res, rej) => {
        res(MOCK_DRAW_RAFFLE);
    });
};

const registerParticipantIntoRaffle = (raffleId, participantName) => {
    console.log(`Registering new participant with name '${participantName}' into raffle with id '${raffleId}'`);
    return new Promise((res, rej) => {
        res(MOCK_REGISTER_RAFFLE);
    });
};

const participantCheckDraw = (participantId) => {
    console.log(`Checking draw for participant with id '${participantId}'`);
    return new Promise((res, rej) => {
        res(MOCK_CHECK_RAFFLE);
    });
};

const updateParticipationIntoRaffle = (raffleId, participantId, participate) => {
    console.log(`Updating participant with id '${participantId}' into raffle with id '${raffleId} to value ${participate}'`);
    return new Promise((res, rej) => {
        res(MOCK_UPDATE_PARTICIPATION);
    });
};

export {
    createRaffle,
    drawRaffle,
    participantCheckDraw,
    registerParticipantIntoRaffle,
    seenRaffle,
    updateParticipationIntoRaffle
};