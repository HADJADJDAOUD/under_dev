"use client";

import { TrendingUp } from "lucide-react";
import { LabelList, RadialBar, RadialBarChart } from "recharts";
import { chartDataRadial } from "@/data/index.json";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";


const chartConfig = {
  visitors: {
    label: "Visitors-ages",
  },
  chrome: {
    label: "Chrome",
    color: "hsl(var(--chart-1))",
  },
  safari: {
    label: "Safari",
    color: "hsl(var(--chart-2))",
  },
  firefox: {
    label: "Firefox",
    color: "hsl(var(--chart-3))",
  },
  edge: {
    label: "Edge",
    color: "hsl(var(--chart-4))",
  },
  other: {
    label: "Other",
    color: "hsl(var(--chart-5))",
  },
} satisfies ChartConfig;

export function RadialChart() {
  return (
    <>
      <Card className="flex flex-col h-full">
        <CardHeader className="items-center pb-0">
          <CardTitle>the age of visitors </CardTitle>
          <CardDescription>January - June 2024</CardDescription>
        </CardHeader>
        <CardContent className="flex-1 pb-0">
          <ChartContainer
            config={chartConfig}
            className="mx-auto aspect-square h-full max-w-[400px]"  // Increase size here
          >
            <RadialBarChart
              data={chartDataRadial}
              startAngle={-90}
              endAngle={380}
              innerRadius={55}  // Increase inner radius
              outerRadius={145} // Increase outer radius
            >
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent hideLabel nameKey="browser" />}
              />
              <RadialBar dataKey="visitors" background>
                <LabelList
                  position="insideStart"
                  dataKey="browser"
                  className="fill-white capitalize mix-blend-luminosity"
                  fontSize={14}  // Increase font size for better readability
                />
              </RadialBar>
            </RadialBarChart>
          </ChartContainer>
        </CardContent>
        <CardFooter className="flex-col gap-2 text-sm mb-44">
          <div className="flex items-center gap-2 font-medium leading-none">
            Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
          </div>
          <div className="leading-none text-muted-foreground">
            Showing total visitors for the last 6 months
          </div>
        </CardFooter>
      </Card>
    </>
  );
}
