<template>
  <AdminHeader />
  <div class="home">
    <div class="home-content">
      <div class="home-heading">
        <h1>Ustawienia konta</h1>
      </div>
      <div class="home-main">
        <div class="home-left">
          <h2>Aktualne dane konta</h2>
          <p>
            Nazwa użytkownika:
            {{ admin && admin.user_name ? admin.user_name : "Brak danych" }}
          </p>
          <p>
            Adres E-mail:
            {{ admin && admin.email ? admin.email : "Brak danych" }}
          </p>
        </div>
        <div class="home-right">
          <h2>Zmiana danych</h2>
          <div class="home-right-links">
            <router-link
              v-if="admin && admin.user_name"
              :to="{
                name: 'change-email',
                params: { user_name: admin.user_name },
              }"
            >
              Zmień adres E-mail
            </router-link>
            <router-link
              v-if="admin && admin.user_name"
              :to="{
                name: 'change-password',
                params: { user_name: admin.user_name },
              }"
            >
              Zmień hasło
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
  <AdminFooter />
</template>

<script>
import AdminHeader from "@components/admin-header.vue";
import AdminFooter from "@components/admin-footer.vue";
import axios from "axios";

export default {
  components: {
    AdminHeader,
    AdminFooter,
  },
  data() {
    return {
      admin: [],
    };
  },
  methods: {
    fetchData() {
      axios
        .get("http://localhost:8000/admin-settings-account")
        .then((response) => {
          console.log(response.data); // Ensure response.data structure here
          this.admin = response.data; // Assign response.data directly
        })
        .catch((error) => {
          console.error("Błąd pobierania danych:", error);
        });
    },
    checkUserRole() {
      const userRole = localStorage.getItem("userRole");

      if (userRole !== "admin") {
        this.$router.push("/logowanie");
      }
    },
  },
  mounted() {
    this.checkUserRole();
    this.fetchData();
  },
};
</script>

<style lang="scss" scoped>
.home {
  padding-top: 8.9rem;
  padding-bottom: 2rem;
  .home-content {
    width: 95%;
    margin-left: auto;
    margin-right: auto;
    .home-heading {
      h1 {
        margin-bottom: 2rem;
        font-size: 24px;
        font-weight: 500;
      }
    }
    .home-main {
      display: flex;
      justify-content: space-between;
      .home-left {
        width: calc(50% - 1rem);
        padding: 1rem;
        border-radius: 15px;
        background-color: var(--white);
        box-shadow: 0 0 10px 0 var(--shadow);
        height: 100%;
        h2 {
          font-size: 24px;
          font-weight: 500;
          margin-bottom: 1rem;
        }
        p:not(:last-child) {
          margin-bottom: 1rem;
        }
      }
      .home-right {
        width: calc(50% - 1rem);
        padding: 1rem;
        border-radius: 15px;
        background-color: var(--white);
        box-shadow: 0 0 10px 0 var(--shadow);
        h2 {
          font-size: 24px;
          font-weight: 500;
          margin-bottom: 1rem;
        }
        .home-right-links {
          display: flex;
          flex-direction: column;
          a:not(:last-child) {
            margin-bottom: 1rem;
          }
          a {
            text-underline-offset: 4px;
            transition: 0.5s;
            color: var(--black);
          }
        }
      }
    }
  }
}

@media screen and (max-width: 1200px) {
  .home {
    .home-content {
      width: 90%;
      .home-main {
        flex-direction: column;
        .home-left {
          width: 100%;
          margin-bottom: 2rem;
        }
        .home-right {
          width: 100%;
        }
      }
    }
  }
}
</style>
