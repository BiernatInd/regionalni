<template>
  <MainHeader />
  <div class="home">
    <div class="home-content">
      <div class="home-heading">
        <h2>Galeria</h2>
      </div>
      <div
        v-for="(group, index) in galleryGroups"
        :key="index"
        class="home-box-container"
      >
        <div
          v-for="gallery in group"
          :key="gallery.id"
          class="home-box"
          @click="loadGallery(gallery.slug)"
        >
          <img :src="gallery.image_path" alt="" />
        </div>
      </div>
    </div>
  </div>
  <div :class="['gallery', { active: isGalleryActive }]">
    <div class="gallery-content">
      <div class="gallery-box">
        <div class="gallery-box-top">
          <h2>Galeria</h2>
          <svg
            @click="closeGallery"
            data-v-f62e497c=""
            width="26"
            height="31"
            viewBox="0 0 26 31"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              data-v-f62e497c=""
              x="0.185867"
              y="28.24"
              width="36.8646"
              height="2.76485"
              rx="1.38242"
              transform="rotate(-50 0.185867 28.24)"
              fill="black"
            ></rect>
            <rect
              data-v-f62e497c=""
              width="36.8646"
              height="2.76485"
              rx="1.38242"
              transform="matrix(-0.642788 -0.766044 -0.766044 0.642788 25.8141 28.3933)"
              fill="black"
            ></rect>
          </svg>
        </div>
        <div class="gallery-box-bottom">
          <div class="gallery-box-images">
            <div
              v-for="(photo, index) in limitedSelectedGalleryPhotos"
              :key="photo.id"
              class="gallery-box-image"
            >
              <img :src="photo.image_path" alt="" />
            </div>
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
      galleries: [],
      selectedGalleryPhotos: [],
      isGalleryActive: false,
    };
  },
  computed: {
    galleryGroups() {
      const groups = [];
      for (let i = 0; i < this.galleries.length; i += 4) {
        groups.push(this.galleries.slice(i, i + 4));
      }
      return groups;
    },
    limitedSelectedGalleryPhotos() {
      return this.selectedGalleryPhotos.slice(0, 4);
    },
  },
  methods: {
    fetchGalleries() {
      axios
        .get("http://localhost:8000/gallery-list-download")
        .then((response) => {
          this.galleries = response.data.gallery;
          console.log(response.data);
        })
        .catch((error) => {
          console.error("Błąd pobierania danych:", error);
        });
    },
    closeGallery() {
      this.isGalleryActive = false;
    },
    loadGallery(slug) {
      axios
        .get(`http://localhost:8000/gallery-list-collection-download/${slug}`)
        .then((response) => {
          this.selectedGalleryPhotos = response.data.gallery;
          console.log(response.data.gallery);
          this.isGalleryActive = true;
        })
        .catch((error) => {
          console.error("Błąd pobierania danych:", error);
        });
    },
  },
  mounted() {
    this.fetchGalleries();
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
      h2 {
        font-size: 32px;
        font-weight: 500;
        margin-bottom: 2rem;
      }
    }
    .home-box-container:not(:last-child) {
      margin-bottom: 2rem;
    }
    .home-box-container {
      display: flex;
      justify-content: space-between;
      .home-box {
        cursor: pointer;
        border-radius: 10px;
        width: 20%;
        img {
          display: block;
          width: 80%;
          height: 100%;
          border-radius: 10px;
        }
      }
    }
  }
}
.gallery {
  position: fixed;
  top: -100%;
  background-color: #0009;
  height: 100%;
  width: 100%;
  max-width: 1920px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
  transition: 0.5s;
  &.active {
    top: 0;
  }
  .gallery-content {
    width: 80%;
    height: 80%;
    overflow: auto;
    background-color: var(--white);
    border-radius: 10px;
    padding: 2rem;
    .gallery-box {
      .gallery-box-top {
        display: flex;
        justify-content: space-between;
        h2 {
          font-size: 32px;
          font-weight: 500;
          margin-bottom: 2rem;
        }
      }
      .gallery-box-bottom {
        .gallery-box-images:not(:last-child) {
          margin-bottom: 2rem;
        }
        .gallery-box-images {
          display: flex;
          justify-content: space-between;
          .gallery-box-image {
            width: 20%;
            height: 100%;
            img {
              display: block;
              width: 100%;
              height: 100%;
              border-radius: 10px;
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
        h2 {
          font-size: 24px;
        }
      }
      .home-box-container {
        flex-direction: column;
        .home-box:not(:last-child) {
          margin-bottom: 2rem;
        }
        .home-box {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
  .gallery {
    .gallery-content {
      width: 90%;
      .gallery-box {
        .gallery-box-top {
          h2 {
            font-size: 24px;
          }
        }
        .gallery-box-bottom {
          .gallery-box-images {
            display: flex;
            flex-direction: column;
            .gallery-box-image {
              width: 100%;
              margin-bottom: 2rem;
              height: 100%;
            }
          }
        }
      }
    }
  }
}
</style>
