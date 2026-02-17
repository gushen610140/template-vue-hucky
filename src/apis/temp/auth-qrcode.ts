import { httpWithCustomReturn } from "@/utils/http";

/**
 *
 * @returns 直接返回图片二进制数据
 */
export const getAuthQrcodeApi = () => {
  return httpWithCustomReturn<Blob>({
    url: "https://api.qrtool.cn",
    method: "get",
    responseType: "blob",
    params: {
      text: "测试",
      size: 600,
    },
  });
};
