<template>
  <div class="main">
    <router-view></router-view>
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap");
</style>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Montserrat", sans-serif;
  user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
}

body {
  background-color: var(--grey);
}

.main {
  max-width: 1920px;
  width: 100%;
  height: 100%;
  margin-inline: auto;
  background-color: var(--white);
}

:root {
  --black: #000000;
  --grey: #f5f5f5;
  --orange: #f5781e;
  --purple: #542b8b;
  --red: #ff0000;
  --shadow: #0000001a;
  --white: #ffffff;
}

@media screen and (max-width: 1024px) {
  .main {
    height: 100%;
  }
}
</style>
