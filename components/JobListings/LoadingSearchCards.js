import { Card, CardContent, CardHeader, Skeleton } from "@mui/material";

const LoadingSearchCards = () => {
  return (
    <div>
      <Card className="jobCard">
        <CardHeader
          avatar={<Skeleton variant="circular" width={40} height={40} />}
          titleTypographyProps={{
            fontSize: 18,
            fontWeight: "bold",
            color: "#034275",
          }}
          subheaderTypographyProps={{
            fontSize: 15,
            color: "#034275",
          }}
        />
        <CardContent sx={{ pt: 0 }} className="searchCard">
          <Skeleton />
          <Skeleton animation="wave" />
          <Skeleton />
          <Skeleton animation="wave" />
        </CardContent>
      </Card>
    </div>
  );
};

export default LoadingSearchCards;
