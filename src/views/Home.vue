<template>
  <div class="home">
    <h1>
      Welcome to the UTAPug Community
    </h1>
    <p>Before you join a UTA pug, it's useful to have these things in order.
      The first step is to <a href="https://forums.utassault.net">create a forum/player account.</a>
      Once you've done that and logged in, head on over to the <a href="https://forums.utassault.net/uta-auth-config.php">UTA Auth configuration page.</a>
      You will need to set a password/passphrase in order to join the pug servers and for <a href="https://www.utassault.net/pugstats/?p=utapugrecent">stats</a> to be recorded.
      <br>Remember to save your changes. <br><br>
      <img src="@/forums-auth.jpg" alt="UTA Auth config">
    </p>
    <p>
      Next up is to configure your League Assault 140 in the game. If you are new to the maps, it is recommended you turn 'FortStandards' on.
      <br>This will show flags where the objectives are on the map. <br> <br>
      <img src="@/UTALeagueAssault-flags.jpg" alt="UTA League Assault 140 config">

    </p>
  </div>
</template>

<style scoped>
.home {
  max-width: 1400px;
  margin: 0 auto;
}
.destinations {
  display: flex;
  justify-content: space-between;
}

p{
  padding: 10px;
}

a {
  color: lightseagreen;
  text-decoration: none;
}
a:hover,
a:visited {
  text-decoration: underline;
}
</style>
