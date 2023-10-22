import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';

import Alert from '@mui/material/Alert';
import Box from '@mui/material/Button';
import Paper from '@mui/material/Paper';


import { participantCheckDraw } from '../services/rafflesService'


export default function RaffleAdmin () {
    const [message, setMessage] = useState('');
    const routeParams = useParams();

    useEffect(() => {
      participantCheckDraw(routeParams.id)
        .then(response => {
          setMessage(response.message)
        })
    }, []);

    return <Box component={Paper}>
      {
          message.length > 0 &&
          <Alert severity="info">{message}</Alert>
      }
    </Box>;
}