<template>
  <header class="header">
    <nav class="nav">
      <div class="nav-logo">
        <router-link to="/" @click="scrollToHome">
          <img src="@assets/logo.png" alt="" />
        </router-link>
      </div>
      <div class="nav-menu">
        <div class="nav-menu-link">
          <router-link to="/" @click="scrollToHome">Strona główna</router-link>
        </div>
        <div class="nav-menu-link">
          <router-link to="/#project" @click="scrollToProject"
            >Projekty</router-link
          >
        </div>
        <div class="nav-menu-link">
          <router-link to="/#partner" @click="scrollToPartner"
            >Partnerzy</router-link
          >
        </div>
        <div class="nav-menu-link">
          <router-link to="/galeria">Galeria</router-link>
        </div>
        <div class="nav-menu-link">
          <router-link to="/dokumenty">Dokumenty</router-link>
        </div>
        <div class="nav-menu-link">
          <router-link to="/#company" @click="scrollToCompany"
            >O naszej firmie</router-link
          >
        </div>
        <div class="nav-menu-link">
          <router-link to="/blog">Blog</router-link>
        </div>
        <div class="nav-menu-link">
          <router-link to="/#contact" @click="scrollToContact"
            >Kontakt</router-link
          >
        </div>
        <div class="nav-menu-link">
          <svg
            data-v-d233760a=""
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="#000000"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              data-v-d233760a=""
              d="M24.2188 12.1094C24.2188 5.41992 18.7988 0 12.1094 0C5.41992 0 0 5.41992 0 12.1094C0 18.1533 4.42822 23.1631 10.2173 24.0723V15.6099H7.14111V12.1094H10.2173V9.44141C10.2173 6.40674 12.0239 4.73047 14.791 4.73047C16.1162 4.73047 17.502 4.9668 17.502 4.9668V7.94531H15.9746C14.4707 7.94531 14.0015 8.87891 14.0015 9.83643V12.1094H17.3599L16.8228 15.6099H14.0015V24.0723C19.7905 23.1631 24.2188 18.1533 24.2188 12.1094Z"
            ></path>
          </svg>
        </div>
      </div>
      <div class="nav-hamburger" @click="openMenu">
        <svg
          data-v-d233760a=""
          width="40"
          height="16"
          viewBox="0 0 40 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            data-v-d233760a=""
            width="40"
            height="3"
            rx="1.5"
            fill="#F5781E"
          ></rect>
          <rect
            data-v-d233760a=""
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
          <img src="@assets/logo.png" alt="" @click="scrollToHome" />
        </div>
        <div class="mobile-menu-icon" @click="closeMenu">
          <svg
            data-v-d233760a=""
            width="26"
            height="31"
            viewBox="0 0 26 31"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              data-v-d233760a=""
              x="0.185867"
              y="28.24"
              width="36.8646"
              height="2.76485"
              rx="1.38242"
              transform="rotate(-50 0.185867 28.24)"
              fill="#542B8B"
            ></rect>
            <rect
              data-v-d233760a=""
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
        <div class="mobile-menu-link" @click="scrollToHome">
          <p>Strona główna</p>
        </div>
        <div class="mobile-menu-link" @click="scrollToProject">
          <p>Projekty</p>
        </div>
        <div class="mobile-menu-link" @click="scrollToPartner">
          <p>Partnerzy</p>
        </div>
        <div class="mobile-menu-link" @click="redirectToGallery">
          <p>Galeria</p>
        </div>
        <div class="mobile-menu-link" @click="redirectToDocuments">
          <p>Dokumenty</p>
        </div>
        <div class="mobile-menu-link" @click="scrollToCompany">
          <p>O naszej firmie</p>
        </div>
        <div class="mobile-menu-link" @click="redirectToBlog">
          <p>Blog</p>
        </div>
        <div class="mobile-menu-link" @click="scrollToContact">
          <p>Kontakt</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VueScrollTo from "vue-scrollto";
export default {
  data() {
    return {
      isActive: false,
    };
  },
  methods: {
    openMenu() {
      this.isActive = true;
    },
    closeMenu() {
      this.isActive = false;
    },

    //Scrolling
    scrollToHome() {
      this.closeMenu();
      if (document.querySelector("#home")) {
        VueScrollTo.scrollTo("#home", 500, { easing: "ease-in-out" });
      }
      this.$router.push("/");
    },
    scrollToProject() {
      this.closeMenu();
      if (document.querySelector("#project")) {
        VueScrollTo.scrollTo("#project", 500, { easing: "ease-in-out" });
      }
      this.$router.push("/#project");
    },
    scrollToPartner() {
      this.closeMenu();
      if (document.querySelector("#partner")) {
        VueScrollTo.scrollTo("#partner", 500, { easing: "ease-in-out" });
      }
      this.$router.push("/#partner");
    },
    scrollToCompany() {
      this.closeMenu();
      if (document.querySelector("#company")) {
        VueScrollTo.scrollTo("#company", 500, { easing: "ease-in-out" });
      }
      this.$router.push("/#company");
    },
    scrollToContact() {
      this.closeMenu();
      if (document.querySelector("#contact")) {
        VueScrollTo.scrollTo("#contact", 500, { easing: "ease-in-out" });
      }
      this.$router.push("/#contact");
    },
    redirectToGallery() {
      this.$router.push("/galeria");
    },
    redirectToDocuments() {
      this.$router.push("/dokumenty");
    },
    redirectToBlog() {
      this.$router.push("/blog");
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
    }
    .nav-menu {
      display: flex;
      align-items: center;
      .nav-menu-link:not(:last-child) {
        margin-right: 2rem;
      }
      .nav-menu-link {
        a {
          font-size: 20px;
          text-decoration: none;
          color: var(--black);
          transition: 0.5s;
          font-weight: 400;
        }
      }
    }
    .nav-hamburger {
      display: none;
    }
  }
}
.mobile-menu {
  position: fixed;
  top: 0;
  right: -100%;
  background-color: var(--white);
  width: 100%;
  height: 100%;
  transition: 0.5s;
  z-index: 999;
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
        p {
          font-size: 16px;
          color: var(--black);
          transition: 0.5s;
        }
      }
    }
  }
}
@media screen and (max-width: 1500px) {
  .header {
    .nav {
      width: 90%;
      .nav-menu {
        .nav-menu-link:not(:last-child) {
          margin-right: 1rem;
        }
        .nav-menu-link {
          a {
            font-size: 16px;
          }
        }
      }
    }
  }
}

@media screen and (max-width: 1200px) {
  .header {
    .nav {
      .nav-menu {
        display: none;
      }
      .nav-hamburger {
        display: block;
        cursor: pointer;
      }
    }
  }
}
</style>
