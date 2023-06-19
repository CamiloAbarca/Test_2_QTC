import {
  SET_HI, SET_QUOTELIST
} from '~/store/mutations.types'

export default {
  [SET_HI] (state, value) {
    state.hi = value
  },
  [SET_QUOTELIST] (state, value) {
    state.quoteList = value
  }
}