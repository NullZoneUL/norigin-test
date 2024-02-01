import { getParsedSchedule } from "./parsedSchedule";
import { ProgramInfoInterface } from "src/components/info/programInfoInterface";

export const getParsedProgramInfo = (
  data: ProgramInfoInterface,
): ProgramInfoInterface => {
  const dateStart = new Date(data.start);
  const dateEnd = new Date(data.end);
  return {
    ...data,
    parsedSchedule: getParsedSchedule(dateStart, dateEnd),
    parsedDate: `${dateStart.getDate()} ${dateStart.toLocaleString("en-us", { month: "short" })}`, // Get date in 'Day Month (shortened)' format
  };
};
