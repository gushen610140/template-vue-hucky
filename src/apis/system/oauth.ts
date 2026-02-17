import { httpWithCustomReturn } from "@/utils/http";

export const loginByEmailPasswordWithOauthApi = ({ email, password }) => {
  return httpWithCustomReturn<{
    code: number;
    msg: string;
    data: {
      scope: string;
      access_token: string;
      refresh_token: string;
      token_type: string;
      expires_in: number;
    };
  }>({
    url: "/admin-api/system/oauth2/token",
    method: "POST",
    params: {
      grant_type: "password",
      username: email,
      password,
      client_id: "rc",
      client_secret: "rc",
    },
    headers: {
      "tenant-id": 1,
    },
  });
};
