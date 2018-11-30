import axios from 'axios'

export const FETCH_GIPHY = 'FETCH_GIPHY'
export const FETCHING_ERROR = 'FETCHING_ERROR'

export const fetchGiphy = (giphy) => ({
  type: 'FETCH_GIPHY',
  giphy
})

export const fetchingError = (error) => ({
  type: FETCHING_ERROR,
  error: 'failed to fetch GIPHY'
})


export const fetching = () => async dispatch => {
  try {

  } catch (error) {
    console.log(error)
  }
}

