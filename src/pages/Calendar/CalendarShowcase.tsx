// Example: src/pages/Calendar/CalendarShowcase.tsx
import {
    BasicCalendar,
    ControlCalendar,
    CustomizingCalendar,
    AdvancedCalendar,
  } from "@/pages/Calendar";
  
  export default function CalendarShowcase() {
    return (
      <>
        <h1 className="text-xl font-semibold mb-4">Calendar Examples</h1>
        <div className="space-y-8">
          <BasicCalendar />
          <ControlCalendar />
          <CustomizingCalendar />
          <AdvancedCalendar />
        </div>
      </>
    );
  }
  