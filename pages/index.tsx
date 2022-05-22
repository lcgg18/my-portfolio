import type { NextPage } from 'next'
import NextLink from 'next/link';
import Image from 'next/image';
import { Box, Card, CardActionArea, Link, Typography } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { PublicLayout } from '../components/layouts';


const HomePage: NextPage = () => {
  return (

    <PublicLayout title='inicio' pageDescription='Pagina de inicio'>
      <Typography variant='h1' component='h1'>Inicio</Typography>
      <Box component='div' sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Image src="https://res.cloudinary.com/lcgg18/image/upload/ar_1:1,bo_5px_solid_rgb:4f88d4,c_fill,g_auto,r_max,w_1000/v1644420920/IMG_20220201_191806_lxpuz7.jpg"
          alt="foto pefil" width={200} height={200} />
      </Box>
      <Typography variant='body1'>
        Hola!, soy Luis Carlos.
      </Typography>
      <Typography variant='body1'>Desarrollador de Aplicaciones web con el Stack MERN, en Colombia.</Typography>
      <Box component='div' sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', columnGap: '2rem', marginTop: '1rem' }}>
        <Card>
          <CardActionArea>
            <NextLink href="https://github.com/lcgg18" passHref>
              <Link
                target="_blank"><GitHubIcon fontSize='large' /></Link>
            </NextLink>
          </CardActionArea>
        </Card>
        <Card>
          <CardActionArea>
            <NextLink href="https://www.linkedin.com/in/luis-carlos-guerra-g%C3%B3mez-42117655/" passHref >
              <Link
                target='_blank' ><LinkedInIcon fontSize='large' /></Link>
            </NextLink>
          </CardActionArea>
        </Card>
      </Box>

    </PublicLayout>




  )
}

export default HomePage
