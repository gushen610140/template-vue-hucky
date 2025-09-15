import { createEventHook } from "@vueuse/core";

export interface ChangeUserBus {
  token: string;
}

export const changeUserEvent = createEventHook<ChangeUserBus>();

/**
 * This is an example, please remove if not needed
 */
export const changeUserBus = {
  emit: changeUserEvent.emit,
  on: changeUserEvent.on,
  off: changeUserEvent.off,
};
