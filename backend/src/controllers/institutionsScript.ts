import Institution, { institutionSchema } from '../models/institution';
import {Request, Response} from 'express'
let mongoose = require('mongoose');


export async function addInstitution(req: Request, res: Response){
    let institution = req.body;
    console.log(institution);
    let newInstitution = new Institution();
    newInstitution._id = new mongoose.Types.ObjectId();
    newInstitution.name = institution.name;
    newInstitution.description = institution.description;
    newInstitution.url = institution.url;
    newInstitution.responsable = institution.responsable;
    console.log(newInstitution);
    let result = await newInstitution.save();
    res.status(200).send(result);
};

export async function getInstitutions(req: Request, res: Response){
    let institutions =await Institution.find();
    console.log(institutions);
    if(institutions) {
        res.status(200).json(institutions);
    } else {
        res.status(424).send({message: 'Institutions not found'});
    }
};

export async function removeInstitution(req:Request, res:Response) {
    let institution = req.body;
    let result = await Institution.findOneAndRemove(institution);
    res.status(200).send(result);
}
