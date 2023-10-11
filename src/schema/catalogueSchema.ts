import { string, z } from "zod";

const catalogueSchema = z.object({
    catalogue: string(),
    couleur: string(),
    identification: string(),
    typeArticle: z.object({
        value: z.string(),
        label: z.string(),
    }),
    codeBar: string(),
    fornisseur: z.object({
        value: z.string(),
        label: z.string(),
    }),
    poids: string(),
    prix: z.coerce.number(),
    date: string(),
    reference: string(),
    nbrArticle: z.coerce.number(),
    description: string(),
    img: string(),
    categorie: z.object({
        value: z.string(),
        label: z.string(),
    })
});

// extracting the type
export type Catalogue = z.infer<typeof catalogueSchema>;

export default catalogueSchema;
