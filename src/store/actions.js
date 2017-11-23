import * as ajax from '../api'
import url from '../api/url'

export default {
  REQ_TOP_DATA: ({ commit, dispatch }, { type, currentType, currentSort, model }) => {
    commit('SET_ACTIVE_TYPE', { type })

    switch (currentType) {
      case 'movie': {
        if (currentSort === 'top') {
          return ajax.get({
            url: url.TOP_MOVIE,
            data: model
          }).then(data => {
            commit('SET_TOP_LIST', { data, currentType })
            commit('SET_TOTAL_PAGE', { data: data.data.totalPages })
          })
        }
        if (currentSort === 'new') {
          return ajax.get({
            url: url.NEW_MOVIE,
            data: model
          }).then(data => {
            commit('SET_TOP_LIST', { data, currentType })
            commit('SET_TOTAL_PAGE', { data: data.data.totalPages })
          })
        }
        break
      }

      case 'animation': {
        if (currentSort === 'top') {
          return ajax.get({
              url: url.TOP_ANIMATION,
              data: model
            }).then(data => {
              commit('SET_TOP_LIST', { data, currentType })
              commit('SET_TOTAL_PAGE', { data: data.data.totalPages })
            })
        }
        if (currentSort === 'new') {
          return ajax.get({
            url: url.NEW_ANIMATION,
            data: model
          }).then(data => {
            commit('SET_TOP_LIST', { data, currentType })
            commit('SET_TOTAL_PAGE', { data: data.data.totalPages })
          })
        }
        break
      }

      case 'cam': {
        return ajax.get({
            url: url.TOP_CAM
          }).then(data => {
            commit('SET_TOP_LIST', { data, currentType })
            commit('SET_TOTAL_PAGE', { data: data.data.totalPages })
          })
        break
      }

      case 'tv': {
        if (currentSort === 'top') {
          return ajax.get({
              url: url.TOP_TV,
              data: model
            }).then(data => {
              commit('SET_TOP_LIST', { data, currentType })
              commit('SET_TOTAL_PAGE', { data: data.data.totalPages })
            })
        }
        if (currentSort === 'new') {
          return ajax.get({
            url: url.NEW_TV,
            data: model
          }).then(data => {
            commit('SET_TOP_LIST', { data, currentType })
            commit('SET_TOTAL_PAGE', { data: data.data.totalPages })
          })
        }
        break
      }

      case 'article': {
        if (currentSort === 'top') {
          return ajax.get({
            url: url.TOP_ARTICLE,
            data: model
          }).then(data => {
            commit('SET_TOP_LIST', { data, currentType })
            commit('SET_TOTAL_PAGE', { data: data.data.totalPages })
          })
        }
        if (currentSort === 'new') {
          return ajax.get({
            url: url.NEW_ARTICLE,
            data: model
          }).then(data => {
            commit('SET_TOP_LIST', { data, currentType })
            commit('SET_TOTAL_PAGE', { data: data.data.totalPages })
          })
        }
        break
      }

      default:
        break
    }
  },

  REQ_VIDEO_URL: ({ commit, dispatch }, { data }) => {
    return ajax.get({
      url: url.VIDEO_PLAY,
      data: {
        url: data
      }
    }).then(data => {
      commit('SET_VIDEO_URL', { data: data.data })
    })
  },

  SET_AUTHORIZATION: ({ commit, dispatch }, { data }) => {
    commit('SET_AUTHORIZATION', { data })
  },

  SET_USERID: ({ commit, dispatch }, { data }) => {
    commit('SET_USERID', { data })
  },

  SET_USER: ({ commit, dispatch }, { data }) => {
    commit('SET_USER', { data })
  },

  REMOVE_USER: ({ commit, dispatch }) => {
    commit('REMOVE_USER')
  },

  SET_ITEMDATA: ({ commit, dispatch }, { data }) => {
    commit('SET_ITEMDATA', { data })
  },

  REQ_USER_INFO: ({ commit, dispatch }, { authorization }) => {
    return ajax.get({
      url: url.USER_INFO,
      authorization: authorization
    }).then(data => {
      commit('SET_USER', { data: data.data })
    })
  },

  SWITCH_TYPE: ({ commit, dispatch }, { type }) => {
    commit('SWITCH_TYPE', { type })
  }
}
