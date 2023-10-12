import { paginationType } from "@/types/types";

export const getPaginatedResult = (page: number, limit: number, total: number): { results: paginationType, startIndex: number, endIndex: number } => {
    const results: paginationType = {}

    const startIndex = (page - 1) * limit
    const endIndex = page * limit

    if (endIndex < total) {
        results.next = {
            page: page + 1,
            limit
        }
    }

    if (startIndex > 0) {
        results.previous = {
            page: page - 1,
            limit
        }
    }
    return { results, startIndex, endIndex };
}