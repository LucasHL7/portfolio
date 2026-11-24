import { styled } from "@mui/material";

const Tag = styled("span")(({ theme }) => ({
    display: "inline-block",
    padding: "2px 10px",
    borderRadius: 4,
    fontSize: "0.8rem",
    fontWeight: 500,
    color: theme.palette.text.primary,
    backgroundColor: "rgba(156, 162, 173, 0.12)",
}));

export default Tag;
