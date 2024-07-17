<template>
  <AdminHeader />
  <div class="home">
    <div class="home-content">
      <div class="home-heading">
        <h1>Dodawanie zdjęć do galerii</h1>
      </div>
      <div class="home-main">
        <div class="home-form">
          <h2>Dodawanie zdjęć do galerii</h2>
          <div class="home-input">
            <input type="file" multiple @change="onFileChange" />
          </div>
          <div class="home-button">
            <button class="home-btn" @click="uploadPhotos">
              Dodaj zdjęcia do galerii
            </button>
          </div>
        </div>
        <div v-if="message" class="message">
          <p>{{ message }}</p>
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
      files: [],
      message: "",
      slug: "",
    };
  },
  mounted() {
    this.checkUserRole();
    this.slug = this.getSlugFromURL();
  },
  methods: {
    getSlugFromURL() {
      const url = window.location.href;
      const parts = url.split("/");
      return parts[parts.length - 1];
    },
    onFileChange(event) {
      this.files = Array.from(event.target.files);
    },
    async uploadPhotos() {
      if (this.files.length === 0) {
        this.message = "Wybierz przynajmniej jeden plik przed wysłaniem.";
        return;
      }

      const formData = new FormData();
      this.files.forEach((file, index) => {
        formData.append(`photos[${index}]`, file);
      });

      try {
        const response = await axios.post(
          `http://localhost:8000/gallery-add-photos/${this.slug}`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );

        if (response.status === 200) {
          alert("Zdjęcia dodane pomyślnie do galerii");
          this.$router.push("/galeria-lista");
        } else {
          this.message = `Błąd: ${response.data.message}`;
        }
      } catch (error) {
        this.message = `Błąd sieci: ${error.message}`;
      }
    },
    checkUserRole() {
      const userRole = localStorage.getItem("userRole");

      if (userRole !== "admin") {
        this.$router.push("/logowanie");
      }
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
    .home-heading {
      margin-bottom: 2rem;
      h1 {
        font-size: 24px;
        font-weight: 500;
      }
    }
    .home-main {
      .home-form {
        width: 50%;
        padding: 1rem;
        border-radius: 10px;
        border: 1px solid var(--shadow);
        h2 {
          font-size: 24px;
          font-weight: 500;
          margin-bottom: 1rem;
        }
        .home-input {
          margin-bottom: 1rem;
          input {
            padding-top: 0.5rem;
            padding-bottom: 0.5rem;
            width: 100%;
            border: none;
            border-bottom: 1px solid var(--black);
            font-size: 16px;
            cursor: pointer;
          }
        }
        .home-button {
          .home-btn {
            height: 40px;
            width: 300px;
            font-size: 16px;
            border-radius: 10px;
            border: 2px solid var(--black);
            background-color: var(--black);
            color: var(--white);
            transition: 0.5s;
            cursor: pointer;
            &:hover {
              background-color: var(--white);
              color: var(--black);
            }
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
      .home-heading {
        h1 {
          font-size: 24px;
        }
      }
      .home-main {
        .home-form {
          width: 100%;
          .home-button {
            .home-btn {
              width: 100%;
            }
          }
        }
      }
    }
  }
}
</style>
