import { z } from "zod";

const DoctorSchema = z.object({
  name: z.string().min(1, "Name is required"),
  phone: z.string().min(1, "Phone number is required"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
  title: z.string().min(1, "Title is required"),
  bio: z.string().min(1, "Bio is required"),
  address: z.string().min(1, "Address is required"),
  discount_percentage: z
    .number()
    .min(0, "Discount percentage cannot be less than 0")
    .max(100, "Discount percentage cannot be more than 100"),
  specialization: z.string().min(1, "Specialization is required"),
  sub_specialization: z.string().min(1, "Sub-specialization is required"),
  tax_registration: z.string().min(1, "Tax registration is required"),
  gender: z.enum(["male", "female"], "Gender is required"),
  image: z
    .instanceof(File)
    .refine((file) => file.size > 0, "Image is required"),
  services: z
    .array(z.instanceof(File))
    .min(1, "At least one attachment is required"),
  custom_permissions: z.array(z.string()).optional(),
});

export default DoctorSchema;
