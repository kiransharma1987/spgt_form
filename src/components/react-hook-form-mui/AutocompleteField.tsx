import React, { useState } from "react";
import { Autocomplete, TextField } from "@mui/material";
import { Controller } from "react-hook-form";

interface AutocompleteFieldProps {
  name: string;
  label: string;
  options: string[];
  control: any;
  errors: any;
  isOthersEnabled:boolean;
}

const AutocompleteField: React.FC<AutocompleteFieldProps> = ({
  name,
  label,
  options,
  control,
  errors,
  isOthersEnabled
}) => {
  const [isOtherSelected, setIsOtherSelected] = useState(false);

  return (
    <>
      <Controller
        name={name}
        control={control}
        defaultValue=""
        render={({ field }) => (
          <Autocomplete
            {...field}
            options={options}
            onChange={(_, value) => {
              field.onChange(value);
              setIsOtherSelected(value === "others");
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                label={label}
                error={!!errors[name]}
                helperText={errors[name]?.message as string}
              />
            )}
          />
        )}
      />

      {isOthersEnabled && isOtherSelected && (
        <Controller
          name={'other_'+name}
          control={control}
          defaultValue=""
          rules={{
            required: `Please specify your ${label}`,
          }}
          render={({ field }) => (
            <TextField
              {...field}
              label={`Please specify your ${label}`}
              required
              error={!!errors[name]}
              helperText={errors[name]?.message as string}
              fullWidth
              margin="normal"
            />
          )}
        />
      )}
    </>
  );
};

export default AutocompleteField;