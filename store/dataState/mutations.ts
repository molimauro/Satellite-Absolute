import { NuxtState } from '@nuxt/types/app'
import { DataStateType } from './state'
const mutations = {
  setDataState(
    state: NuxtState,
    { key, value }: { key: string; value: DataStateType }
  ) {
    state.dataState = {
      ...state.dataState,
      [key]: value,
    }
  },
}

export default mutations