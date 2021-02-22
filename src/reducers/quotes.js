let idx
let quote
export default function quotes(state = [], action){

  switch(action.type){
    case 'ADD_QUOTE' :
      return state.concat(action.quote)
    case 'REMOVE_QUOTE' :
      return state.filter(q => q.id !== action.quoteId)
    case 'UPVOTE_QUOTE' :
      idx = state.findIndex(q => q.id === action.quoteId)
      quote = state[idx]
      return [
        ...state.slice(0, idx),
        Object.assign({}, quote, {votes: ++quote.votes}),
        ...state.slice(idx + 1)
      ]
    case 'DOWNVOTE_QUOTE' :
      idx = state.findIndex(q => q.id === action.quoteId)
      quote = state[idx]
      if (quote.votes > 0){
        return [...state.slice(0, idx), Object.assign({}, quote, {votes: --quote.votes}), ...state.slice(idx+1)]
      }
      return state
    default :
      return state;
  }
}
