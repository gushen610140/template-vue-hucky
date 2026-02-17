import { ref } from "vue";
import { defineStore } from "pinia";

export interface UserInfo {
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
}

export const useUserStore = defineStore(
  "user",
  () => {
    const accessToken = ref("");
    const refreshToken = ref("");

    const setAccessToken = (newToken: string) => {
      accessToken.value = newToken;
    };

    const setRefreshToken = (newToken: string) => {
      refreshToken.value = newToken;
    };

    const userInfo = ref<UserInfo>({
      id: 0,
      username: "",
      nickname: "",
      email: "",
      mobile: "",
      sex: 0,
      avatar: "",
      loginIp: "",
      loginDate: null,
      createTime: 0,
      roles: [],
      dept: null,
      posts: null,
    });

    const setUserInfo = (newInfo: UserInfo) => {
      userInfo.value = newInfo;
    };

    const checkUserLogin = () => {
      return accessToken.value !== "";
    };

    const clearUserInfo = () => {
      accessToken.value = "";
      refreshToken.value = "";
      userInfo.value = {
        id: 0,
        username: "",
        nickname: "",
        email: "",
        mobile: "",
        sex: 0,
        avatar: "",
        loginIp: "",
        loginDate: null,
        createTime: 0,
        roles: [],
        dept: null,
        posts: null,
      };
    };

    return {
      accessToken,
      setAccessToken,
      refreshToken,
      setRefreshToken,
      userInfo,
      setUserInfo,
      checkUserLogin,
      clearUserInfo,
    };
  },
  {
    persist: true,
  },
);
