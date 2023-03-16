import React, { useEffect } from "react";
import dayjs from "dayjs";
import MainLayout from "../components/MainLayout";

import CustomDateTimePicker from "../ui/CustomDateTimePicker";
const DueDate: React.FC = () => {
  const today = dayjs(dayjs().format().slice(0, 16));
  const now = dayjs(today.add(1, "minute").format());
  const maxDate = dayjs(today.add(1, "day").format());
  const icon = { src: "/images/icons/due date.svg" };
  const button = { text: "Complete", link: "/inprogress" };
  useEffect(() => {
    localStorage.setItem("time", JSON.stringify(now));
  });
  const handleChangeDatePicker = (e: any) => {
    localStorage.setItem("time", JSON.stringify(e));
  };
  return (
    <MainLayout icon={icon} title={"기한을 정해주세요"} button={button}>
      <CustomDateTimePicker
        now={now}
        maxDate={maxDate}
        handleChangeDatePicker={handleChangeDatePicker}
      />
    </MainLayout>
  );
};

export default DueDate;
