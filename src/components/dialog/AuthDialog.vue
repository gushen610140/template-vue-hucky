<script setup lang="ts">
import { closeAuthDialog } from "@/hooks/dialog/renderAuthDialog";
import { AnimatePresence, motion } from "motion-v";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

const props = defineProps({
  defaultAuthFormType: {
    type: String as PropType<"login" | "register">,
    default: "login",
  },
});

const authFormType = ref<"login" | "register">(props.defaultAuthFormType);

const changeAuthFormType = (type: "login" | "register") => {
  authFormType.value = "";
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
</script>

<template>
  <div>
    <div class="fixed inset-0 flex items-center justify-center z-50">
      <AnimatePresence>
        <motion.div
          v-show="isNotClose"
          class="wrapper"
          :initial="{ opacity: 0, scale: 0 }"
          :animate="{ opacity: 1, scale: 1 }"
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
              <h2>
                {{ t("auth.login") }}
              </h2>
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
                    {{ t("auth.remember_me") }}
                  </label>
                  <a class="label" href="#">{{ t("auth.forget_password") }}</a>
                </div>
                <button
                  type="submit"
                  class="btn bg-primary text-primary-content"
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
              <h2>{{ t("auth.register") }}</h2>
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
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}

.wrapper {
  position: relative;
  width: 400px;
  height: 440px;
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
  width: 100%;
  padding: 40px;
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

.form-box h2 {
  font-size: 2em;
  text-align: center;
}

.input-box {
  position: relative;
  width: 100%;
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
  font-size: 1em;
  font-weight: 500;
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
