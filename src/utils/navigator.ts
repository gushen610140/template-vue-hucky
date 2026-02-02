import router from "@/router";

export const navigateTo = (path: string, replace?: boolean = false) => {
  if (path.startsWith("http")) {
    if (replace) {
      window.open(path, "_self");
    } else {
      window.open(path, "_blank");
    }
    return;
  }
  router.push(path);
};
