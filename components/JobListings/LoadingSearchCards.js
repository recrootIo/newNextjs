import { Card, CardContent, CardHeader, Skeleton } from "@mui/material";
import styles from "./joblistings.module.css";

const LoadingSearchCards = () => {
  return (
    <div>
      <Card className={styles.jobCard}>
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
        <CardContent sx={{ pt: 0 }} className={styles.searchCard}>
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
