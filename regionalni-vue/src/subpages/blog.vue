<template>
  <MainHeader />
  <div class="home">
    <div class="home-content">
      <div class="home-heading">
        <h1>Blog</h1>
      </div>
      <div
        class="home-box-container"
        v-for="(group, index) in groupedBlogList"
        :key="index"
      >
        <div class="home-box" v-for="blog in group" :key="blog.id">
          <div class="home-box-top">
            <img :src="getImagePath(blog.slug)" alt="" />
          </div>
          <div class="home-box-bottom">
            <h2>{{ blog.article_title }}</h2>
            <p>{{ blog.article_meta_description }}</p>
          </div>
          <div class="home-buttons">
            <button class="home-btn" @click="goToArticle(blog.slug)">
              Czytaj więcej
            </button>
          </div>
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
      blogList: [],
      blogImages: [],
    };
  },
  methods: {
    goToArticle(slug) {
      this.$router.push({ path: `/artykul/${slug}` });
    },
    async fetchBlogData() {
      try {
        const response = await axios.get(
          "http://localhost:8000/blog-download-all-data"
        );
        this.blogList = response.data.blogList;
        this.blogImages = response.data.blogImages;
      } catch (error) {
        console.error("Błąd podczas pobierania danych bloga:", error);
      }
    },
    getImagePath(slug) {
      const image = this.blogImages.find((img) => img.slug === slug);
      return image ? image.image_path : "";
    },
    formatData(isoDateTime) {
      const dateObject = new Date(isoDateTime);
      return dateObject.toLocaleString();
    },
  },
  computed: {
    groupedBlogList() {
      let groupSize = 2;
      return this.blogList.reduce((accumulator, current, index) => {
        const chunkIndex = Math.floor(index / groupSize);

        if (!accumulator[chunkIndex]) {
          accumulator[chunkIndex] = [];
        }

        accumulator[chunkIndex].push(current);

        return accumulator;
      }, []);
    },
    recentPosts() {
      return this.blogList.slice(-3);
    },
  },
  created() {
    this.fetchBlogData();
  },
};
</script>
<style lang="scss" scoped>
.home {
  padding-top: 8.9rem;
  .home-content {
    width: 95%;
    margin-left: auto;
    margin-right: auto;
    .home-heading {
      margin-bottom: 2rem;
      h1 {
        font-size: 32px;
        font-weight: 500;
      }
    }
    .home-box-container {
      display: flex;
      justify-content: space-between;
      margin-bottom: 2rem;
      .home-box {
        width: calc(50% - 1rem);
        border: 1px solid var(--shadow);
        border-radius: 10px;
        padding: 1rem;
        .home-box-top {
          width: 100%;
          height: 250px;
          border-radius: 5px;
          margin-bottom: 1rem;
          img {
            display: block;
            width: 100%;
            height: 100%;
            border-radius: 5px;
          }
        }
        .home-box-bottom {
          h2 {
            font-size: 24px;
            font-weight: 500;
            margin-bottom: 1rem;
          }
          p {
            font-size: 20px;
            margin-bottom: 1rem;
          }
        }
        .home-buttons {
          .home-btn {
            width: 260px;
            height: 40px;
            background-color: var(--black);
            font-size: 16px;
            border: 1px solid var(--black);
            color: var(--white);
            border-radius: 5px;
            cursor: pointer;
            transition: 0.5s;
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
        margin-bottom: 2rem;
        h1 {
          font-size: 24px;
        }
      }
      .home-box-container {
        flex-direction: column;
        margin-bottom: 0;
        .home-box {
          width: 100%;
          margin-bottom: 2rem;
          .home-box-bottom {
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
  }
}
</style>
