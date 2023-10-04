import CatalogueCard from "./CatalogueCard"

const CatalogueCardItem = () => {
    return (
        <div className="grid grid-cols-3 gap-6 p-10">
            <CatalogueCard />
            <CatalogueCard />
            <CatalogueCard />
            <CatalogueCard />
            <CatalogueCard />
            <CatalogueCard />
            <CatalogueCard />
            <CatalogueCard />
            <CatalogueCard />
        </div>
    )
}
// className="flex flex-wrap gap-6 justify-between "
export default CatalogueCardItem