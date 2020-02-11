<template web>
  <div class="w-page">
    <div class="w-container">
      <router-link tag="button" class="w-button" id="homeButton" to="/">Home</router-link> 
      <router-link tag="button" class="w-button" id="homeButton" to="/about">About</router-link> 
      <router-view />
    </div>
  </div>
</template>

<template native>
  <Page>
    <ActionBar :title="navbarTitle" />
    <GridLayout rows="auto, auto">
      <Button text="Home" @tap="goToHomePage" row="0" />
      <Button text="About" @tap="goToAboutPage" row="1" />
    </GridLayout>
  </Page>
</template>
<script>
const { VUE_APP_MODE } = process.env;
export default {
  data() {
    return {
      navbarTitle: `App.vue`
    };
  },
  methods: {
    goToHomePage() {
      this.goTo("home");
    },
    goToAboutPage() {
      this.goTo("about");
    },
    goTo(route) {
      VUE_APP_MODE === "web"
        ? this.$router.push(route)
        : this.$navigator.navigate(route);
    }
  }
};
</script>

<style web>
@import "~styles/style-one";

.w-page {
  height: 100%;
  width: 100%;
}
</style>
<style native>
@import "~styles/style-one";
</style>