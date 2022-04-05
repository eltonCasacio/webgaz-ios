import React from 'react';
import DatePicker from 'react-native-date-picker';

export type DatePickerProps = {
  date: Date;
  open: boolean;
  minDate: Date;
  onChange: (date: Date) => void;
  setOpen: (open: boolean) => void;
};
export default (params: DatePickerProps) => {
  return (
    <DatePicker
      mode="date"
      minimumDate={params.minDate}
      modal
      open={params.open}
      date={params.date}
      onConfirm={date => {
        params.setOpen(false);
        params.onChange(date);
      }}
      onCancel={() => {
        params.setOpen(false);
      }}
    />
  );
};
