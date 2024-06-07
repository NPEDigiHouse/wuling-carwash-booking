import { AreaChart, AreaChartProps } from "@mantine/charts";

const CustomAreaChart = ({ ...props }: AreaChartProps) => {
  return <AreaChart withDots={false} curveType="monotone" h={350} {...props} />;
};

export default CustomAreaChart;
