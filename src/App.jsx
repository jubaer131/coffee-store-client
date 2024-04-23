
import { useLoaderData } from "react-router-dom"
import CoffeeCard from "./assets/component/CoffeeCard"





function App() {
  const coffees = useLoaderData()
  console.log(coffees)

  return (
    <>

      <h1 className='text-6xl text-center'>Total coffee  </h1>

      {/* <div className="container mx-auto grid grid-cols-3 justify-between items-center gap-x-7 gap-y-10 mt-10">
        {
          coffees.map(coffee => (
            <CoffeeCard key={coffee._id} coffee={coffee} />
          ))
        }
      </div> */}




    </>
  )
}

export default App
