import {
  SET_HI, SET_QUOTELIST, SET_QUOTELIST_UPDATE
} from '~/store/mutations.types'

export default {
  [SET_HI] (state, value) {
    state.hi = value
  },
  [SET_QUOTELIST] (state, value) {
    state.quoteList = value
  },
  [SET_QUOTELIST_UPDATE] (state, value) {
    state.quoteListUpdate = value
  }
}