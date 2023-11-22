import * as React from 'react';
import InfoIcon from '@mui/icons-material/Info';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { Avatar, Card, CardHeader, CardContent } from '@mui/material';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal({description, instructions}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  console.log('Description')
  console.log(description)

  return (
    <div>
      <Button onClick={handleOpen} variant="contained" color="secondary">Ajuda</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Card sx={style}>
          <CardHeader
              avatar={
                <InfoIcon/>
              }
              sx={{
                fontFamily: 'Montserrat'
              }}
              title="Instruções"
              titleTypographyProps={{variant: "h5", fontFamily: 'Montserrat'}}
            />
          <CardContent>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              {description}
            </Typography>
            <List dense>
              {instructions.map(instruction => <ListItem>
                <ListItemIcon>
                  <ArrowRightIcon />
                </ListItemIcon>
                <ListItemText
                  primary={instruction}
                />
              </ListItem>)}
            </List>
          </CardContent>
        </Card>
      </Modal>
    </div>
  );
}