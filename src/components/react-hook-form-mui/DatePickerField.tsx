import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Controller } from "react-hook-form";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import dayjs from "dayjs";

interface DatePickerFieldProps {
    name: string;
    label: string;
    control: any;
    errors?: any;
    required?: boolean
}

const DatePickerField: React.FC<DatePickerFieldProps> = ({
    name,
    label,
    required,
    control,
    errors,
}) => (
    <Controller
        name={name}
        control={control}
        defaultValue={null}
        rules={{ required: required && "This field is mandatory" }}
        render={({ field }) => (
            <LocalizationProvider dateAdapter={AdapterDayjs} >
                <DatePicker
                    {...field}
                    label={label}
                    format="DD/MM/YYYY"
                    slotProps={{
                        textField: {
                            fullWidth: true,
                            error: !!errors?.[name],
                            helperText: errors?.[name]?.message, 
                            InputLabelProps: {
                                required: required, 
                            },
                        }
                    }}
                    value={field.value ? dayjs(field.value, "DD/MM/YYYY") : null} // Ensure value is a Dayjs object or null
                    onChange={(date) => {
                        field.onChange(date ? dayjs(date).format("DD/MM/YYYY") : null); // Convert to string before storing in state
                    }}
                />
            </LocalizationProvider>
        )}
    />
);

export default DatePickerField;
