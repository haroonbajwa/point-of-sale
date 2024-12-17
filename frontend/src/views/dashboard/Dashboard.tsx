import { Grid2 as Grid } from "@mui/material";
import StatCard, { StatCardProps } from "../../components/StatCard/StatCard";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import RecentInvoices from "./RecentInvoices/RecentInvoices";

const statsData: StatCardProps[] = [
  {
    title: "Total Sales",
    value: 12345,
    interval: "Last 30 days",
    trend: "up",
    data: [
      200, 24, 220, 260, 240, 380, 100, 240, 280, 240, 300, 340, 320, 360, 340,
      380, 360, 400, 380, 420, 400, 640, 340, 460, 440, 480, 460, 600, 880, 920,
    ],
  },
  {
    title: "Total Expense",
    value: 3243,
    interval: "Last 30 days",
    trend: "neutral",
    data: [
      200, 24, 220, 260, 240, 380, 100, 240, 280, 240, 300, 340, 320, 360, 340,
      380, 360, 400, 380, 420, 400, 640, 340, 460, 440, 480, 460, 600, 880, 920,
    ],
  },
  {
    title: "Payment Sent",
    value: 65920,
    interval: "Last 30 days",
    trend: "down",
    data: [
      920, 890, 910, 880, 860, 840, 800, 580, 640, 600, 740, 710, 690, 710, 640,
      660, 640, 620, 590, 610, 500, 560, 540, 500, 520, 420, 460, 440, 420, 400,
    ],
  },
  {
    title: "Payment Received",
    value: 72840,
    interval: "Last 30 days",
    trend: "up",
    data: [
      200, 24, 220, 260, 240, 380, 100, 240, 280, 240, 300, 340, 320, 360, 340,
      380, 360, 400, 380, 420, 400, 640, 340, 460, 440, 480, 460, 600, 880, 920,
    ],
  },
];

const Dashboard = () => {
  return (
    <>
      <Breadcrumb />
      <Grid container spacing={2}>
        {statsData.map((stat, index) => (
          <Grid size={{ xs: 12, md: 3 }} key={index}>
            <StatCard
              title={stat.title}
              value={stat.value}
              interval={stat.interval}
              trend={stat.trend}
              data={stat.data}
            />
          </Grid>
        ))}
      </Grid>
      <Grid mt={5}>
        <RecentInvoices />
      </Grid>
    </>
  );
};

export default Dashboard;
