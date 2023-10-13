export type paginationType = {
    next?: { page: number, limit: number };
    previous?: { page: number, limit: number };
    total?: number;
    result?: Omit<any, never>[];
};