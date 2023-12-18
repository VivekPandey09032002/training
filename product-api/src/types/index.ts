import { z } from "zod";
import { ProductSchema } from "../utils/schema";

type TProduct = z.infer<typeof ProductSchema>;
type TFilter = { limit: number; skip: number; q: string; category: string };

export type { TProduct ,TFilter };
