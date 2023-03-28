import CatalogItem from "./CatalogItem";

export default function Catalog({
  cakes,

}) {

  return (
    <section>
      <h2 className="section-title text-center mb-4">Recipes</h2>


      {cakes.map(x =>
        <CatalogItem key={x._id} {...x} />)}


      {cakes.length === 0 &&(
        <h4 className="pt-4">No Cakes yet</h4>
      )
        

      }



    </section>
  )
}

