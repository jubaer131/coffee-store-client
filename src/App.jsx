

import { useLoaderData } from "react-router-dom"
import UseaxiosSecure from "./assets/Hooks/UseaxiosSecure"
import { useQuery } from "@tanstack/react-query"
import { useState } from 'react';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file



function App() {

  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  ]);

  const handleDates = item => {
    console.log(item)
    setState(item.selection)
  }

  const handlesubmit = (e) => {
    e.preventDefault()
    const to = state.startDate
    const from = state.endDate

    const totaldate = { to, from }
    console.log(totaldate)
  }


  const axiosCommon = UseaxiosSecure()

  const { isPending, data: coffee = [] } = useQuery({

    queryKey: ['coffee'],
    queryFn: () =>
      axiosCommon.get('/coffee')
        .then(res => {
          return (res.data)
        })

  })
  console.log(coffee)
  if (isPending) return <p className="text-center">loading .......</p>

  return (
    <>

      <h1 className='text-6xl text-center'>{coffee.length}  </h1>

      <div className="container mx-auto grid grid-cols-3 gap-10">
        {
          coffee.map(item => <div>
            <div className="card  bg-base-100 shadow-xl ">
              <figure><img src='https://i.ibb.co/vjbw7jd/front-view-greece-salad-sliced-vegetable-salad-with-tomatoes-cucumbers-white-cheese-olives-inside-wh.jpg' alt="Shoes" /></figure>
              <div className=" ">
                <div>
                  <h2 className="card-title">{item.Category}</h2>
                  <p>{item.Details}</p>
                  <p>{item.name}</p>
                  <p>{item.quantity}</p>
                </div>
                <div>
                  <form onSubmit={handlesubmit}>
                    <DateRange
                      showDateDisplay={false}
                      rangeColors={['#00FF00']}
                      editableDateInputs={true}
                      onChange={item => setState([item.selection])}
                      // onChange={item => handleDates(item)}
                      moveRangeOnFirstSelection={false}
                      ranges={state}
                    />
                    <div>
                      <button type="submit" className="btn">submit</button>
                    </div>

                  </form>
                </div>

              </div>
            </div>

          </div>)
        }
      </div>




    </>
  )
}

export default App
