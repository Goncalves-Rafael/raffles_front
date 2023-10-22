import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';

import Alert from '@mui/material/Alert';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';


import { drawRaffle, seenRaffle } from '../services/rafflesService'


export default function RaffleAdmin () {
    const [participants, setParticipans] = useState([]);
    const [message, setMessage] = useState('');
    const routeParams = useParams();

    useEffect(() => {
        seenRaffle(routeParams.id)
            .then(response => {
                setParticipans(response.data)
            })
    }, []);

    const triggerDrawRaffle = () => {
        drawRaffle(routeParams.id)
            .then(response => {
                setMessage(response.message)
            })
    }

    return <TableContainer component={Paper}>
    {
        message.length > 0 &&
        <Alert severity="success">{message}</Alert>
    }
    <Table sx={{ minWidth: 650 }} aria-label="caption table">
      <caption>
        Lista dos participantes e se visualizaram ou não o resultado do sorteio
        <Button onClick={triggerDrawRaffle}>Sortear</Button>
      </caption>
      <TableHead>
        <TableRow>
          <TableCell colSpan={3}>Participante</TableCell>
          <TableCell align="right">Visualizou</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {participants.map((row) => (
          <TableRow key={row.name}>
            <TableCell component="th" scope="row" colSpan={3}>
              {row.name}
            </TableCell>
            <TableCell align="right">
                <Avatar>
                    {row.seen ? <VisibilityIcon /> : <VisibilityOffIcon />}
                </Avatar>    
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>;
}