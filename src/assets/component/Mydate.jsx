import React, { useState } from 'react';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file

const Mydate = () => {
    const [state, setState] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ]);

    const handleDates = (item) => {
        console.log(item);
        setState([item.selection]); // Update state with an array containing the new selection object
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Access the first object in the state array
        const { startDate, endDate } = state[0];

        const totaldate = {
            to: endDate,
            from: startDate
        };

        console.log(totaldate);

        // Example of sending data to server
        // fetch('https://your-server-endpoint.com/api/date-range', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify(totaldate),
        // })
        // .then(response => response.json())
        // .then(data => console.log('Success:', data))
        // .catch((error) => console.error('Error:', error));
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <DateRange
                    editableDateInputs={true}
                    onChange={handleDates}
                    moveRangeOnFirstSelection={false}
                    ranges={state}
                    rangeColors={['#00FF00']} // green color
                />
                <div>
                    <button className='btn' type='submit'>Submit</button>
                </div>
            </form>
        </div>
    );
};

export default Mydate;
