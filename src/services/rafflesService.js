import axios from 'axios';

const BASE_URL = 'https://quemeutirei.com.br'

const getConfig = (token) =>  {
    return {
        headers: {
            'Authorization': 'Bearer ' + token
        }
    }
}

const createRaffle = (raffleName) => {
    console.log(`Creating new raffle with name '${raffleName}'`);
    return axios.post(`${BASE_URL}/raffles`, { name: raffleName }, getConfig(''))
};

const seenRaffle = (raffleId) => {
    console.log(`Retrieving participants from raffle with id '${raffleId}'`);
    return axios.get(`${BASE_URL}/raffles/${raffleId}`, getConfig(''))
};

const drawRaffle = (raffleId) => {
    console.log(`Drawing raffle with id '${raffleId}'`);
    return axios.put(`${BASE_URL}/raffles/${raffleId}/draw`, null, getConfig(''))
};

const registerParticipantIntoRaffle = (raffleId, participantName) => {
    console.log(`Registering new participant with name '${participantName}' into raffle with id '${raffleId}'`);
    return axios.post(`${BASE_URL}/raffles/${raffleId}/register`, { name: participantName }, getConfig(''))
};

const participantCheckDraw = (participantId) => {
    console.log(`Checking draw for participant with id '${participantId}'`);
    return axios.put(`${BASE_URL}/participants/${participantId}/see`, getConfig(''))
};

const updateParticipationIntoRaffle = (raffleId, participantId, participate) => {
    console.log(`Updating participant with id '${participantId}' into raffle with id '${raffleId} to value ${participate}'`);
    return axios.put(`${BASE_URL}/raffles/${raffleId}/participants/${participantId}/participation`, { participate }, getConfig(''))
};

export {
    createRaffle,
    drawRaffle,
    participantCheckDraw,
    registerParticipantIntoRaffle,
    seenRaffle,
    updateParticipationIntoRaffle
};