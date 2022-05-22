import NextLink from 'next/link'
import { AppBar, Box, Button, Link, Toolbar, Typography } from "@mui/material"
import Image from 'next/image'



export const Navbar = () => {
    return (
        <AppBar >
            <Toolbar >
                <NextLink href="/" passHref>
                    <Link display='flex' alignItems='center'>
                        <Image src="https://res.cloudinary.com/lcgg18/image/upload/v1643811891/logo_obt4gw.png" alt="logo" width={100} height={100} />
                        
                    </Link>
                </NextLink>

                <Box flex={1} />

                <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                    <NextLink href="/" passHref>
                        <Link>
                            <Button>Inicio</Button>
                        </Link>
                    </NextLink>
                    <NextLink href="/about" passHref>
                        <Link>
                            <Button>Sobre Mí</Button>
                        </Link>
                    </NextLink>
                    <NextLink href="/proyect" passHref>
                        <Link>
                            <Button>Proyectos</Button>
                        </Link>
                    </NextLink>
                    <NextLink href="/contact" passHref>
                        <Link>
                            <Button>Contacto</Button>
                        </Link>
                    </NextLink>
                </Box>

                <Box flex={1} />



                <Box sx={{ display: { xs: 'block', md: 'none',} }}>
                <NextLink href="/menu" passHref>
                    <Link>
                        <Button>Menú</Button>
                    </Link>
                </NextLink>
                </Box>
            </Toolbar>
        </AppBar>
    )
}
