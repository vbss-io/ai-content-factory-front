import { styled } from "@/presentation/config/stitches.config";

export const Container = styled("div", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "100%",

  div: {
    minWidth: "10rem",
    minHeight: "10rem",
  },
});
