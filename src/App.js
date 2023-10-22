
import './App.css';
import { Avatar, Card, CardHeader } from '@mui/material';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import { Route, Routes } from "react-router-dom";

import CreateSecretSanta from './components/CreateSecretSanta';
import RaffleAdmin from './components/RaffleAdmin';
import RaffleParticipantRegister from './components/RaffleParticipantRegister';
import RaffleSeeParticipantDraw from './components/RaffleSeeParticipantDraw';

function App() {
  return (
    <div className="App">
      <Card sx={{ maxWidth: "850px", m: "auto", mt: 3 }}>
        {/* <CardMedia
          sx={{ height: 140 }}
          image="https://media.istockphoto.com/id/1439262934/photo/mockup-christmas-card-among-christmas-ornaments-over-a-red-glitter-backdrop.webp?b=1&s=612x612&w=0&k=20&c=J69slOR0BVTmU78ZGrM_HFm48qonorpXr3hJ2_6Y2uM="
          title="mockup christmas card"
        /> */}
        <CardHeader
            avatar={
              <Avatar variant="rounded">
                <CardGiftcardIcon />
              </Avatar>
            }
            title="Amigo Oculto"
            titleTypographyProps={{variant: "h3"}}
          />
          <Routes>
            <Route path="/raffles/:id/admin" element={<RaffleAdmin />} />
            <Route path="/raffles/:id/register" element={<RaffleParticipantRegister />} />
            <Route path="/raffles/:id/see" element={<RaffleSeeParticipantDraw />} />
            <Route path="/" element={< CreateSecretSanta/>} />
          </Routes>
          
      </Card>
    </div>
  );
}

export default App;
