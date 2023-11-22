import * as React from 'react';
import { useParams } from "react-router-dom";
import Alert from '@mui/material/Alert';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import {
  Box,
  Card,
  FormControl,
  FormHelperText,
  InputLabel,
  Input,
  IconButton,
  InputAdornment
} from '@mui/material';

import { registerParticipantIntoRaffle } from '../services/rafflesService'

import { INSTRUCTIONS } from '../config/constants';

import HelpModal from './HelpModal';

export default function CreateSecretSanta() {
  const handleMouseDown = (event) => {
    event.preventDefault();
  };

  const [ raffleRegisterResponse, setRaffleRegisterResponse ] = React.useState({});
  const [ participantName, setParticipantName ] = React.useState('');
  const routeParams = useParams();

  let isRaffleReady = false;
  if (raffleRegisterResponse != null && raffleRegisterResponse.data != null) {
    isRaffleReady = true;
  }
  
  const registerIntoRaffle = (ev) => {
    ev.preventDefault();
    registerParticipantIntoRaffle(routeParams.id, participantName)
      .then(registerResponse => {
        setRaffleRegisterResponse(registerResponse.data);
      });
  }

  const toClipBoard = (text) => {navigator.clipboard.writeText(text)}
  
  const baseUrl = window.location.href.split('/#/')[0]
  const getCheckDrawLink = (id) => `${baseUrl}/#/raffles/${id}/see`

  return (
    <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        p: 1,
        m: 1,
        bgcolor: 'background.paper',
        borderRadius: 1,
      }}
    >
      <Card sx={{ m: "auto", mt: 3, width: "100%" }}>
        <CardContent>
          {
            isRaffleReady &&
              <Alert severity="success">{raffleRegisterResponse.message}</Alert>
          }
          <Typography variant="body2" color="text.secondary">
            Amigo oculto de id {routeParams.id}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Insira seu nome abaixo para se registrar no amigo oculto
          </Typography>
          <TextField sx={{ maxWidth: "80%", m: "auto", mt: 3 }} id="standard-basic" label="Seu nome" variant="standard" 
            onInput={e => setParticipantName(e.target.value)}
            value={participantName}
          />
        </CardContent>
        <CardActions sx={{
              display: 'flex',
              justifyContent: 'space-around',
              p: 1,
              m: 1,
              bgcolor: 'background.paper',
              borderRadius: 1,
            }}>
          <Button onClick={registerIntoRaffle} disabled={isRaffleReady} variant="contained" color="primary">Registrar</Button>
          <HelpModal description={INSTRUCTIONS.INVITE.description} instructions={INSTRUCTIONS.INVITE.tips}/>
        </CardActions>
      </Card>

      <Card sx={{ m: "auto", mt: 3, width: "100%" }} >
        <CardContent>
          {/* URL para o participante acompanhar o sorteio do amigo oculto */}
          <FormControl sx={{ m: 1, width: "100%" }} variant="outlined" disabled >
            <InputLabel htmlFor="outlined-adornment-password">URL do Participante</InputLabel>
            <Input
              type='text'
              variant="standard"
              disabled
              value={isRaffleReady ? getCheckDrawLink(raffleRegisterResponse.data['id']) : ''}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="copy url"
                    onClick={() => toClipBoard(isRaffleReady ? getCheckDrawLink(raffleRegisterResponse.data['id']) : '')}
                    onMouseDown={handleMouseDown}
                    edge="end"
                  >
                    <ContentCopyIcon />
                  </IconButton>
                </InputAdornment>
              }
            />
            <FormHelperText>
              Copie e salve essa URL para acompanhar o sorteio do amigo oculto
            </FormHelperText>
          </FormControl>
        </CardContent>
      </Card>
    </Box>
  );
}
