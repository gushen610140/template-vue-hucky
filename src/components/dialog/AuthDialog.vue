<script setup lang="ts">
import { loginByEmailPasswordWithOauthApi } from "@/apis/system/oauth";
import { getUserInfoApi } from "@/apis/system/user";
import { getAuthQrcodeApi } from "@/apis/temp/auth-qrcode";
import { closeAuthDialog } from "@/hooks/dialog/renderAuthDialog";
import { useUserStore } from "@/stores/UserStore";
import { AnimatePresence, motion } from "motion-v";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

const props = defineProps({
  defaultAuthFormType: {
    type: String as PropType<"login" | "register">,
    default: "login",
  },
});

const authFormType = ref<"login" | "register" | "transition">(
  props.defaultAuthFormType,
);

const changeAuthFormType = (type: "login" | "register") => {
  authFormType.value = "transition";
  setTimeout(() => {
    authFormType.value = type;
  }, 300);
};

const isNotClose = ref(true);
const closeAuthDialogWaitAnim = () => {
  isNotClose.value = false;
  setTimeout(() => {
    closeAuthDialog();
  }, 500);
};

// 登录方式
const loginType = ref<"password" | "phone">("password");

// 登录二维码
const authQrcode = ref("");

onMounted(async () => {
  const qrImg = await getAuthQrcodeApi();
  authQrcode.value = URL.createObjectURL(qrImg);
});

// 控制登录表单宽度
const loginFormWidth = computed(() => {
  return authFormType.value === "login" ? "900px" : "550px";
});

// 登录表单数据绑定
const loginForm = reactive({
  email: "",
  password: "",
});

// 登录按钮点击事件
const clickLoginButtonEvent = async () => {
  const { email, password } = loginForm;
  if (!email || !password) {
    return;
  }
  const res = await loginByEmailPasswordWithOauthApi({
    email,
    password,
  });
  if (res.code === 0) {
    const store = useUserStore();
    store.setAccessToken(res.data.access_token);
    store.setRefreshToken(res.data.refresh_token);
    // 进一步获取用户信息
    const userInfoRes = await getUserInfoApi();
    store.setUserInfo(userInfoRes.data);
    closeAuthDialogWaitAnim();
  }
};
</script>

