import { useQuery } from "@tanstack/react-query";

import { getQueryKey } from "../common/utils";

const GET_LISTS_URL = "http://localhost:4000/lists";

const getLists = (signal) => {
  return fetch(GET_LISTS_URL, {
    signal,
  }).then((res) => res.json());
};

export const useListsQuery = () => {
  const queryKey = getQueryKey("lists");
  return useQuery(queryKey, ({ signal }) => getLists(signal));
};
