import { atom } from "recoil";

export const filterAtom = atom({
  key: "filterAtom",
  default: {
    refresh : false,
  },
});