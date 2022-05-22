import type { NextApiRequest, NextApiResponse } from 'next';
import { db } from '../../database';
import { EntryModel } from '../../models';
import { validations } from '../../util';


type Data = 
| {message: string}
| {
    name: string
    email: string
    asunto: string
    mensaje: string
 
  }


export default function handler (req: NextApiRequest, res: NextApiResponse<Data>) {
    switch( req.method ) {
        case 'POST':
            return contact(req, res)

        default:
            res.status(400).json({
                message: 'Bad request'
            })
    }
}


const contact = async (req: NextApiRequest, res: NextApiResponse<Data>) =>{
    const {name = '', email = '' , asunto = '', mensaje = '' } = req.body as {name: string, email: string, asunto: string, mensaje: string };
    
    if ( name.length < 2 ) {
        return res.status(400).json({
            message: 'El nombre debe de ser de 2 caracteres'
        });
    }

    if ( asunto.length < 2 ) {
        return res.status(400).json({
            message: 'El asunto debe de ser de 2 caracteres'
        });
    }
    if ( mensaje.length < 2 ) {
        return res.status(400).json({
            message: 'El mensaje debe de ser de 2 caracteres'
        });
    }
    
    if ( !validations.isValidEmail( email ) ) {
        return res.status(400).json({
            message: 'El correo no tiene formato de correo'
        });
    }

    await db.connect();

    const newEntry = new EntryModel({
        name,
        email,
        asunto,
        mensaje,

    })

    try {
        await newEntry.save();
    } catch (error) {
        return res.status(500).json({
            message: 'Revisar los log del servidor'
        });
    }
        
    
    await db.disconnect();

    return res.status(200).json({
        message: 'Mensaje enviado'
    });
}
