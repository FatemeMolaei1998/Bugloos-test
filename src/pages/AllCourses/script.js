import { mapGetters, mapActions, mapState } from "vuex";

export default {
  name: 'AllCoursesPage',

  //
  // ──────────────────────────────────────────────────────────
  //   :::::: D A T A : :  :   :    :     :        :          :
  // ──────────────────────────────────────────────────────────
  //

  data: () => {
    return {
      courseSearch: '',
      slide: '1',
      filterCourses: 'None',
    }
  },

  //
  // ──────────────────────────────────────────────────────────
  //   :::::: M E T H O D S : :  :   :    :     :        :    :
  // ──────────────────────────────────────────────────────────
  //

  methods: {
    ...mapActions({
      getAllCourses: 'user/getAllCourses',
      setUserCourse: 'user/setCourse'
    }),

    //
    // ─── set a course for user ──────────────────────────────────────────────────────
    //

    setCourseForUser(course) {
      this.setUserCourse(course).then((res) => {
        this.$router.push('/user-courses')
      })
    }

  },

  //
  // ──────────────────────────────────────────────────────────────────
  //   :::::: C O M P U T E D : :  :   :    :     :        :          :
  // ──────────────────────────────────────────────────────────────────
  //

  computed: {
    ...mapState({
      allCourses: (state) => state.user.allCourses
    }),

    //
    // ─── filter courses ──────────────────────────────────────────────────────
    //

    courseList () {
      let filteredCourses = []
      if (this.filterCourses !== 'None') {
        filteredCourses = this.allCourses.filter(item => item.tag === this.filterCourses)
      } else {
        filteredCourses = this.allCourses
      }
      if (this.courseSearch !== '') {
        filteredCourses = filteredCourses.filter(item => item.title.toLowerCase().includes(this.courseSearch))
      }
      return filteredCourses
    }

  },

  //
  // ──────────────────────────────────────────────────────────────────
  //   :::::: M O U N T E D : :  :   :    :     :        :          :
  // ──────────────────────────────────────────────────────────────────
  //

  mounted () {
    this.getAllCourses().then(() => {
    })
  }
}
