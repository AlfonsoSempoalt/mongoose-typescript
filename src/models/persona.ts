import mongoose, { Schema } from 'mongoose';

const URL: string = 'mongodb://localhost:27017/dbPrueba';

mongoose
    .connect(URL)
    .then(() => console.log('Connected'))
    .catch((error) => console.error(error));

export const PersonaSchema = new Schema(
    {
        name: { type: String, required: true },
        lastname: { type: String, required: true },
    },
    { collection: 'persona', versionKey: false }
);

const Persona = mongoose.model('persona', PersonaSchema, 'persona');

export default Persona;
