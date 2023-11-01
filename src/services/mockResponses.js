
const MOCK_CREATE_RAFFLE = {
	"message": "sorteio registrado com sucesso. Agora encaminhe o link abaixo para os participantes se cadastrarem",
	"data": {
		"id": "139a8846c-2a6f-4602-9176-79ee4e5e3059",
		"register_link": "http://localhost:3000/raffles/139a8846c-2a6f-4602-9176-79ee4e5e3059/register",
		"admin_link": "http://localhost:3000/raffles/139a8846c-2a6f-4602-9176-79ee4e5e3059/admin"
	}
};

const MOCK_REGISTER_RAFFLE = {
	"message": "participante cadastrado com sucesso. Nolink abaixo você pode ver o seu amigo oculto depois que o sorteio for realizado",
	"data": {
		"id": "5a6a0b4c-2a6f-4602-9176-79ee4e5e3059",
		"result_link": "http://localhost:3000/raffles/5a6a0b4c-2a6f-4602-9176-79ee4e5e3059/see"
	}
};

const MOCK_CHECK_RAFFLE = {
	"message": "seu amigo oculto é: Fulano"
};

const MOCK_DRAW_RAFFLE = {
	"message": "sorteio realizado com sucesso. Agora você pode ver os participantes que já viram seus amigos ocultos e os que ainda não viram",
};

const MOCK_STATUS_RAFFLE = {
	"message": "participantes que já viram seus amigos ocultos",
	"data": {
		"id": "139a8846c-2a6f-4602-9176-79ee4e5e3059",
		"name": "Nome do sorteio",
		"participants": [
		  {
			"id": "5a6a0b4c-2a6f-4602-9176-79ee4e5e3059",
			"name": "Nome do participante",
			"participate": true,
			"seen": true,
		  },
		  {
			"id": "5a6a0b4c-2a6f-4602-9176-79ee4e5f3058",
			"name": "Nome do participante dois",
			"participate": false,
			"seen": false,
		  }
		]
	}
};

const MOCK_UPDATE_PARTICIPATION = {
    "message": "participação atualizado com sucesso"
};

export {
	MOCK_CHECK_RAFFLE,
	MOCK_CREATE_RAFFLE,
	MOCK_DRAW_RAFFLE,
	MOCK_REGISTER_RAFFLE,
	MOCK_STATUS_RAFFLE,
	MOCK_UPDATE_PARTICIPATION,
};
