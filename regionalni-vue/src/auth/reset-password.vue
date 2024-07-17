<template>
  <MainHeader />
  <div class="home">
    <div class="home-content">
      <div class="home-form">
        <h1>Resetowanie hasła</h1>
        <div class="input-full-width">
          <input type="password" placeholder="Nowe hasło" v-model="password" />
        </div>
        <div class="input-full-width">
          <input
            type="password"
            placeholder="Powtórz nowe hasło"
            v-model="confirmPassword"
          />
        </div>
        <div class="home-button">
          <button class="home-btn" @click="resetPassword">
            Zresetuj hasło
          </button>
        </div>
        <div class="home-validation">
          <p v-if="validationMessage" class="validation-message">
            {{ validationMessage }}
          </p>
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
      password: "",
      confirmPassword: "",
      validationMessage: "",
      token: null,
    };
  },
  created() {
    this.token = this.$route.params.token;
  },
  methods: {
    resetPassword() {
      this.validationMessage = "";

      if (!this.password || !this.confirmPassword) {
        this.validationMessage = "Wszysktie pola muszą zostać wypełnione.";
        return;
      }

      const passwordRegex =
        /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
      if (!passwordRegex.test(this.password)) {
        this.validationMessage =
          "Hasło musi mieć co najmniej 8 znaków, zawierać dużą literę, liczbę i jeden znak specjalny.";
        return;
      }

      if (this.password !== this.confirmPassword) {
        this.validationMessage = "Hasła nie są takie same";
        return;
      }

      if (!this.token) {
        this.validationMessage = "Nieprawidłowy token";
        return;
      }

      axios
        .post(`http://localhost:8000/reset-password/${this.token}`, {
          password: this.password,
        })
        .then((response) => {
          alert("Hasło zostało zresetowane");
          this.$router.push("/logowanie");
        })
        .catch((error) => {
          alert("Wystąpił błąd: " + error.response.data.message);
        });
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
