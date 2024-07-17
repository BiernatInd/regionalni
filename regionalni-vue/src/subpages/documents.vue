<template>
  <MainHeader />
  <div class="home">
    <div class="home-content">
      <div class="home-box-container">
        <div class="home-box">
          <h1>Pobierz wszystkie dokumenty</h1>
          <div class="home-buttons">
            <button class="home-btn">Pobierz dokumenty</button>
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

export default {
  components: {
    MainHeader,
    MainFooter,
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
    .home-box-container {
      .home-box {
        width: 50%;
        padding: 1rem;
        border: 1px solid var(--shadow);
        border-radius: 10px;
        h1 {
          font-size: 32px;
          font-weight: 500;
          margin-bottom: 1rem;
        }
        .home-buttons {
          .home-btn {
            width: 260px;
            height: 40px;
            font-size: 16px;
            background-color: var(--black);
            border: 1px solid var(--black);
            color: var(--white);
            border-radius: 5px;
            transition: 0.5s;
            cursor: pointer;
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
      .home-box-container {
        .home-box {
          width: 100%;
          .home-buttons {
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
