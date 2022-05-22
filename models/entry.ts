import mongoose, { Schema, model, Model } from 'mongoose';
import { Entry } from '../interfaces';



const EntrySchema: Schema = new Schema({
    name : {type: String, required: true},
    email : {type: String, required: true},
    asunto : {type: String, required: true},
    mensaje : {type: String, required: true},
},{
    timestamps: true
});

const EntryModel: Model<Entry> = mongoose.models.Entry || model('Entry', EntrySchema);

export default EntryModel;