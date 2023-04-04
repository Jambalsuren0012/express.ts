import { Schema, model, connect } from 'mongoose';
// Алхам 1
interface IUser {
name: string;
email: string;
avatar?: string;
};

const userSchema = new Schema<IUser>({
    name: { type: String, required: true },
    email: { type: String, required: true },
    avatar: String
    });

