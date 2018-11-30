import { FETCH_GIPHY } from '../actions/fetching'

const initialState = {
  gifs: [
    {
      id: 1,
      url: 'http://fakeimg.pl/300/',

    },
    {
      id: 2,
      url: 'http://fakeimg.pl/300/',

    },
    {
      id: 3,
      url: 'http://fakeimg.pl/300/',
    }
  ]
}

const fetchReducer = (state = initialState, action) => {
  // switch (action.type) {
  //   case FETCH_GIPHY:
  //     return {
  //       ...state,
  //       gifs: action.giphy.body.data
  //     }
  //   default:
  return state
  // }
}

export default fetchReducer;
