import React, { useEffect, useState } from "react";
import useRQResource from "@/utils/query/useRQResource";
import Products from "@/components/products/Products";
import Split1to3View from "@/components/layout/Split1to3View";
import { Button, Typography } from "@mui/material";

import {
  QueryClient,
  keepPreviousData,
  useInfiniteQuery,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import Buttons from "@/components/products/Buttons";
import CircularProgress from "@mui/material/CircularProgress";
import ListTreeView from "@/components/treeView/ListTreeView";
import CustomTreeView from "@/components/treeView/CustomTreeView";
import { Tree } from "react-arborist";
import TreeViewComp from "@/components/treeView/TreeViewComp";
import { request } from "@/utils/query/axios-extend";

const Produkter = () => {
  const queryClient = useQueryClient();
  const [page, setPage] = useState(1);
  const [filters, setFilters] = useState<string[]>([]);
  const [filterQuery, setFilterQuery] = useState("");
  // const { data: products, isLoading } = useRQResource(
  //   ["products"],
  //   // ["products", page],
  //   // `http://localhost:1337/api/products?pagination[page]=${page}&pagination[pageSize]=20${filterQuery}`,
  //   `http://localhost:1337/api/products?`,
  //   "Retrieve products"
  //   // { placeholderData: keepPreviousData }
  // );
  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ["products", "filter"],
    queryFn: () =>
      request({
        url: "http://localhost:1337/api/products?" + filterQuery,
        method: "get",
      }),
  });

  useEffect(() => {
    console.log(filters?.length);
    console.log(filters);
    if (filters && filters?.length > 0) {
      const joinedFilterQuery = filters
        .map((item, index) => {
          return `&filters[Name][$contains][${index}]=${item}`;
        })
        .join("");
      console.log(joinedFilterQuery);

      setFilterQuery(joinedFilterQuery);
    }
  }, [filters]);
  useEffect(() => {
    refetch();
  }, [filters]);
  if (isLoading) return <CircularProgress />;

  return (
    <>
      <Typography variant="h4" className="mb-4 mt-2">
        Pasta, ris, nudler og potetmos
      </Typography>
      <Buttons setPage={setPage} page={page} />

      <Split1to3View>
        <TreeViewComp setFilters={setFilters} filters={filters} />
        <Products products={data?.data?.data} />
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
