import { Box, Container } from '@mui/material';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import traktor from '../Images/traktor.jpg';

const BlogPost = () => {
  return (
    <Box sx={{ marginTop: 4 }}>
      <Container maxWidth='sm'>
        <Typography variant='h5' color='initial'>
          {' '}
          Is Tractor beter vehicle to a city than a car?
        </Typography>

        <Box sx={{ padding: 4, textAlign: 'left' }}>
          <Typography variant='body1'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates
            deserunt explicabo dolorem exercitationem, eveniet quod. Est
            reprehenderit quasi explicabo harum accusamus vel veniam laudantium
            iure odit, quia cupiditate ex qui? Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Modi quisquam suscipit error rem
            distinctio debitis eveniet est facilis cumque, nam ipsa cupiditate
            eius natus dignissimos, blanditiis nostrum amet nulla accusantium!
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum
            quisquam aspernatur distinctio officia error aliquam odit facere
            blanditiis, pariatur reprehenderit, veritatis consectetur optio modi
            sunt debitis eveniet aperiam quia quam?
          </Typography>
          <Box sx={{ textAlign: 'center', paddingY: 2 }}>
            <img src={traktor} alt='A car' width={'auto'} height={'300px'} />
            <Typography variant='subtitle2'>*Tractor is a Tractor</Typography>
          </Box>
          <Typography variant='body1'>
            Are Tractors Tractors? Let us see:
          </Typography>
          <ul style={{ width: '65%' }}>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem nulla numqu
            </li>
            <li>
              Atque commodi, hic rem delectus culpa, ad alias excepturi eius
              accusamus totam assumsimus quae soluta nulla tempora.
            </li>
            <li>
              Consequatur incidunt amet dolore laudantium assumenda, ratione
              posni asperiores archt officiis aperiam.
            </li>
          </ul>
        </Box>
      </Container>
    </Box>
  );
};
export default BlogPost;
