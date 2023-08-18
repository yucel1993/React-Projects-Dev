import { Card, Title, LineChart } from "@tremor/react";
import { useSelector } from "react-redux";



const dataFormatter = (number) =>
  `${Intl.NumberFormat("us").format(number).toString()}%`;

const Charts = () => {
const {sales}=useSelector((state)=>state.stock)

const salesData=sales?.map((item)=>({
    date:item.createds,
    quantity:item.quantity,
    price:item.price_total
}))

  return (
    <Card>
      <Title>Export/Import Growth Rates (1970 to 2021)</Title>
      <LineChart
        className="mt-6"
        data={salesData}
        index="date"
        categories={["Export Growth Rate", "Import Growth Rate"]}
        colors={["emerald", "gray"]}
        valueFormatter={dataFormatter}
        yAxisWidth={40}
      />
    </Card>
  );
};

export default Charts;
