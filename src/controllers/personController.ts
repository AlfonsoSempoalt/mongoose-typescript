import { Request, Response } from 'express';
import Persona from '../models/persona';

export const getPersonas = (req: Request, res: Response) => {
    const personas = Persona.find((error: any, personas: any) => {
        if (error) {
            res.send(error);
        } else {
            res.send(personas);
        }
    });
};

export const getPersona = (req: Request, res: Response) => {
    const persona = Persona.findById(
        req.params.id,
        (error: any, persona: any) => {
            if (error) {
                res.send(error);
            } else {
                res.send(persona);
            }
        }
    );
};

export const addPersona = (req: Request, res: Response) => {
    const persona = new Persona(req.body);
    persona.save((error: any) => {
        if (error) {
            res.send(error);
        } else {
            res.send(persona);
        }
    });
};

export const deletePersona = (req: Request, res: Response) => {
    Persona.deleteOne({ _id: req.params.id }, (error: any) => {
        if (error) {
            res.send(error);
        } else {
            res.send('Successfully deleted');
        }
    });
};

export const updatePersona = (req: Request, res: Response) => {
    Persona.findByIdAndUpdate(
        req.params.id,
        req.body,
        (error: any, person: any) => {
            if (error) {
                res.send(error);
            } else {
                res.send('Successfully updated');
            }
        }
    );
};
