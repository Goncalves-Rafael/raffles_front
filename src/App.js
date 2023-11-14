
import './App.css';
import { Avatar, Card, CardHeader } from '@mui/material';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import { Navigate, Route, Routes } from "react-router-dom";

import CreateRaffle from './components/CreateRaffle';
import RaffleAdmin from './components/RaffleAdmin';
import RaffleParticipantRegister from './components/RaffleParticipantRegister';
import RaffleSeeParticipantDraw from './components/RaffleSeeParticipantDraw';

import { ThemeProvider, createTheme  } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#7044a5'
    },
    secondary: {
      main: '#BAB83D'
    }
  },
});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Card sx={{ maxWidth: "850px", m: "auto", mt: 5 }}>
          {/* <CardMedia
            sx={{ height: 140 }}
            image="https://media.istockphoto.com/id/1439262934/photo/mockup-christmas-card-among-christmas-ornaments-over-a-red-glitter-backdrop.webp?b=1&s=612x612&w=0&k=20&c=J69slOR0BVTmU78ZGrM_HFm48qonorpXr3hJ2_6Y2uM="
            title="mockup christmas card"
          /> */}
          <CardHeader
              avatar={
                <Avatar variant="rounded" sx={{ bgcolor: '#7044a5' }} >
                  <CardGiftcardIcon/>
                </Avatar>
              }
              sx={{
                fontFamily: 'Montserrat'
              }}
              title="Amigo Oculto"
              titleTypographyProps={{variant: "h3", fontFamily: 'Montserrat'}}
            />
            <Routes>
              <Route path="/raffles/:id/admin" element={<RaffleAdmin />} />
              <Route path="/raffles/:id/register" element={<RaffleParticipantRegister />} />
              <Route path="/raffles/:id/see" element={<RaffleSeeParticipantDraw />} />
              <Route path="/raffles" element={< CreateRaffle/>} />
              <Route path="/*" element={<Navigate to="/raffles" />}/>
            </Routes>
            
        </Card>
      </ThemeProvider>
    </div>
  );
}

export default App;
