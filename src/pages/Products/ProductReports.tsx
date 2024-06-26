import { useQuery } from "@tanstack/react-query";
import { handleGetProductReport } from "../../api/product";
import { Skeleton } from "../../components/reusable/Skeleton";
import InfoCard from "../../components/reusable/InfoCard";

const ProductReports = ({ categoriesLength }: { categoriesLength: number }) => {
  // get product reports
  const {
    data: productReports,
    isLoading: isReportLoading,
    isError: isReportError,
  } = useQuery({
    queryKey: ["productReports"],
    queryFn: handleGetProductReport,
  });

  if (isReportError) return null;
  return (
    <div className="flex gap-5">
      {isReportLoading ? (
        <>
          <Skeleton className="w-[269px] h-[100px] rounded-xl" />
          <Skeleton className="w-[269px] h-[100px] rounded-xl" />
          <Skeleton className="w-[269px] h-[100px] rounded-xl" />
          <Skeleton className="w-[269px] h-[100px] rounded-xl" />
        </>
      ) : (
        <>
          <InfoCard
            title="Total Products"
            data={productReports?.totalProducts ?? 0}
          />
          <InfoCard
            title="Products In Stock"
            data={productReports?.totalInStockProducts ?? 0}
          />
          <InfoCard
            title="Products Out Of Stock"
            data={productReports?.totalOutOfStockProducts ?? 0}
          />
          <InfoCard title="Total Categories" data={categoriesLength} />
        </>
      )}
    </div>
  );
};
export default ProductReports;
