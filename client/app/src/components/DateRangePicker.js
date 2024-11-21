import React, { useState } from "react";
import Datepicker from "tailwindcss-react-datepicker";

const DateRangePicker = () => {
    const [value, setValue] = useState({
        startDate: new Date(),
        endDate: new Date().setMonth(11)
    });

    const handleValueChange = newValue => {
        console.log("newValue:", newValue);
        setValue(newValue);
    };

    return (
        <div>
            <Datepicker
                renderFooter={context => <button onClick={context.hideDatepicker()}>Ok</button>}
                value={value}
                onChange={handleValueChange}
            />
        </div>
    );
};

export default DateRangePicker;