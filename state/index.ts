import { Env } from "../utils"

const configureStoreComponent = (() => {
  if (Env.NODE_ENV === "production") {
    return require("./store.prod")
  }
  return require("./store.dev")
})()

export const configureStore = configureStoreComponent
  