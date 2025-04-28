import React, { useState } from "react";
import {
  Calendar as BigCalendar,
  momentLocalizer,
  Event,
} from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

interface CustomEvent extends Event {
  title: string;
  start: Date;
  end: Date;
}

const Calender = () => {
  const [events, setEvents] = useState<CustomEvent[]>([
    {
      title: "Team Meeting",
      start: new Date(2023, 9, 20, 10, 0),
      end: new Date(2023, 9, 20, 11, 0),
    },
    {
      title: "Project Deadline",
      start: new Date(2023, 9, 22, 14, 0),
      end: new Date(2023, 9, 22, 15, 0),
    },
  ]);

  const handleSelectSlot = ({ start, end }: { start: Date; end: Date }) => {
    const title = window.prompt("Enter event title:");
    if (title) {
      setEvents([...events, { title, start, end }]);
    }
  };

  const handleSelectEvent = (event: CustomEvent) => {
    window.alert(`Event: ${event.title}`);
  };

  return (
    <div style={{ height: "80vh", padding: "20px" }}>
      <h2 style={{ marginBottom: "20px", textAlign: "center" }}>My Calendar</h2>
      <BigCalendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        selectable
        onSelectSlot={handleSelectSlot}
        onSelectEvent={handleSelectEvent}
        style={{ height: "100%" }}
      />
    </div>
  );
};

export default Calender;