import mongoose from "mongoose";
import { string, z } from "zod";

const userSchema = z.object({
    username: string(),
    email: string().email(),
    phone: string().length(10),
    password: string(),
    role: z.string().refine((val) => {
        return mongoose.Types.ObjectId.isValid(val)
    }),
});

// extracting the type
export type User = z.infer<typeof userSchema>;

export default userSchema;
