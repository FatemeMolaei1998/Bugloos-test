import * as types from './mutation_types'
import { requestAllCourses } from "src/store/modules/User/actions";

export default {

  //
  // ─── GET ALL COURSES ───────────────────────────────────────────────────────────
  //

  [types.REQUEST_ALL_COURSES]: (state) => {
    state.isFetchingAllCourses = true
  },
  [types.RECEIVE_ALL_COURSES_SUCCESS]: (state, data) => {
    state.allCourses = data
    state.errorFetchingAllCourses = null
    state.isFetchingAllCourses = false
  },
  [types.REQUEST_ALL_COURSES_ERROR]: (state, error) => {
    state.errorFetchingAllCourses = error
    state.isFetchingAllCourses = false
  },

  //
  // ─── GET USER COURSE ───────────────────────────────────────────────────────────
  //

  [types.REQUEST_USER_COURSE]: (state) => {
    state.isFetchingUserCourses = true
  },
  [types.RECEIVE_USER_COURSE_SUCCESS]: (state, data) => {
    state.userCourses = data
    state.errorFetchingUserCourses = null
    state.isFetchingUserCourses = false
  },
  [types.REQUEST_USER_COURSE_ERROR]: (state, error) => {
    state.errorFetchingUserCourses = error
    state.isFetchingUserCourses = false
  },

  //
  // ─── SET COURSE ───────────────────────────────────────────────────────────
  //

  [types.REQUEST_SET_COURSE]: (state) => {
    state.isSettingUserCourse = true
  },
  [types.RECEIVE_SET_COURSE_SUCCESS]: (state, data) => {
    state.errorSettingUserCourse = null
    state.isSettingUserCourse = false
  },
  [types.REQUEST_SET_COURSE_ERROR]: (state, error) => {
    state.errorSettingUserCourse = error
    state.isSettingUserCourse = false
  },
}
