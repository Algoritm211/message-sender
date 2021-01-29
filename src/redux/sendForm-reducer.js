


// MESSAGE SCHEME
// emailFrom: ""
// emailTo: ""
// emailTopic: ""
// files: [File]
// firstNameFrom: ""
// firstNameTo: ""
// message: ""
// status
// id

const TOGGLE_LOADING = 'interview-sender/sendForm/TOGGLE_LOADING'
const SET_MESSAGE = 'interview-sender/sendForm/SET_MESSAGE'
const MESSAGE_SUCCESSFUL_SENT = 'interview-sender/sendForm/MESSAGE_SUCCESSFUL_SENT'

const initialState = {
  loading: false,
  messages: []
}


export const sendFormReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_LOADING: {
      return {
        ...state,
        loading: action.loading
      }
    }
    case SET_MESSAGE:
      return {
        ...state,
        messages: [...state.messages, action.message]
      }
    case MESSAGE_SUCCESSFUL_SENT:
      return {
        ...state,
        messages: state.messages.map(message => {
          if (message.id === action.id) {
            return {...message, status: 'completed'}
          }
          return message
        })
      }
    default:
      return state
  }
}


const actions = {
  toggleLoading(loading) {
    return {
      type: TOGGLE_LOADING,
      loading: loading
    }
  },

  setMessage(message) {
    return {
      type: SET_MESSAGE,
      message: message
    }
  },

  messageSuccessfulSent(id) {
    return {
      type: MESSAGE_SUCCESSFUL_SENT,
      id: id
    }
  }
}


export const addNewMessage = (messageObj) => async (dispatch) => {
  messageObj.status = 'pending'
  messageObj.id = Date.now()
  messageObj.date = new Date().toString().slice(4, 15)
  dispatch(actions.setMessage(messageObj))
  dispatch(actions.toggleLoading(true))
  setTimeout(() => {
    dispatch(actions.messageSuccessfulSent(messageObj.id))
    dispatch(actions.toggleLoading(false))
  }, 3000)
}