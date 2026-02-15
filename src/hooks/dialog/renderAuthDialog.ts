import AuthDialog from "@/components/dialog/AuthDialog.vue";
import i18n from "@/i18n";

export const renderAuthDialog = (defaultAuthFormType: "login" | "register") => {
  const authDialogContainer = document.createElement("div");
  authDialogContainer.id = "auth-dialog-container";

  document.body.appendChild(authDialogContainer);

  createApp(AuthDialog, {
    defaultAuthFormType,
  })
    .use(i18n)
    .mount(authDialogContainer);
};

export const closeAuthDialog = () => {
  const authDialogContainer = document.getElementById("auth-dialog-container");
  if (authDialogContainer) {
    authDialogContainer.remove();
  }
};
