import { useQuery } from "@tanstack/react-query";
import { request } from "../../utils/query/axios-extend";

const useRQResource = (
  rqUniqueKey: any[],
  resourceUrl: string,
  actionTitle: string,
  rqOptions?: any
) => {
  let reactQuery = {
    queryKey: rqUniqueKey,
    queryFn: async () => {
      return request({
        url: resourceUrl,
        method: "get",
        actionTitle: actionTitle,
      });
    },
  };

  if (rqOptions)
    reactQuery = {
      ...reactQuery,
      ...rqOptions,
    };

  return useQuery(reactQuery);
};

export default useRQResource;
