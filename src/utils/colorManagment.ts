import { IColors } from "../entities";
import screenshake from "./screenshake";

type IManageColors = (state: Array<IColors>, color: string, list?: string) => Array<IColors>

const manageColors: IManageColors = (state, color, list = "") => {
  const baseObj = {
    color,
    list,
  }
  if (state) {
    const colorIndex = state.findIndex(c => c.color === color);
    let impostorListCount = 0;
    state.forEach(obj => {
      if (obj.color === color && obj.list === "Impostor") {
        impostorListCount++;
      }
    })
    if (colorIndex > -1 && state[colorIndex].color === color) {
      if (state[colorIndex].list === "" && !list) {
        return [...state.filter(c => c.color !== color)]
      } else {
        if (impostorListCount >= 3 && list === "Impostor") {
          screenshake();
        }
        if ((impostorListCount < 3 && list === "Impostor") || list !== "Impostor") {
          return [...state.map((obj: IColors, i) => i === colorIndex ? baseObj : obj)]
        }
        return state;
      }
    } else {
      if (state.length < 10) {
        return [...state, baseObj];
      }
    }
  }
  return state;
}

export default manageColors;