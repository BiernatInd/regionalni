<template>
  <AdminHeader />
  <div class="home">
    <div class="home-content">
      <div class="home-heading">
        <h1>Zmień E-mail</h1>
      </div>
      <div class="home-main">
        <h2>Zmień E-mail</h2>
        <div class="input-full-width">
          <input
            :type="showPassword ? 'text' : 'password'"
            v-model="password"
            placeholder="Hasło"
          />
          <span @click="togglePasswordVisibility">
            <img src="@assets/eye.svg" alt="Toggle Password" />
          </span>
        </div>
        <div class="input-full-width">
          <input
            type="email"
            v-model="newEmail"
            placeholder="Nowy adres E-mail"
          />
        </div>
        <div class="home-button">
          <button class="home-btn" @click="changeEmail">Zmień E-mail</button>
        </div>
        <div class="home-validation">
          <p v-if="validationMessage" class="validation-message">
            {{ validationMessage }}
          </p>
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
      newEmail: "",
      password: "",
      validationMessage: "",
      showPassword: false, // Flag for password visibility
    };
  },
  methods: {
    changeEmail() {
      this.validationMessage = "";
      if (!this.newEmail || !this.password) {
        this.validationMessage = "Wszystkie pola muszą zostać wypełnione.";
        return;
      }

      const user_name = this.$route.params.user_name;
      axios
        .put(`http://localhost:8000/admin-change-email/${user_name}`, {
          new_email: this.newEmail,
          password: this.password,
        })
        .then((response) => {
          alert("Adres E-mail został pomyślnie zmieniony.");
          this.clearFields();
          this.$router.push("/ustawienia-konta");
        })
        .catch((error) => {
          console.error(error.response.data.error);

          if (error.response.status === 401) {
            this.validationMessage = "Wprowadź poprawne hasło.";
          }
        });
    },
    togglePasswordVisibility() {
      this.showPassword = !this.showPassword;
    },
    checkUserRole() {
      const userRole = localStorage.getItem("userRole");

      if (userRole !== "admin") {
        this.$router.push("/logowanie");
      }
    },
    clearFields() {
      this.newEmail = "";
      this.password = "";
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
