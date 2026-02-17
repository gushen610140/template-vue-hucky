<script setup lang="ts">
import { renderAuthDialog } from "@/hooks/dialog/renderAuthDialog";
import { useUserStore } from "@/stores/UserStore";

// 用户 store
const userStore = useUserStore();

const dropdownVisible = ref(true);

const closeDropdown = () => {
  dropdownVisible.value = false;
  setTimeout(() => {
    dropdownVisible.value = true;
  }, 300);
};

// 退出登录
const handleLogout = () => {
  userStore.clearUserInfo();
};
</script>

<template>
  <div class="dropdown dropdown-hover dropdown-end">
    <div
      v-if="!userStore.checkUserLogin()"
      role="button"
      class="btn btn-circle btn-sm btn-ghost px-3 w-16"
      @click="
        renderAuthDialog('login');
        closeDropdown();
      "
    >
      <span class="text-sm text-base-content/70">
        {{ $t("nav.login") }}
      </span>
    </div>
    <div
      v-else
      role="button"
      class="text-sm text-base-content/70 px-3 cursor-pointer"
    >
      {{ userStore.userInfo?.nickname || userStore.userInfo?.username }}
    </div>

    <!-- 未登录用户下拉框 -->
    <ul
      v-if="dropdownVisible && !userStore.checkUserLogin()"
      tabindex="-1"
      class="dropdown-content z-1 w-100 p-2"
    >
      <div class="card bg-base-200 w-96 mt-4 shadow-sm">
        <div class="card-body">
          <h2 class="card-title">现在加入!</h2>
          <p>登录我们的系统</p>
          <div class="card-actions justify-end">
            <button
              class="btn btn-sm"
              @click="
                renderAuthDialog('register');
                closeDropdown();
              "
            >
              {{ $t("nav.register") }}
            </button>
            <button
              class="btn btn-primary btn-sm"
              @click="
                renderAuthDialog('login');
                closeDropdown();
              "
            >
              {{ $t("nav.login") }}
            </button>
          </div>
        </div>
      </div>
    </ul>

    <!-- 已登录用户下拉框 -->
    <ul
      v-if="dropdownVisible && userStore.checkUserLogin()"
      tabindex="-1"
      class="dropdown-content z-1 w-100 p-2"
    >
      <div class="card bg-base-200 w-96 mt-4 shadow-sm">
        <div class="card-body">
          <h2 class="card-title">退出登录</h2>
          <p>切换您的账号</p>
          <div class="card-actions justify-end">
            <button class="btn btn-primary btn-sm" @click="handleLogout">
              {{ $t("nav.logout") }}
            </button>
          </div>
        </div>
      </div>
    </ul>

    <!-- 登录弹窗 -->
    <dialog id="my_modal" class="modal">
      <div class="modal-box">
        <h3 class="text-lg font-bold">Hello!</h3>
        <p class="py-4">Press ESC key or click outside to close</p>
      </div>
      <form method="dialog" class="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  </div>
</template>

<style scoped></style>
