// Material Dashboard 2 React Examples
import VerticalBarChart from "examples/Charts/BarCharts/VerticalBarChart";

<VerticalBarChart
    icon={{ color: "info", component: "leaderboard" }}
    title="Vertical Bar Chart"
    description="Sales related to age average"
    chart={{
        labels: ["16-20", "21-25", "26-30", "31-36", "36-42", "42+"],
        datasets: [{
            label: "Sales by age",
            color: "dark",
            data: [15, 20, 12, 60, 20, 15],
        }],
    }}
/>