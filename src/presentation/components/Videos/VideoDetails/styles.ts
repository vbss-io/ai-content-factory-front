import { Button, Chips, Dialog } from "vbss-ui";

import { styled } from "@/presentation/config/stitches.config";

export const Container = styled("div", {
  width: "100%",
  height: "100%",
  display: "flex",
});

export const ModalContent = styled("div", {
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",

  video: {
    maxHeight: "60vh",

    "@md": {
      maxHeight: "75vh",
    },
  },
});

export const DetailsDialog = styled(Dialog, {
  backgroundColor: "$background !important",
  color: "$text",

  h2: {
    color: "$text",
  },

  p: {
    display: "none",
  },
});

export const DetailsContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
});

export const DetailsHeader = styled("div", {
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "1rem",
  padding: "1rem",
  backgroundColor: "$primary",
  borderRadius: "1rem",
  flexDirection: "column",

  "@sm": {
    flexDirection: "row",
  },

  video: {
    height: "10rem",
    borderRadius: "1rem",
  },
});

export const DetailsHeaderInfo = styled("div", {
  display: "flex",
  flexDirection: "column",
  color: "white",
  gap: "0.25rem",
});

export const DetailsHeaderInfoCard = styled("div", {
  minWidth: "30%",
  display: "flex",
  alignItems: "flex-start",
  flexDirection: "column",

  span: {
    opacity: 0.5,
  },
});

export const DetailsContent = styled("div", {
  display: "flex",
  flexWrap: "wrap",
  gap: "1rem",

  strong: {
    fontWeight: 500,
  },

  span: {
    fontWeight: 600,
  },

  variants: {
    column: {
      true: {
        flexDirection: "column",

        strong: {
          fontSize: "0.8rem",
        },
      },
    },
  },
});

export const ModalFooter = styled("div", {
  width: "100%",
  display: "flex",
  padding: "1rem",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "1rem",

  "@md": {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export const ModalFooterChips = styled(Chips, {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  gap: "0.5rem",
});

export const ModalFooterButtons = styled("div", {
  display: "flex",
  gap: "1rem",
  flexWrap: "wrap",
  justifyContent: "center",

  "@md": {
    flexDirection: "row",
    flexWrap: "nowrap",
  },
});

export const CopyButton = styled(Button, {
  position: "relative",
});

export const CopyTooltip = styled("div", {
  position: "absolute",
  top: "-2rem",
  left: "-1.25rem",
  display: "flex",
  backgroundColor: "$secondary",
  fontSize: "0.8rem",
  lineHeight: "0.75rem",
  padding: "0.25rem 0.5rem",
  borderRadius: "0.25rem",
});

export const CustomDialog = styled(Dialog, {
  backgroundColor: "$background",
  color: "$text",

  h2: {
    color: "$text",
  },
});

export const Message = styled("div", {
  width: "100%",
  display: "flex",
  justifyContent: "center",
});