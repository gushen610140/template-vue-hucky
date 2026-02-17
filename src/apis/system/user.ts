import { httpWithCustomReturn } from "@/utils/http";

export const getUserInfoApi = () => {
  return httpWithCustomReturn<{
    code: number;
    msg: string;
    data: {
      id: number;
      username: string;
      nickname: string;
      email: string;
      mobile: string;
      sex: number;
      avatar: string;
      loginIp: string;
      loginDate: null;
      createTime: number;
      roles: object[];
      dept: null;
      posts: null;
    };
  }>({
    url: "/admin-api/system/user/profile/get",
    method: "GET",
  });
};
