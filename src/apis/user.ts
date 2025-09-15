import http from "../utils/http";

/**
 * This is an example, please remove if not needed
 */
export const getUserList = () => {
  return http({
    url: "/user/list",
    method: "get",
  });
};

export const insertUser = (data: { account: string; passowrd: string }) => {
  return http({
    url: "/user/insert",
    method: "post",
    data,
  });
};
