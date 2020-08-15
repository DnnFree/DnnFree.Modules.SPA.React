import axios from 'axios'
import { useReducer, useEffect } from 'react'

const ACTIONS = {
  MAKE_REQUEST: 'make-request',
  GET_DATA: 'get-data',
  ERROR: 'error'
}

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.MAKE_REQUEST:
      return { loading: true, data: [] }
    case ACTIONS.GET_DATA:
      return { ...state, loading: false, data: action.payload.data }
    case ACTIONS.ERROR:
      return { ...state, loading: false, error: action.payload.error, data: [] }
    default:
      return state
  }
}

function getAntiForgeryValue() {
  return $('[name="__RequestVerificationToken"]').val()
}

export default function fetchApi ({mid, service, params}) {
  const [state, dispatch] = useReducer(reducer,{ data: [], loading: true })
  const BASE_URL = service.baseUrl + '/M/HelloWorld'

  axios.interceptors.request.use(function (config) {
    var afValue = getAntiForgeryValue()
    if (afValue) { 
      config.headers.common['RequestVerificationToken'] = afValue
    }

    config.headers.common['ModuleId'] = mid
    config.headers.common['TabId'] = service.framework.getTabId()

    return config
  })

  useEffect(() => {
    dispatch({ type: ACTIONS.MAKE_REQUEST })

    axios.get(BASE_URL, {
      params: { markdown: true, ...params },
    }).then(res => {
      dispatch({ type: ACTIONS.GET_DATA, payload: {data: res.data } })
    }).catch(e => {
      dispatch({ type: ACTIONS.ERROR, paload: {error: e} })
    })

  }, [params])

  return state
}