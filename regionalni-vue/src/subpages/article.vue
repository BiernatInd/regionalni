<template>
  <MainHeader />
  <div class="home">
    <div class="home-content">
      <div class="home-img" v-if="blogImages.length > 0">
        <img :src="blogImages[0].image_path" alt="" />
      </div>
      <div v-for="content in blogContents" :key="content.id">
        <h2 v-if="content.article_type === 'header'">
          {{ content.article_text }}
        </h2>
        <p v-else-if="content.article_type === 'paragraph'">
          {{ content.article_text }}
        </p>
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
      slug: this.$route.params.slug,
      blogContents: [],
      blogImages: [],
    };
  },
  methods: {
    fetchData() {
      axios
        .get("http://localhost:8000/blog-download-article/" + this.slug)
        .then((response) => {
          this.blogContents = response.data.blogContents;
          this.blogImages = response.data.blogImages;
        })
        .catch((error) => {
          console.error("Błąd podczas pobierania danych:", error);
        });
    },
    clearFields() {
      this.articleText = "";
    },
  },
  mounted() {
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
    .home-img {
      margin-bottom: 2rem;
    }
    div {
      h2 {
        font-size: 24px;
        font-weight: 500;
        margin-bottom: 1rem;
      }
      p {
        margin-bottom: 1rem;
        font-size: 20px;
      }
    }
  }
}

@media screen and (max-width: 1200px) {
  .home {
    .home-content {
      width: 90%;
      .home-img {
        width: 50%;
        img {
          display: block;
          width: 100%;
        }
      }
      div {
        h2 {
          font-size: 20px;
        }
        p {
          font-size: 16px;
        }
      }
    }
  }
}
</style>
