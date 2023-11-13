import React, { useState } from "react";
import useRQResource from "@/utils/query/useRQResource";
import Products from "@/components/products/Products";
import TreeView from "@/components/treeView/TreeView";
import Split1to3View from "@/components/layout/Split1to3View";
import { Button, Typography } from "@mui/material";
import {
  keepPreviousData,
  useInfiniteQuery,
  useQuery,
} from "@tanstack/react-query";
import Buttons from "@/components/products/Buttons";
import CircularProgress from "@mui/material/CircularProgress";
import ListTreeView from "@/components/treeView/ListTreeView";
import CustomTreeView from "@/components/treeView/CustomTreeView";

const Produkter = () => {
  const [page, setPage] = useState(1);
  const [filters, setFilters] = useState<String[]>([]);
  const { data: products, isLoading } = useRQResource(
    ["products", page],
    `http://localhost:1337/api/products?filters[id][$in][0]=3&filters[id][$in][1]=6&filters[id][$in][2]=8&pagination[page]=${page}&pagination[pageSize]=20`,
    "Retrieve products",
    { placeholderData: keepPreviousData }
  );
  console.log(products);
  if (isLoading) return <CircularProgress />;

  return (
    <>
      <Typography variant="h4" className="mb-4 mt-2">
        Pasta, ris, nudler og potetmos
      </Typography>
      <Buttons setPage={setPage} page={page} />
      <Split1to3View>
        <CustomTreeView />
        {/* <TreeView setFilters={setFilters} /> */}
        {/* <ListTreeView /> */}
        <Products products={products?.data?.data} />
      </Split1to3View>
      <Buttons setPage={setPage} page={page} />
    </>
  );
};
export default Produkter;

// const fetchProjects = async () => {
//   const res = await fetch(
//     `http://localhost:1337/api/products?pagination[page]=${page}&pagination[pageSize]=20` +
//       page
//   );
//   return res.json();
// };
// const {
//   data: products,
//   error,
//   fetchNextPage,
//   hasNextPage,
//   isFetching,
//   isFetchingNextPage,
//   status,
// } = useInfiniteQuery({
//   queryKey: ["projects", page],
//   queryFn: fetchProjects,
//   initialPageParam: 0,
//   getNextPageParam: (lastPage, pages) => lastPage.nextCursor,
// });
