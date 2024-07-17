<template>
  <div>
    <div class="home">
      <div class="home-content">
        <div class="home-heading">
          <h1>Zmień hasło</h1>
        </div>
        <div class="home-main">
          <h2>Zmień hasło</h2>
          <form @submit.prevent="changePassword">
            <div class="input-full-width">
              <input
                :type="showOldPassword ? 'text' : 'password'"
                v-model="oldPassword"
                placeholder="Aktualne hasło"
                required
              />
              <span @click="togglePasswordVisibility('old')">
                <img src="@assets/eye.svg" alt="Toggle Password" />
              </span>
            </div>
            <div class="input-full-width">
              <input
                :type="showNewPassword ? 'text' : 'password'"
                v-model="newPassword"
                placeholder="Nowe hasło"
                required
              />
              <span @click="togglePasswordVisibility('new')">
                <img src="@assets/eye.svg" alt="Toggle Password" />
              </span>
            </div>
            <div class="home-button">
              <button type="submit" class="home-btn">Zmień hasło</button>
            </div>
            <div class="home-validation">
              <p v-if="errorMessage" class="error-message">
                {{ errorMessage }}
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      oldPassword: "",
      newPassword: "",
      errorMessage: "",
      showOldPassword: false,
      showNewPassword: false,
    };
  },
  methods: {
    changePassword() {
      const userName = this.$route.params.user_name;

      axios
        .put(`http://localhost:8000/admin-change-password/${userName}`, {
          old_password: this.oldPassword,
          new_password: this.newPassword,
        })
        .then((response) => {
          alert("Hasło zostało zmienione pomyślnie!");
          this.oldPassword = "";
          this.newPassword = "";
          this.errorMessage = "";
        })
        .catch((error) => {
          if (error.response && error.response.status === 422) {
            this.errorMessage = "Błąd walidacji. Sprawdź poprawność danych.";
          } else {
            this.errorMessage =
              "Wystąpił problem podczas zmiany hasła. Spróbuj ponownie później.";
          }
        });
    },
    togglePasswordVisibility(field) {
      if (field === "old") {
        this.showOldPassword = !this.showOldPassword;
      } else if (field === "new") {
        this.showNewPassword = !this.showNewPassword;
      }
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
      margin-bottom: 2rem;
      h1 {
        font-size: 24px;
        font-weight: 500;
      }
    }
    .home-main {
      width: calc(50% - 1rem);
      padding: 1rem;
      box-shadow: 0 0 10px 0 var(--shadow);
      border-radius: 15px;
      h2 {
        font-size: 24px;
        font-weight: 500;
        margin-bottom: 1rem;
      }
      .input-full-width {
        margin-bottom: 1rem;
        position: relative;
        input {
          width: 100%;
          height: 40px;
          border: none;
          border-bottom: 1px solid var(--black);
          font-size: 16px;
        }
        span {
          position: absolute;
          right: 0;
          top: 25%;
          cursor: pointer;
        }
      }
      .home-button {
        .home-btn {
          width: 100%;
          height: 40px;
          background-color: var(--black);
          border: 1px solid var(--black);
          color: var(--white);
          font-size: 16px;
          border-radius: 5px;
          cursor: pointer;
          transition: 0.5s;
          &:hover {
            background-color: var(--white);
            color: var(--black);
          }
        }
      }
      .home-validation {
        p {
          margin-top: 1rem;
          color: var(--red);
        }
      }
    }
  }
}

@media screen and (max-width: 1200px) {
  .home {
    .home-content {
      width: 90%;
      .home-heading {
        h1 {
          font-size: 24px;
        }
      }
      .home-main {
        width: 100%;
      }
    }
  }
}
</style>
