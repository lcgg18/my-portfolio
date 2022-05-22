import { useState } from "react";
import { Box, Button, Chip, Grid, TextField, Typography } from "@mui/material";
import SaveIcon from "@mui/icons-material/Save";
import { PublicLayout } from "../components/layouts";
import { useForm } from "react-hook-form";
import { validations } from "../util";
import { entriesApi } from "../apis";
import { CheckOutlined, ErrorOutline } from "@mui/icons-material";


type FormData = {
    name: string;
    email: string;
    asunto: string;
    mensaje: string;
}


const ContactPage = () => {

    const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
    const [showError, setShowError] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);


    const onContactSubmit = async ({ name, email, asunto, mensaje }: FormData) => {

        setShowError(false);
        setShowSuccess(false);
        try {
            await entriesApi.post('/entries', { name, email, asunto, mensaje });
            setShowSuccess(true);
            setTimeout(() => setShowSuccess(false), 5500);

        } catch (error) {
            setShowError(true);
            setTimeout(() => setShowError(false), 3000);
        }
    }


    return (
        <PublicLayout title='contacto' pageDescription='Pagina de contacto'>
            <Typography variant='h1' component='h1'>Contacto</Typography>
            <Box display='flex' justifyContent='center' alignItems='center'>
                <form onSubmit={handleSubmit(onContactSubmit)} noValidate>
                    <Box sx={{ width: 350, padding: '10px 20px' }}>


                        <Grid container spacing={2} >
                        <Grid item xs={12} display="flex" justifyContent="center" >
                                <Chip
                                    label="Error al enviar el mensaje"
                                    color="error"
                                    icon={<ErrorOutline />}
                                    className="fadeIn"
                                    sx={{ display: showError ? 'flex' : 'none' }}
                                />
                            </Grid>
                            <Grid item xs={12} display="flex" justifyContent="center" >
                                <Chip
                                    label="Mensaje enviado con exito"
                                    color="success"
                                    icon={<CheckOutlined />}
                                    className="fadeIn"
                                    sx={{ display: showSuccess ? 'flex' : 'none' }}
                                />
                            </Grid>

                            <Grid item xs={12} >
                                <TextField
                                    label='Nombre'
                                    type='text'
                                    variant='filled'
                                    fullWidth
                                    {...register('name', { required: 'El nombre es requerido' })}
                                    error={!!errors.name}
                                    helperText={errors.name?.message}
                                />
                            </Grid>
                            <Grid item xs={12} >
                                <TextField
                                    label='Correo'
                                    type='email'
                                    variant='filled'
                                    fullWidth
                                    {...register('email', {
                                        required: 'El correo es requerido',
                                        validate: validations.isEmail

                                    })}
                                    error={!!errors.email}
                                    helperText={errors.email?.message}
                                />
                            </Grid>
                            <Grid item xs={12} >
                                <TextField
                                    label='Asunto'
                                    type='text'
                                    variant='filled'
                                    fullWidth
                                    {...register('asunto', { required: 'El asunto es requerido' })}
                                    error={!!errors.asunto}
                                    helperText={errors.asunto?.message}
                                />
                            </Grid>
                            <Grid item xs={12} >
                                <TextField
                                    label='Mensaje'
                                    type='text'
                                    variant='filled'
                                    fullWidth
                                    multiline
                                    {...register('mensaje', { required: 'El mensaje es requerido' })}
                                    error={!!errors.mensaje}
                                    helperText={errors.mensaje?.message}
                                />

                            </Grid>
                            <Grid item xs={12} >
                                <Button
                                    sx={{ width: '100%' }}
                                    variant="outlined"
                                    color="secondary"
                                    type="submit"
                                    endIcon={<SaveIcon />}

                                >
                                    Enviar Mensaje
                                </Button>
                            </Grid>

                            
                        </Grid>


                    </Box>
                </form>

            </Box>

        </PublicLayout>

    );
};
export default ContactPage;
