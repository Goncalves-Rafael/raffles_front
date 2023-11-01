import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';

import Alert from '@mui/material/Alert';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Paper from '@mui/material/Paper';
import Switch from '@mui/material/Switch';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';


import { drawRaffle, seenRaffle, updateParticipationIntoRaffle } from '../services/rafflesService'


export default function RaffleAdmin () {
    const [raffleData, setRaffleData] = useState({});
    const [message, setMessage] = useState('');
    const routeParams = useParams();

    const updateRaffleData = () => {
      seenRaffle(routeParams.id)
        .then(response => {
          console.log(response)
          setRaffleData(response.data)
        })
    }

    const triggerDrawRaffle = () => {
        drawRaffle(routeParams.id)
            .then(response => {
                setMessage(response.message)
            })
    }

    const updateParticipation = (participantId, participate) => {
      updateParticipationIntoRaffle(routeParams.id, participantId, participate)
        .then(updateRaffleData)
    }
    
    useEffect(updateRaffleData, []);

    return <Card>
      <CardContent>
        <TableContainer component={Paper}>
          {raffleData.name && 
            <Typography color="text.primary" fontFamily="Montserrat" margin="10px" >
              Acompanhe o amigo oculto: {raffleData.name}
            </Typography>
          }
          {
              message.length > 0 &&
              <Alert severity="success">{message}</Alert>
          }
          <Table sx={{ minWidth: 650 }} aria-label="caption table">
            <caption>
              Lista dos participantes e se visualizaram ou não o resultado do sorteio
            </caption>
            <TableHead>
              <TableRow>
                <TableCell colSpan={3}>Participante</TableCell>
                <TableCell>Visualizou</TableCell>
                <TableCell>Participando</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {raffleData && raffleData.participants && raffleData.participants.map((row) => (
                <TableRow key={row.name}>
                  <TableCell component="th" scope="row" colSpan={3}>
                    {row.name}
                  </TableCell>
                  <TableCell>
                      <Avatar sx={{ bgcolor: '#7044a5' }}>
                          {row.seen ? <Tooltip title="Visualizou"><VisibilityIcon /></Tooltip> :
                          <Tooltip title="Não Visualizou"><VisibilityOffIcon /></Tooltip>}
                      </Avatar>    
                  </TableCell>
                  <TableCell>
                    <Tooltip title="Participando">
                      <Switch checked={row.participate} onChange={() => {updateParticipation(row.id, !row.participate)}} />
                    </Tooltip>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <CardActions sx={{
              display: 'flex',
              justifyContent: 'space-around',
              p: 1,
              m: 1,
              bgcolor: 'background.paper',
              borderRadius: 1,
            }}>
          <Button onClick={triggerDrawRaffle} variant="contained" color="primary">Sortear</Button>
        </CardActions>
      </CardContent>
    </Card>;
}