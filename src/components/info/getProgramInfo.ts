import { request, urls } from "src/utils/api";
import { ProgramInfoInterface } from "./programInfoInterface";

export const getProgramInfo = async (
  id: string,
): Promise<ProgramInfoInterface> => {
  return await request.get(`${urls.program}/${id}`);
};
