import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Controller } from "react-hook-form";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

interface DatePickerFieldProps {
    name: string;
    label: string;
    control: any; // You might want to replace `any` with `Control<T>` from react-hook-form if you have a specific type for your form.
    errors?: any; // Optional, since errors might not always be passed.
}

const DatePickerField: React.FC<DatePickerFieldProps> = ({
    name,
    label,
    control,
    errors,
}) => (
    <Controller
        name={name}
        control={control}
        defaultValue={null}
        render={({ field }) => (
            <LocalizationProvider dateAdapter={AdapterDayjs} >

            <DatePicker
                {...field}
                label={label}
                format="DD/MM/YYYY"
                slotProps={{ textField: { fullWidth: true } }}

            />
            </LocalizationProvider>
        )}
    />
);

export default DatePickerField;
