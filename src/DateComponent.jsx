import React from 'react';

const DateComponent = ({ date, setDate, className }) => {
   const handleDateChange = (e) => {
       setDate(new Date(e.target.value));
   }

   return (
    <div className={className}>
       <input 
           type='date'
           value={date.toISOString().split('T')[0]} 
           onChange={handleDateChange}
       />
    </div>
   )
}

export default DateComponent;
