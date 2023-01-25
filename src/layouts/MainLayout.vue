<template>
  <q-layout view="lHh Lpr lFf" v-if="!isAuthenticated">
    <div class="header">
      <q-toolbar class="toolbar">
        <div class="row col-12">
          <div class="col-3">
            <q-img width="200px" height="50px" src="logo.webp"/>
          </div>
          <div class="col-6 self-center">
            <q-btn flat label="Home" class="q-mx-lg text-capitalize text-black"
            ></q-btn>
            <q-btn flat label="Pages" class="q-mx-lg text-capitalize text-black"
            ></q-btn>
            <q-btn flat label="Blog" class="q-mx-lg text-capitalize text-black"
            ></q-btn>
            <q-btn flat label="Content" class="q-mx-lg text-capitalize text-black"
            ></q-btn>
            <q-btn flat label="About Us" class="q-mx-lg text-capitalize text-black"
            ></q-btn>
          </div>
          <div class="col-3" dir="rtl">
            <q-btn label="Sign Up" class="login-btn text-capitalize text-black bg-white" rounded
            ></q-btn>

            <q-btn flat label="Sign In" class="q-mx-lg text-capitalize text-black"
            ></q-btn>
          </div>
        </div>


      </q-toolbar>
      <div class="row" style="margin: 50px">
        <div class="col-6">
          <h4 class="text-black">
            Registration
            <span style="color: #20c997">Form</span>
          </h4>
        </div>
        <div class="col-6" dir="rtl">
          <q-img fit="contain" style="border-radius: 50%" width="300px" height="200px" src="author-11.jpeg"/>
          <q-img fit="contain" style="border-radius: 50%" width="300px" height="200px" src="shape-24.png"/>
        </div>
      </div>
    </div>

    <q-page-container>
      <router-view/>
    </q-page-container>
  </q-layout>
  <q-layout v-if="isAuthenticated" view="lHh Lpr lFf">
    <div class="header">
    <q-toolbar class="toolbar">
      <div class="row col-12">
        <div class="col-3">
          <q-img width="200px" height="50px" src="logo.webp"/>
        </div>
        <div class="col-6 self-center">
          <q-btn flat label="Home" class="q-mx-lg text-capitalize text-black"
          ></q-btn>
          <q-btn flat label="All Courses" class="q-mx-lg text-capitalize text-black"
                 @click="$router.push('/all-courses')"
          ></q-btn>
          <q-btn flat label="My Courses" class="q-mx-lg text-capitalize text-black"
                 @click="$router.push('/user-courses')"
          ></q-btn>
          <q-btn flat label="Blog" class="q-mx-lg text-capitalize text-black"
          ></q-btn>
          <q-btn flat label="Content" class="q-mx-lg text-capitalize text-black"
          ></q-btn>
        </div>
        <div class="col-3" dir="rtl">
          <q-btn label="Log Out" class="login-btn text-capitalize text-black bg-white" rounded
                 @click="logout"
          ></q-btn>

        </div>
      </div>


    </q-toolbar>
    <div class="row" style="margin: 50px">
      <div class="col-6">
        <div style="color: #309255">
          start your favourite course
        </div>
        <h4 style="margin: 20px 0px" class="text-black">
          Now learning from anywhere, and build your
          <span style="color: #309255">bright career.</span>
        </h4>
        <div>
          It has survived not only five centuries but also the leap into electronic typesetting.
        </div>
        <q-btn label="Start A Course" class="course-btn text-capitalize" rounded
        ></q-btn>
      </div>
      <div class="col-6" dir="rtl">
        <q-img fit="contain" width="300px" height="200px" src="slider-1.png"/>
        <q-img fit="contain" width="300px" height="200px" src="shape-24.png"/>
      </div>
    </div>
  </div>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'
import { mapActions, mapGetters, mapState } from 'vuex'

export default defineComponent({
  name: 'MainLayout',

  //
  // ──────────────────────────────────────────────────────────
  //   :::::: M E T H O D S : :  :   :    :     :        :    :
  // ──────────────────────────────────────────────────────────
  //

  methods: {
    ...mapActions({
      logoutUser: 'auth/logoutUser'
    }),
    logout () {
      this.logoutUser().then(() => { this.$router.push('/') })
    }
  },

  //
  // ──────────────────────────────────────────────────────────────────
  //   :::::: C O M P U T E D : :  :   :    :     :        :          :
  // ──────────────────────────────────────────────────────────────────
  //

  computed: {
    ...mapState({
      isAuthenticated: (state) => state.auth.isAuthenticated
    }),
  },
})
</script>

<style>

.header {
  padding: 30px;
  height: 400px;
  background: #e7f8ee;
}
.header .toolbar {
  margin: 0px 50px;
  border: 1px solid rgba(48,146,85,0.25);
  border-radius: 15px;
  height: 80px;
  width: auto;
}
.header .toolbar .btn {
  width: 120px;
  border: #20c997;
}
.header .toolbar .login-btn {
  height: 55px;
  line-height: 56px;
  padding: 0 35px;
  border: 1px solid #309255;
  border-radius: 10px;
  background-color: #fff;
}
.header .course-btn {
  border-radius: 10px;
  background-color: #309255;
  color: white;
  margin-top: 30px;
}

</style>
