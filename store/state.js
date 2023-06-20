const initialState = {
  hi: 'Hola!',
  quoteList: [],
  quoteListUpdate: [],
  quoteListDelete: []
}

export default () => {
  return {
    ...initialState
  }
}