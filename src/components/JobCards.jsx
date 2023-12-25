import { Box, Button, Grid, styled, Typography } from "@mui/material";
import { differenceInMinutes } from "date-fns";

const Wrapper = styled(Box)(({ theme }) => ({
  border: "1px solid #e8e8e8",
  cursor: "pointer",
  transition: ".3s",

  "&:hover": {
    boxShadow: "0px 5px 25px rgba(0,0,0,0.1)",
    borderLeft: "6px solid #4D64E4",
  },
}));

const CompanyName = styled(Typography)({
  fontSize: "13.5px",
  backgroundColor: "#18E1D9",
  padding: "6px",
  borderRadius: "5px",
  display: "inline-block",
  fontWeight: 600,
});

const SkillBox = styled(Grid)({
  marginRight: "4px",
  padding: "8px",
  borderRadius: "5px",
  fontSize: "14.5",
  transition: ".3s",
  fontWeight: 600,
  backgroundColor: "#0B0B15",
  color: "#fff",
});

const JobCards = (props) => {
  return (
    <Wrapper p={2}>
      <Grid container alignItems={"center"}>
        <Grid item xs>
          <Typography variant="subtitle1">{props.title} </Typography>
          <CompanyName variant="subtitle2">{props.companyName}</CompanyName>
        </Grid>
        <Grid item container xs>
          {props.skills.map((skill) => (
            <SkillBox key={skill} item>
              {skill}
            </SkillBox>
          ))}
        </Grid>
        <Grid item container xs direction={"column"} alignItems={"flex-end"}>
          <Grid item>
            <Typography variant="caption">
              {differenceInMinutes(Date.now(), props.postedOn)} min ago |{" "}
              {props.type} | {props.location}
            </Typography>
          </Grid>
          <Grid item>
            <Button variant="outlined">Check</Button>
          </Grid>
        </Grid>
      </Grid>
    </Wrapper>
  );
};

export default JobCards;
