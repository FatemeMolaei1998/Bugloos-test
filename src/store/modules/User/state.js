export default function () {
  return {
    getAllCoursesEndpoint: '',
    setUserCourseEndpoint: '',
    getUserCoursesEndpoint: '',

    allCourses: [],
    userCourses: [],

    //
    // ─── STATUS PROPERTIES ──────────────────────────────────────────────────────────
    //

    isFetchingAllCourses: false,
    isFetchingUserCourses: false,
    isSettingUserCourse: false,

    //
    // ─── ERROR PROPERTIES ───────────────────────────────────────────────────────────
    //

    errorFetchingAllCourses: null,
    errorFetchingUserCourses: null,
    errorSettingUserCourse: null,
  }
}
