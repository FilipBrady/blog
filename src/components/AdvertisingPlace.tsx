import { Box } from '@mui/material';
import advertising from '../Images/download.jpg';

const AdvertisingPlace = () => {
  return (
    <Box sx={{position: "sticky", top: "50px"}}>
      <img
        style={{ width: '300px', height: 'auto' }}
        src={advertising}
        alt="Advertising"
      />
    </Box>
  );
};
export default AdvertisingPlace;
