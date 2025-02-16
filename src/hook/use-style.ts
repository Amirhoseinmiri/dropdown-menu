import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    width: "100%",
  },
  dropdown: {
    position: "relative",
    display: "inline-block",
  },
  input: {
    padding: "8px",
    fontSize: "16px",
    width: "300px",
    border: "1px solid #ccc",
    borderRadius: "4px",
  },
  list: {
    position: "absolute",
    top: "100%",
    width: "100%",
    left: 0,
    right: 0,
    border: "1px solid #ccc",
    borderRadius: "4px",
    backgroundColor: "#fff",
    zIndex: 100,
    maxHeight: "200px",
    overflowY: "auto",
  },
  item: {
    padding: "8px",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#f0f0f0",
    },
  },
});
