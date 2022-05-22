import { Box, Typography } from '@mui/material';
import { PublicLayout } from '../components/layouts';

const Custom404 = () => {
  return (
    <PublicLayout title='Page not found' pageDescription='No ha nada que mostrar aquí'>
        <Box 
            display='flex'
            justifyContent='center'
            alignItems='center' 
            height='calc(100vh - 200px)'
            
        >
            <Box
                display='flex'
                sx={{ flexDirection: { xs: 'column', sm: 'row' } }}
                alignContent='center'
               
            >
                <Typography variant="h1" component="h1" fontSize={60} fontWeight={200}> 404 |</Typography>
                <Typography marginLeft={2}> No encontramos ninguna pagina aquí</Typography>
            </Box>
        </Box>
        
    </PublicLayout>
  )
}

export default Custom404