import * as React from 'react';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import {
  Box,
  Card,
  Paper,
} from '@mui/material';


export default function ElectionResults({ election }) {

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
            Resultados da eleição:
          </Typography>
          <TextField sx={{ maxWidth: "80%", m: "auto", mt: 3 }} id="standard-basic" label="P" variant="standard" className='wrap-text'
            value={election.p} disabled
          />
          <TextField sx={{ maxWidth: "80%", m: "auto", mt: 3 }} id="standard-basic" label="Alpha" variant="standard" className='wrap-text'
            value={election.alpha} disabled
          />
          <TextField sx={{ maxWidth: "80%", m: "auto", mt: 3 }} id="standard-basic" label="Beta" variant="standard" className='wrap-text'
            value={election.beta} disabled
          />
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="caption table">
              <caption>
                Resultados finais contabilizados.
              </caption>
              <TableHead>
                <TableRow>
                  <TableCell colSpan={3}>Texto do voto</TableCell>
                  <TableCell>Quantidade de votos</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {election && election.resultados && election.resultados.map((row) => (
                  <TableRow key={row.voto_criptografado}>
                    <TableCell component="th" scope="row" colSpan={3}>
                      {row.voto_criptografado}
                    </TableCell>
                    <TableCell>
                      {row.total_votos} 
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
      </Card>
    </Box>
  );
}
