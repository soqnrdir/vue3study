<template>
    <div>
      <div id="google-signin-btn"></div>
    </div>
</template>
<script>
export default {
  mounted () {
    window.gapi.signin2.render('google-signin-btn', { onsuccess: this.onSignIn })
  },
  methods: {
    onSingIn (googleUser) {
      const profile = googleUser.getBasicProfile()
      console.log('ID: ' + profile.getId())
      console.log('Full Name: ' + profile.getName())

      // eslint-disable-next-line camelcase
      const id_token = googleUser.getAuthResponse().id_token
      // eslint-disable-next-line camelcase
      console.log('ID Token: ' + id_token)
    }
  }
}
</script>
