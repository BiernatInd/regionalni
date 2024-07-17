<template>
  <MainHeader />
  <div class="home">
    <div class="home-content">
      <div class="home-form">
        <h1>Logowanie</h1>
        <div class="input-full-width">
          <input type="text" placeholder="E-mail" v-model="email" />
        </div>
        <div class="input-full-width">
          <input
            :type="showPassword ? 'text' : 'password'"
            placeholder="Hasło"
            v-model="password"
          />
          <span @click="togglePasswordVisibility">
            <img src="@assets/eye.svg" alt="" />
          </span>
        </div>
        <div class="home-button">
          <button class="home-btn" @click="login">Zaloguj się</button>
        </div>
        <div class="home-validation">
          <p v-if="validationMessage" class="validation-message">
            {{ validationMessage }}
          </p>
        </div>
        <div class="home-links">
          <router-link to="/odzyskiwanie-hasla">Zapomniałeś hasła?</router-link>
        </div>
      </div>
    </div>
  </div>
  <MainFooter />
</template>

<script>
import MainHeader from "@components/main-header.vue";
import MainFooter from "@components/main-footer.vue";
import axios from "axios";

export default {
  components: {
    MainHeader,
    MainFooter,
  },
  data() {
    return {
      email: "",
      password: "",
      userRole: "",
      userName: "",
      validationMessage: "",
      showPassword: false, // Add a flag to control password visibility
    };
  },
  methods: {
    async login() {
      this.validationMessage = "";

      if (!this.email || !this.password) {
        this.validationMessage = "Wszystkie pola muszą zostać wypełnione.";
        return;
      }

      try {
        const response = await axios.post("http://localhost:8000/login", {
          email: this.email,
          password: this.password,
        });

        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("userRole", response.data.user.role);
        localStorage.setItem("userName", response.data.user.user_name);

        if (response.data.user.role === "admin") {
          this.$router.push("/panel-administratora");
        } else if (response.data.user.role === "user") {
          this.$router.push("/");
        }
      } catch (error) {
        this.validationMessage =
          "Nieprawidłowe dane logowania. Spróbuj ponownie.";
        console.error("Błąd logowania:", error.response.data);
      }
    },
    togglePasswordVisibility() {
      this.showPassword = !this.showPassword;
    },
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
    display: flex;
    justify-content: center;
    .home-form {
      width: 25%;
      border-radius: 15px;
      background-color: var(--white);
      padding: 1rem;
      border: 1px solid var(--shadow);
      h1 {
        font-size: 24px;
        font-weight: 500;
        margin-bottom: 1rem;
      }
      .input-full-width {
        margin-bottom: 1rem;
        position: relative;
        input {
          width: 100%;
          border: none;
          border-bottom: 1px solid var(--purple);
          height: 40px;
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
          border-radius: 5px;
          background-color: var(--black);
          color: var(--white);
          font-size: 16px;
          border: 1px solid var(--black);
          transition: 0.5s;
          cursor: pointer;
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
      .home-links {
        display: flex;
        flex-direction: column;
        a {
          margin-top: 1rem;
          text-underline-offset: 4px;
          transition: 0.5s;
          color: var(--black);
        }
      }
    }
  }
}

@media screen and (max-width: 1200px) {
  .home {
    .home-content {
      width: 90%;
      .home-form {
        width: 100%;
      }
    }
  }
}
</style>
