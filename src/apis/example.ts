import http from "@/utils/http";

const url = "";

const data = {};

export const exampleApi = () => {
  return http({
    url,
    method: "POST",
    data,
  });
};
