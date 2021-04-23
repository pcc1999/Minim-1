import {Schema,model,Document,Types} from 'mongoose';

export const institutionSchema = new Schema({
    name: [{type: String, required: true}],
    description: [{type: String}],
    url: [{type: String}],
    responsable: [{type: String, required: true}],
});

export interface Iinstitution extends Document {
    name: String;
    description: String;
    url: String;
    responsable: String;
}


export default model<Iinstitution>('Institution',institutionSchema);