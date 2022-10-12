import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import dayjs from 'dayjs';
import * as React from 'react';
import "./calendar.css"

const isWeekend = (date) => {
    const day = date.day();

    return day === 0 || day === 6;
};

export default function Calendar() {
    const today = new Date().toISOString()
    // const [value, setValue] = React.useState(dayjs('2022-04-07'));
    const [value, setValue] = React.useState(dayjs(today));

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <StaticDatePicker
                orientation="landscape"
                disabled
                openTo="day"
                value={value}
                shouldDisableDate={isWeekend}
                onChange={(newValue) => {
                    setValue(newValue);
                }}
                disableOpenPicker
                disableMaskedInput
                renderInput={(params) => null}
            />
        </LocalizationProvider>
    );
}
