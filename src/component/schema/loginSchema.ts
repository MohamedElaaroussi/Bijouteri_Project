import { string, z } from "zod";

const loginSchema = z.object({
  email: string().email({
    message: "Please enter a valid email",
  }),
  password: string().min(8, {
    message: "Password should contain at least 8 char",
  }),
});

// extracting the type
export type Login = z.infer<typeof loginSchema>;

export default loginSchema;