<template>
  <div>
    <div class="fixed inset-0 flex items-center justify-center z-50">
      <AnimatePresence>
        <motion.div
          v-show="isNotClose"
          class="wrapper"
          :initial="{ opacity: 0, scale: 0 }"
          :animate="{ opacity: 1, scale: 1, width: loginFormWidth }"
          :transition="{
            duration: 0.4,
            scale: { type: 'spring', visualDuration: 0.4, bounce: 0.5 },
          }"
          :exit="{
            opacity: 0,
            scale: 0.2,
          }"
        >
          <span
            class="icon-close bg-primary text-primary-content"
            @click="closeAuthDialogWaitAnim"
          >
            <span class="icon-[material-symbols--close-small]" />
          </span>

          <!-- 登录表单 -->
          <AnimatePresence>
            <motion.div
              v-if="authFormType === 'login'"
              class="form-box login"
              :initial="{
                y: -100,
                opacity: 0,
              }"
              :animate="{
                y: 0,
                opacity: 1,
              }"
              :transition="{
                duration: 0.3,
                scale: { type: 'spring', visualDuration: 0.3, bounce: 0.5 },
              }"
              :exit="{
                y: 100,
                opacity: 0,
              }"
            >
              <div class="flex items-center gap-16">
                <!-- 二维码登录区域 -->
                <div class="flex flex-col items-center gap-4 w-[200px]">
                  <div class="text-2xl select-none">
                    {{ t("auth.scan_qr") }}
                  </div>
                  <img
                    v-if="authQrcode"
                    :src="authQrcode"
                    alt="登录二维码"
                    class="h-48 w-48"
                  />
                  <div v-if="!authQrcode" class="skeleton h-48 w-48" />
                  <div class="text-sm text-gray-500 select-none">
                    {{ t("auth.scan_qr_more") }}
                  </div>
                </div>

                <div class="h-48 w-[1px] bg-gray-300/70" />

                <!-- 账号登录区域 -->
                <div>
                  <div class="flex justify-center items-center gap-3">
                    <div
                      class="text-2xl cursor-pointer transition duration-300"
                      :class="{ 'text-gray-400': loginType === 'phone' }"
                      :transition="{
                        duration: 0.3,
                      }"
                      @click="loginType = 'password'"
                    >
                      {{ t("auth.login_password") }}
                    </div>
                    <div class="h-8 w-[1px] bg-gray-300/70" />

                    <!-- 注册暂未开放 -->
                    <div class="tooltip">
                      <div class="tooltip-content">
                        <div class="font-black">{{ t("auth.not_open") }}</div>
                      </div>
                      <div
                        class="text-2xl cursor-pointer transition duration-300"
                        :class="{ 'text-gray-400': loginType === 'password' }"
                        :transition="{
                          duration: 0.3,
                        }"
                      >
                        {{ t("auth.login_phone") }}
                      </div>
                    </div>
                  </div>

                  <!-- 表单区域 -->
                  <form action="#">
                    <div class="input-box">
                      <span class="icon">
                        <span class="icon-[material-symbols--mail-outline]" />
                      </span>
                      <input v-model="loginForm.email" type="text" required />
                      <label>{{ t("auth.email") }}</label>
                    </div>
                    <div class="input-box">
                      <span class="icon">
                        <span class="icon-[material-symbols--lock-outline]" />
                      </span>
                      <input
                        v-model="loginForm.password"
                        type="password"
                        required
                      />
                      <label>{{ t("auth.password") }}</label>
                    </div>

                    <div class="remember-forgot">
                      <label class="label">
                        <input type="checkbox" class="checkbox checkbox-xs" />
                        {{ t("auth.remember_me") }}
                      </label>
                      <a class="label" href="#">{{
                        t("auth.forget_password")
                      }}</a>
                    </div>
                    <button
                      class="btn bg-primary text-primary-content"
                      @click="clickLoginButtonEvent"
                    >
                      {{ t("auth.login") }}
                    </button>
                    <div
                      class="login-register"
                      @click="changeAuthFormType('register')"
                    >
                      <p>
                        {{ t("auth.no_account") }}
                        <a class="register-link cursor-pointer">
                          {{ t("auth.register") }}
                        </a>
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <!-- 注册表单 -->
          <AnimatePresence>
            <motion.div
              v-if="authFormType === 'register'"
              class="form-box register"
              :initial="{
                y: -100,
                opacity: 0,
              }"
              :animate="{
                y: 0,
                opacity: 1,
              }"
              :transition="{
                duration: 0.3,
                scale: { type: 'spring', visualDuration: 0.3, bounce: 0.5 },
              }"
              :exit="{
                y: 100,
                opacity: 0,
              }"
            >
              <div class="flex justify-center items-center gap-3">
                <div class="text-2xl cursor-pointer">
                  {{ t("auth.register") }}
                </div>
              </div>
              <form action="#">
                <div class="input-box">
                  <span class="icon">
                    <span class="icon-[material-symbols--mail-outline]" />
                  </span>
                  <input type="text" required />
                  <label>{{ t("auth.email") }}</label>
                </div>

                <div class="input-box">
                  <span class="icon">
                    <span class="icon-[material-symbols--lock-outline]" />
                  </span>
                  <input type="password" required />
                  <label>{{ t("auth.password") }}</label>
                </div>

                <div class="remember-forgot">
                  <label class="label">
                    <input type="checkbox" class="checkbox checkbox-xs" />
                    {{ t("auth.agree_terms") }}
                  </label>
                </div>
                <button
                  type="submit"
                  class="btn bg-primary text-primary-content"
                >
                  {{ t("auth.register") }}
                </button>
                <div
                  class="login-register"
                  @click="changeAuthFormType('login')"
                >
                  <p>
                    {{ t("auth.have_account") }}
                    <a class="login-link cursor-pointer">
                      {{ t("auth.login") }}
                    </a>
                  </p>
                </div>
              </form>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </AnimatePresence>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  height: 430px;
  position: relative;
  background: transparent;
  border: 2px solid rgba(255, 255, 255, 0.5);
  border-radius: 20px;
  backdrop-filter: blur(20px);
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.wrapper .form-box {
  padding: 40px 80px;
}

.wrapper .icon-close {
  position: absolute;
  top: 0;
  right: 0;
  width: 45px;
  height: 45px;
  font-size: 2em;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom-left-radius: 20px;
  cursor: pointer;
  z-index: 1;
}

.input-box {
  position: relative;
  width: 350px;
  height: 50px;
  border-bottom: 2px solid;
  margin: 30px 0;
}

.input-box label {
  position: absolute;
  top: 50%;
  left: 5px;
  transform: translateY(-50%);
  font-size: 1em;
  font-weight: 500;
  pointer-events: none;
  transition: 0.5s;
}

.input-box input:focus ~ label,
.input-box input:valid ~ label {
  top: -5px;
}

.input-box input {
  width: 100%;
  height: 100%;
  background: transparent;
  border: none;
  outline: none;
  font-size: 1em;
  font-weight: 600;
  padding: 0 35px 0 5px;
}

.input-box .icon {
  position: absolute;
  right: 8px;
  font-size: 1.2rem;
  line-height: 57px;
}

.remember-forgot {
  font-size: 0.9em;
  font-weight: 500;
  margin: -15px 0 15px;
  display: flex;
  justify-content: space-between;
}

.remember-forgot label input {
  margin-right: 3px;
}
.remember-forgot a {
  text-decoration: none;
}

.remember-forgot a:hover {
  text-decoration: underline;
}

.btn {
  width: 100%;
  height: 45px;
  border: none;
  outline: none;
  border-radius: 6px;
  cursor: pointer;
}

.login-register {
  font-size: 0.9em;
  text-align: center;
  font-weight: 500;
  margin: 25px 0 10px;
}

.login-register p a {
  text-decoration: none;
  font-weight: 600;
}

.login-register p a:hover {
  text-decoration: underline;
}
</style>
