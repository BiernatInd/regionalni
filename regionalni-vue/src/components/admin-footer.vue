<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="footer-left">
        <router-link to="/polityka-prywatnosci"
          >Polityka prywatności</router-link
        >
      </div>
      <div class="footer-mid">
        <p>
          Copyright © 2024
          <a href="https://karolbiernat.pl">Karol Biernat.</a> Wszelkie prawa
          zastrzeżone.
        </p>
      </div>
      <div class="footer-right">
        <svg
          width="25"
          height="25"
          viewBox="0 0 25 25"
          fill="#000000"
          xmlns="http://www.w3.org/2000/svg"
          data-v-cd7306d6=""
        >
          <path
            d="M24.2188 12.1094C24.2188 5.41992 18.7988 0 12.1094 0C5.41992 0 0 5.41992 0 12.1094C0 18.1533 4.42822 23.1631 10.2173 24.0723V15.6099H7.14111V12.1094H10.2173V9.44141C10.2173 6.40674 12.0239 4.73047 14.791 4.73047C16.1162 4.73047 17.502 4.9668 17.502 4.9668V7.94531H15.9746C14.4707 7.94531 14.0015 8.87891 14.0015 9.83643V12.1094H17.3599L16.8228 15.6099H14.0015V24.0723C19.7905 23.1631 24.2188 18.1533 24.2188 12.1094Z"
            data-v-cd7306d6=""
          ></path>
        </svg>
      </div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>
<style lang="scss" scoped>
.footer {
  padding-top: 1rem;
  padding-bottom: 1rem;
  border-top: 1px solid var(--shadow);
  .footer-content {
    width: 95%;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    justify-content: space-between;
    .footer-left {
      a {
        color: var(--black);
        transition: 0.5s;
        font-size: 16px;
        text-underline-offset: 4px;
      }
    }
    .footer-mid {
      p {
        color: var(--black);
        font-size: 16px;
        a {
          color: var(--black);
          transition: 0.5s;
          font-size: 16px;
          text-underline-offset: 4px;
        }
      }
    }
    .footer-right {
      svg {
        cursor: pointer;
      }
    }
  }
}

@media screen and (max-width: 1200px) {
  .footer {
    .footer-content {
      flex-direction: column;
      .footer-left {
        margin-bottom: 1rem;
        display: flex;
        justify-content: center;
      }
      .footer-mid {
        margin-bottom: 1rem;
        p {
          text-align: center;
        }
      }
      .footer-right {
        display: flex;
        justify-content: center;
      }
    }
  }
}
</style>
