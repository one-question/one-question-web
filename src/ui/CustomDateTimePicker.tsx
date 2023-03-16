import { MobileDateTimePicker } from "@mui/x-date-pickers/MobileDateTimePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { Dayjs } from "dayjs";
import "../index.css";
interface CustomDateTimePickerProps {
  now: Dayjs;
  maxDate: Dayjs;
  handleChangeDatePicker: (e: any) => void;
}

const CustomDateTimePicker: React.FC<CustomDateTimePickerProps> = (props) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <MobileDateTimePicker
        className="date-time-picker"
        minDateTime={props.now}
        maxDateTime={props.maxDate}
        defaultValue={props.now}
        onChange={props.handleChangeDatePicker}
      />
    </LocalizationProvider>
  );
};

export default CustomDateTimePicker;
