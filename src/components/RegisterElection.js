import * as React from 'react';
import { useNavigate } from "react-router-dom";
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import {
  Box,
  Card,
} from '@mui/material';

import { registerElection } from '../services/electionService'
import { useAuth } from "../provider/AuthProvider";

export default function RegisterElection() {
  const [ nome, setNome ] = React.useState('');
  const [ descricao, setDescricao ] = React.useState('');
  const { token } = useAuth();
  const navigate = useNavigate();

  const goBack = () => {
    navigate('/admin/elections');
  };

  const registerNewElection = (ev) => {
    ev.preventDefault();
    registerElection(nome, descricao, token)
      .then(goBack);
  };

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
          <Typography variant="body2" color="text.secondary">
            Insira o nome e descrição para a nova eleição:
          </Typography>
          <TextField sx={{ maxWidth: "80%", m: "auto", mt: 3 }} id="standard-basic" label="Nome" variant="standard" 
            onInput={e => setNome(e.target.value)}
            value={nome}
          />
          <TextField sx={{ maxWidth: "80%", m: "auto", mt: 3 }} id="standard-basic" label="Descrição" variant="standard" 
            onInput={e => setDescricao(e.target.value)}
            value={descricao}
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
          <Button onClick={goBack} variant="contained" color="secondary">Voltar</Button>
          <Button onClick={registerNewElection}
            disabled={descricao.length == 0 || nome.length == 0} variant="contained" color="primary">Registrar</Button>
        </CardActions>
      </Card>
    </Box>
  );
}
