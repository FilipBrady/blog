import { Link } from 'react-router-dom';
import { route } from './routes/routes';
import HomeIcon from '@mui/icons-material/Home';
import PhoneIcon from '@mui/icons-material/Phone';
import DashboardIcon from '@mui/icons-material/Dashboard';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';
import { Box } from '@mui/system';

const NavigationComponent = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        background: 'black',
      }}
    >
      <Link to={route.home}>
        <Button
          sx={{
            color: 'white',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <HomeIcon fontSize='small' />
          <p className='navigationLink'>HOME</p>
        </Button>
      </Link>
      <Link to={route.post}>
        <Button
          sx={{
            color: 'white',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <DashboardIcon fontSize='small' />
          <p className='navigationLink'>POST</p>
        </Button>
      </Link>
      <Link to={route.contact}>
        <Button
          sx={{
            color: 'white',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <PhoneIcon fontSize='small' />
          <p className='navigationLink'>CONTACT</p>
        </Button>
      </Link>
      <Link to={route.addBlogPost}>
        <Button
          sx={{
            color: 'white',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <AddIcon fontSize='small' />
          <p className='navigationLink'>ADD POST</p>
        </Button>
      </Link>
    </Box>
  );
};
export default NavigationComponent;
