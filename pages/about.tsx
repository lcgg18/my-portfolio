import { Box, Typography } from '@mui/material'
import { PublicLayout } from '../components/layouts'

const AboutPage = () => {
  return (
    <PublicLayout title='Sobre mi' pageDescription='Pagina de información sobre mí'>
      <Typography variant='h1' component='h1'>Sobre mí</Typography>
      <Box
        component='div'
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column'
        }}>


        <Typography variant='body2' textAlign={'justify'} >
          Como programador de aplicaciones web con manejo de tecnología como son HTML, CSS, JavaScript, ReactJS, NodeJS, API REST, Mongo DB, GraphQL, Git, GitHub y en la experiencia del proyecto Misión TIC 2022, que me sumergió en este mundo del cual conocía bástate, pero más orientado al hardware, Pero del cual siempre he tenido una gran pasión.
          El trabajo en equipo utilizando metodologías agiles como Scrum me ayudo a tener un mejor control de tiempos, manejo de las tareas desde su raíz, armonía con el resto del equipo, una codificación más limpia, detallada y enfocada al objetivo.
          Quisiera integrar un equipo de trabajo, que me permita seguir aprendiendo y generar valor en todos los procesos que participe.
        </Typography>
      </Box>

    </PublicLayout>

  )
}

export default AboutPage
