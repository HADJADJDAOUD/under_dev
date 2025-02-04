import { AppSidebar } from "@/components/app-sidebar";
import { AreaChartInteractive } from "@/components/AreaChart";
import { DataTableDemo } from "@/components/DataTableDemo";

import { MyChart } from "@/components/MyChart";
import { RadialChart } from "@/components/RadialChart";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { useLocation } from "react-router-dom"; // Import the useLocation hook
import RadarC from "@/components/RadarC";
export default function Page() {
  const location = useLocation(); // Get the current route path
  const currentPath = location.pathname;

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="#">Dashboard</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>{currentPath}</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>

        {/* Conditional Rendering Based on Path */}
        {currentPath === "/age-of-visitors" && (
          <div className="h-full justify-center flex-col flex ">
            <RadialChart />
          </div>
        )}

        {currentPath === "/number-of-visitors-area" && (
          <div className=" justify-center flex-col flex h-full ">
            <AreaChartInteractive />
          </div>
        )}

        {currentPath === "/number-of-visitors-bar" && (
          <div className="  h-full ">
            <MyChart />
          </div>
        )}
        {currentPath === "/users" && (
          <div className="  h-full ">
            <DataTableDemo />
          </div>
        )}
         {currentPath === "/location" && (
          <div className="  h-full ">
            <RadarC />
          </div>
        )}
         

        {currentPath === "/" && (
          <div className="flex flex-1 flex-col h-full gap-4 p-4 pt-0">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-full w-full">
              {/* First row: Components stack on mobile, 3 columns on desktop */}
              <div className="w-full">
                <AreaChartInteractive />
              </div>
              <div className="w-full">
                <MyChart />
              </div>
              <div className="w-full ">
              <RadarC />
              </div>

              {/* Empty div for spacing to maintain structure in desktop view */}
              <div className="w-full"></div>

              {/* Second row: Full-width component across all columns */}
              <div className="col-span-1 md:col-span-3 h-full flex-1 rounded-xl bg-muted/50">
                <DataTableDemo />
          
              </div>
            </div>
         
          </div>
       
        )}
      </SidebarInset>
    </SidebarProvider>
  );
}
