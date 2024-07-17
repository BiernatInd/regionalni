<template>
  <header class="header">
    <nav class="nav">
      <div class="nav-logo">
        <img src="@assets/logo.png" alt="" />
      </div>
      <div class="nav-hamburger" @click="openMenu">
        <svg
          data-v-b49c92e3=""
          width="40"
          height="16"
          viewBox="0 0 40 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            data-v-b49c92e3=""
            width="40"
            height="3"
            rx="1.5"
            fill="#F5781E"
          ></rect>
          <rect
            data-v-b49c92e3=""
            x="20"
            y="13"
            width="20"
            height="3"
            rx="1.5"
            fill="#542B8B"
          ></rect>
        </svg>
      </div>
    </nav>
  </header>
  <div :class="['mobile-menu', { active: isActive }]">
    <div class="mobile-menu-content">
      <div class="mobile-menu-top">
        <div class="mobile-menu-logo">
          <img src="@assets/logo.png" alt="" />
        </div>
        <div class="mobile-menu-icon" @click="closeMenu">
          <svg
            data-v-b49c92e3=""
            width="26"
            height="31"
            viewBox="0 0 26 31"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              data-v-b49c92e3=""
              x="0.185867"
              y="28.24"
              width="36.8646"
              height="2.76485"
              rx="1.38242"
              transform="rotate(-50 0.185867 28.24)"
              fill="#542B8B"
            ></rect>
            <rect
              data-v-b49c92e3=""
              width="36.8646"
              height="2.76485"
              rx="1.38242"
              transform="matrix(-0.642788 -0.766044 -0.766044 0.642788 25.8141 28.3933)"
              fill="#F5781E"
            ></rect>
          </svg>
        </div>
      </div>
      <div class="mobile-menu-bottom">
        <div class="mobile-menu-link" @click="toggleBlog">
          <p>Blog</p>
          <svg
            :class="{ active: blogChild }"
            data-v-b49c92e3=""
            class="icon"
            width="18"
            height="10"
            viewBox="0 0 18 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              data-v-b49c92e3=""
              d="M1 0.999999L9 9L17 0.999998"
              stroke="#222222"
            ></path>
          </svg>
        </div>
        <div
          class="mobile-menu-link-child"
          v-if="blogChild"
          @click="redirectToBlogList"
        >
          <p>Lista wpisów</p>
        </div>
        <div
          class="mobile-menu-link-child"
          v-if="blogChild"
          @click="redirectToBlogAdd"
        >
          <p>Dodawanie wpisów</p>
        </div>
        <div class="mobile-menu-link" @click="toggleGallery">
          <p>Galeria</p>
          <svg
            :class="{ active: galleryChild }"
            data-v-b49c92e3=""
            class="icon"
            width="18"
            height="10"
            viewBox="0 0 18 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              data-v-b49c92e3=""
              d="M1 0.999999L9 9L17 0.999998"
              stroke="#222222"
            ></path>
          </svg>
        </div>
        <div
          class="mobile-menu-link-child"
          v-if="galleryChild"
          @click="redirectToGalleryList"
        >
          <p>Lista galerii</p>
        </div>
        <div
          class="mobile-menu-link-child"
          v-if="galleryChild"
          @click="redirectToGalleryAdd"
        >
          <p>Dodawanie galerii</p>
        </div>
        <div class="mobile-menu-link" @click="redirectToSettings">
          <p>Ustawienia konta</p>
        </div>
        <div class="mobile-menu-link" @click="logout">
          <p>Wyloguj się</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      isActive: false,
      blogChild: false,
      galleryChild: false,
    };
  },
  methods: {
    openMenu() {
      this.isActive = true;
    },
    closeMenu() {
      this.isActive = false;
    },
    toggleBlog() {
      this.blogChild = !this.blogChild;
    },
    toggleGallery() {
      this.galleryChild = !this.galleryChild;
    },
    redirectToBlogList() {
      this.$router.push("/blog-lista");
    },
    redirectToBlogAdd() {
      this.$router.push("/blog-dodaj");
    },
    redirectToGalleryList() {
      this.$router.push("/galeria-lista");
    },
    redirectToGalleryAdd() {
      this.$router.push("/galeria-dodaj");
    },
    redirectToSettings() {
      this.$router.push("/ustawienia-konta");
    },
    logout() {
      localStorage.clear();

      this.isLoggedIn = false;

      this.$router.push({ path: "/" });
    },
  },
};
</script>
<style lang="scss" scoped>
.header {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  position: fixed;
  width: 100%;
  max-width: 1920px;
  background-color: var(--white);
  border-bottom: 1px solid var(--shadow);
  .nav {
    width: 95%;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .nav-logo {
      display: flex;
      align-items: center;
      img {
        cursor: pointer;
      }
    }
    .nav-hamburger {
      cursor: pointer;
    }
  }
}

.mobile-menu {
  position: fixed;
  top: 0;
  right: -100%;
  background-color: var(--white);
  width: 25%;
  height: 100%;
  transition: 0.5s;
  z-index: 999;
  border-left: 1px solid var(--shadow);
  &.active {
    right: 0;
  }
  .mobile-menu-content {
    width: 90%;
    margin-left: auto;
    margin-right: auto;
    .mobile-menu-top {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .mobile-menu-logo {
        display: flex;
      }
      .mobile-menu-icon {
        cursor: pointer;
      }
    }
    .mobile-menu-bottom {
      .mobile-menu-link {
        padding-top: 0.5rem;
        padding-bottom: 0.5rem;
        border-bottom: 1px solid var(--shadow);
        margin-top: 0.5rem;
        margin-bottom: 0.5rem;
        transition: 0.5s;
        cursor: pointer;
        display: flex;
        justify-content: space-between;
        p {
          font-size: 16px;
          color: var(--black);
          text-decoration: none;
          transition: 0.5s;
        }
        .icon {
          transition: 0.5s;
          &.active {
            transform: rotate(180deg);
          }
        }
      }
      .mobile-menu-link-child {
        width: 95%;
        margin-left: auto;
        margin-right: auto;
        padding-top: 0.5rem;
        padding-bottom: 0.5rem;
        border-bottom: 1px solid var(--shadow);
        margin-top: 0.5rem;
        margin-bottom: 0.5rem;
        transition: 0.5s;
        cursor: pointer;
        display: flex;
        justify-content: space-between;
      }
    }
  }
}

@media screen and (max-width: 1200px) {
  .mobile-menu {
    width: 100%;
    overflow: auto;
  }
}
</style>
