import * as React from 'react';
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

import { createRaffle } from '../services/rafflesService';

export default function CreateSecretSanta() {
  const handleMouseDown = (event) => {
    event.preventDefault();
  };

  const [ raffle, setRaffle ] = React.useState({});
  const [ raffleName, setRaffleName ] = React.useState('');
  let isRaffleReady = false;
  if (raffle != null && raffle.data != null) {
    isRaffleReady = true;
  }
  
  const saveRaffle = (ev) => {
    ev.preventDefault();
    createRaffle(raffleName)
      .then(setRaffle);
  }

  const toClipBoard = (text) => {navigator.clipboard.writeText(text)}

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
            raffle.message &&
              <Alert severity="success">{raffle.message}</Alert>
          }
          <Typography variant="body2" color="text.secondary">
            Insira um nome para criar um novo amigo oculto e em seguida envie o link para os convidados participarem.
          </Typography>
          <TextField sx={{ maxWidth: "80%", m: "auto", mt: 3 }} id="standard-basic" label="Nome do grupo" variant="standard" 
            onInput={e => setRaffleName(e.target.value)}
            value={raffleName}
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
          <Button onClick={saveRaffle} disabled={isRaffleReady} variant="contained" color="primary">Criar</Button>
        </CardActions>
      </Card>

      <Card sx={{ m: "auto", mt: 3, width: "100%" }} >
        <CardContent>
          {/* URL para o administrador do amigo oculto */}
          <FormControl sx={{ m: 1, width: "100%" }} variant="outlined" disabled >
            <InputLabel htmlFor="outlined-adornment-password">URL Admin</InputLabel>
            <Input
              type='text'
              variant="standard"
              disabled
              value={isRaffleReady ? raffle.data['admin_link'] : ''}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="copy url"
                    onClick={() => toClipBoard(isRaffleReady ? raffle.data['admin_link'] : '')}
                    onMouseDown={handleMouseDown}
                    edge="end"
                  >
                    <ContentCopyIcon />
                  </IconButton>
                </InputAdornment>
              }
            />
            <FormHelperText>
              Copie e salve essa URL para gerenciar o amigo oculto
            </FormHelperText>
          </FormControl>

          {/* URL para os convidados se registrarem no amigo oculto */}
          <FormControl sx={{ m: 1, width: "100%" }} variant="outlined" disabled fullWidth>
            <InputLabel htmlFor="outlined-adornment-password">URL Convite</InputLabel>
            <Input
              type='text'
              variant="standard"
              disabled
              value={isRaffleReady ? raffle.data['register_link'] : ''}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="copy url"
                    onClick={() => toClipBoard(isRaffleReady ? raffle.data['register_link'] : '')}
                    onMouseDown={handleMouseDown}
                    edge="end"
                  >
                    <ContentCopyIcon />
                  </IconButton>
                </InputAdornment>
              }
            />
            <FormHelperText>
              Copie essa URL e envie para que os convidados se registrem para o amigo oculto
            </FormHelperText>
          </FormControl>
        </CardContent>
      </Card>
    </Box>
  );
}
