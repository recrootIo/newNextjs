import React from "react";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction"; // needed for dayClick
import { Box, Dialog, DialogTitle, Typography } from "@mui/material";
import { useState } from "react";

const InterviewCalendar = (props) => {
  const [open, setopen] = useState(false);
  const [values, setvalues] = useState("");
  const handleDateClick = (val) => {
    console.log(val?.event?._def?.extendedProps?.datas, "valsss");
    setvalues(val?.event?._def?.extendedProps?.datas);
    setopen(true);
  };
  const handleClose = () => {
    setopen(false);
  };
  console.log(props?.date,new Date())
  return (
    <>
      <FullCalendar
        new={props?.date}
        plugins={[dayGridPlugin, timeGridPlugin]}
        initialView={"timeGridDay"}
        headerToolbar={{
          start: "today prev", // will normally be on the left. if RTL, will be on the right
          center: "title",
          end: "next",
        }}
        eventContent={renderEventContent}
        eventClick={(e) => handleDateClick(e)}
        events={props?.schedules}
        height={"90vh"}
      />
      <Dialog onClose={handleClose} open={open}>
        <DialogTitle>Interview Details</DialogTitle>
        <Box sx={{display:'flex',flexDirection:'column',gap:'20px',p:4}}>
          <Typography>Job Title : {values?.jobDetail?.jobRole}</Typography>
          <Typography> Subject : {values?.subject}</Typography>
          <Typography>Link: {values?.meetlink}</Typography>
        </Box>
      </Dialog>
    </>
  );
};
function renderEventContent(eventInfo) {
  console.log(eventInfo, "ddd");
  return (
    <div style={{ height: "40px" }}>
      {eventInfo.timeText}-{eventInfo.event.title}
    </div>
  );
}
export default InterviewCalendar;
