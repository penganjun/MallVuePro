import * as API from './'

export default {
  list: params => {
    return API.POST('/getUser')
  },
}