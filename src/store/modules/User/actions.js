import * as types from 'src/store/modules/User/mutation_types'
import { api } from 'boot/axios'
import * as Notify from 'assets/js/Notify'
import { REQUEST_ALL_COURSES } from "src/store/modules/User/mutation_types";
import user from "src/store/modules/User/index";

// Commented Codes are on a purpose
// so you can see how the code would be if there was a real server


//
// ─── GET ALL COURSES ────────────────────────────────────────────────────────────
//

export const requestAllCourses = ({ commit }) => commit(types.REQUEST_ALL_COURSES)

export const receiveAllCoursesSuccess = ({ commit }, data) =>
  commit(types.RECEIVE_ALL_COURSES_SUCCESS, data)

export const requestAllCoursesError = ({ commit }, error) =>
  commit(types.REQUEST_ALL_COURSES_ERROR, error)

export const getAllCourses = ({ state, dispatch }) => {
  // return new Promise((resolve, reject) => {
  //   dispatch('requestAllCourses')
  //   api
  //     .get(`${state.getAllCoursesEndpoint}`)
  //     .then((response) => {
  //       dispatch('receiveAllCoursesSuccess', response.data)
  //       resolve(response)
  //     })
  //     .catch((error) => {
  //       dispatch('requestAllCoursesError', error)
  //       reject(error ? (error.response ? error.response.data : error) : error)
  //     })
  // })

  const data = [
    {
      img: 'https://htmldemo.net/edule/eduLe/assets/images/courses/courses-01.jpg',
      instructor: 'Jason Williams',
      duration: '08 hr 15 mins',
      tag: 'Design',
      title: 'Data Science and Machine Learning with python - Hands On!',
      oldPrice: '$440.00',
      newPrice: '$385.00',
      star: 4,
      id: 0
    },
    {
      img: 'https://htmldemo.net/edule/eduLe/assets/images/courses/courses-01.jpg',
      instructor: 'Pamela Foster',
      duration: '08 hr 15 mins',
      tag: 'UI/UX Design',
      title: 'Create amazing color schemes for your UX design project',
      oldPrice: null,
      newPrice: '$385.00',
      star: 5,
      id: 1
    },
    {
      img: 'https://htmldemo.net/edule/eduLe/assets/images/courses/courses-01.jpg',
      instructor: 'Rose Simmons',
      duration: '08 hr 15 mins',
      tag: 'Development',
      title: 'culture & Leadership: Strategies for a Successful Business',
      oldPrice: '$440.00',
      newPrice: '$385.00',
      star: '4',
      id: 2
    },

    {
      img: 'https://htmldemo.net/edule/eduLe/assets/images/courses/courses-01.jpg',
      instructor: 'Jason Williams',
      duration: '08 hr 15 mins',
      tag: 'Data Science',
      title: 'Data Science and Machine Learning with python - Hands On!',
      oldPrice: '$440.00',
      newPrice: '$385.00',
      star: 3,
      id: 3
    },
    {
      img: 'https://htmldemo.net/edule/eduLe/assets/images/courses/courses-01.jpg',
      instructor: 'Pamela Foster',
      duration: '08 hr 15 mins',
      tag: 'Business',
      title: 'Create amazing color schemes for your UX design project',
      oldPrice: null,
      newPrice: '$385.00',
      star: 2,
      id: 4
    },
    {
      img: 'https://htmldemo.net/edule/eduLe/assets/images/courses/courses-01.jpg',
      instructor: 'Rose Simmons',
      duration: '08 hr 15 mins',
      tag: 'Financial',
      title: 'culture & Leadership: Strategies for a Successful Business',
      oldPrice: '$440.00',
      newPrice: '$385.00',
      star: 1,
      id: 5
    },
  ]

  return dispatch('receiveAllCoursesSuccess', data)
}

//
// ─── GET USER SALARIES ────────────────────────────────────────────────────────────
//

export const requestUserCourses = ({ commit }) => commit(types.REQUEST_USER_COURSE)

export const receiveUserCoursesSuccess = ({ commit }, data) =>
  commit(types.RECEIVE_USER_COURSE_SUCCESS, data)

export const requestUserCoursesError = ({ commit }, error) =>
  commit(types.REQUEST_USER_COURSE_ERROR, error)

export const getUserCourses = ({ state, dispatch }) => {
  // return new Promise((resolve, reject) => {
  //   dispatch('requestUserCourses')
  //   api
  //     .get(`${state.getUserCoursesEndpoint}`)
  //     .then((response) => {
  //       dispatch('receiveUserCoursesSuccess', response.data)
  //       resolve(response)
  //     })
  //     .catch((error) => {
  //       dispatch('requestUserCoursesError', error)
  //       reject(error ? (error.response ? error.response.data : error) : error)
  //     })
  // })
  let courses = JSON.parse(localStorage.getItem('user-courses'))
  dispatch('receiveUserCoursesSuccess', courses)
}

//
// ─── SET COURSE ────────────────────────────────────────────────────────────
//

export const requestSetCourse = ({ commit }) => commit(types.REQUEST_SET_COURSE)

export const receiveSetCourseSuccess = ({ commit }, data) =>
  commit(types.RECEIVE_SET_COURSE_SUCCESS, data)

export const requestSetCourseError = ({ commit }, error) =>
  commit(types.REQUEST_SET_COURSE_ERROR, error)

export const setCourse = ({ state, dispatch }, data) => {
  // return new Promise((resolve, reject) => {
    // dispatch('requestSetCourse')
    // api
    //   .put(`${state.setUserCourseEndpoint}${data.id}/`, data)
    //   .then((response) => {
    //     dispatch('receiveSetCourseSuccess', response.data)
    //     resolve(response)
    //   })
    //   .catch((error) => {
    //     if (error && error.response && error.response.status === 403) {
    //       Notify.notifyNegative('you do not have the permission to edit user')
    //     }
    //     dispatch('requestSetCourseError', error)
    //     reject(error ? (error.response ? error.response.data : error) : error)
    //   })
  // })
  let userCourses = []
  userCourses = localStorage.getItem('user-courses') ? JSON.parse(localStorage.getItem('user-courses')) : []
  userCourses.push(data)
  localStorage.setItem('user-courses', JSON.stringify(userCourses))
}
