import { HydratedDocument } from "mongoose";
import { Document } from "mongoose";

export type paginationType = {
    next?: { page: number, limit: number };
    previous?: { page: number, limit: number };
    total?: number;
    result?: HydratedDocument<Document>[];
};