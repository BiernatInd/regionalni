import { createRouter, createWebHistory } from "vue-router";
import axios from "axios";
import MainPage from "@subpages/main-page.vue";
import Gallery from '@subpages/gallery.vue';
import Documents from "@subpages/documents.vue";
import PolicyPrivacy from "@subpages/policy-privacy.vue";
import Blog from '@subpages/blog.vue'
import Article from '@subpages/article.vue'
//Auth
import Login from '@auth/login.vue'
import RecoverPassword from '@auth/recover-password.vue'
import ResetPassword from '@auth/reset-password.vue'

import AdminPanel from '@admin/admin-panel.vue'
import BlogList from '@admin-blog/blog-list.vue'
import BlogAddPost from '@admin-blog/blog-add-post.vue'
import BlogAddPhoto from '@admin-blog/blog-add-photo.vue'
import BlogAddMeta from '@admin-blog/blog-add-meta.vue'
import BlogAddContent from '@admin-blog/blog-add-content.vue'
import BlogEditContent from '@admin-blog/blog-edit-content.vue'

import GalleryList from '@admin-gallery/gallery-list.vue'
import GalleryListPhotos from '@admin-gallery/gallery-list-photos.vue'
import GalleryAdd from '@admin-gallery/gallery-add.vue'
import GalleryAddPhotos from '@admin-gallery/gallery-add-photos.vue'

import SettingsAccount from '@admin-settings/settings-account.vue'
import ChangeEmail from '@admin-settings/change-email.vue'
import ChangePassword from '@admin-settings/change-password.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    
    {
      path: "/",
      component: MainPage,
      name: "main-page",
      meta: {
        title: "Stowarzyszenie Regionalni Sandomierz - Akrobatyka i Sport dla Lokalnej Społeczności",
        description: "Jesteśmy dumni z naszego zespołu wykwalifikowanych trenerów, którzy posiadają wieloletnie doświadczenie w akrobatyce i są mistrzami świata w swojej dyscyplinie.",
      },
    },
    {
      path: "/galeria",
      component: Gallery,
      name: "gallery",
      meta: {
        title: "Stowarzyszenie Regionalni Sandomierz - Galeria",
        description: "Przeglądaj naszą galerię zdjęć, aby zobaczyć nasze wydarzenia, treningi i osiągnięcia naszych zawodników.",
      },
    },
    {
      path: "/dokumenty",
      component: Documents,
      name: "documents",
      meta: {
        title: "Stowarzyszenie Regionalni Sandomierz - Dokumenty",
        description: "Zapoznaj się z naszymi dokumentami, regulaminami i ważnymi informacjami dotyczącymi działalności Stowarzyszenia Regionalni Sandomierz.",
      },
    },
    {
      path: "/polityka-prywatnosci",
      component: PolicyPrivacy,
      name: "polityka-prywatnosci",
      meta: {
        title: "Stowarzyszenie Regionalni Sandomierz - Polityka prywatności",
        description: "Dowiedz się więcej o naszych zasadach ochrony prywatności i przetwarzania danych osobowych na stronie Stowarzyszenia Regionalni Sandomierz.",
      },
    },
    {
      path: "/blog",
      component: Blog,
      name: "blog",
      meta: {
        title: "Stowarzyszenie Regionalni Sandomierz - Blog",
        description: "Czytaj nasz blog, gdzie dzielimy się nowinkami, poradami i historiami związane z akrobatyką, sportem i naszym lokalnym społeczeństwem.",
      },
    },
    {
      path: '/artykul/:slug',
      component: Article,
      name: "article",
      meta: {
        title: "",
        description: "",
      },
    },
    {
      path: "/logowanie",
      component: Login,
      name: "login",
      meta: {
        title: "",
        description: "",
        content: 'noindex, nofollow',
      },
    },
    {
      path: "/odzyskiwanie-hasla",
      component: RecoverPassword,
      name: "recover-password",
      meta: {
        title: "",
        description: "",
        content: 'noindex, nofollow',
      },
    },
    {
      path: "/resetowanie-hasla/:token",
      component: ResetPassword,
      name: "reset-password",
      meta: {
        title: "",
        description: "",
        content: 'noindex, nofollow',
      },
    },
    {
      path: "/panel-administratora",
      component: AdminPanel,
      name: "admin-panel",
      meta: {
        title: "",
        description: "",
        content: 'noindex, nofollow',
      },
    },
    {
      path: "/blog-lista",
      component: BlogList,
      name: "blog-list",
      meta: {
        title: "",
        description: "",
        content: 'noindex, nofollow',
      },
    },
    {
      path: "/blog-dodaj",
      component: BlogAddPost,
      name: "blog-add-post",
      meta: {
        title: "",
        description: "",
        content: 'noindex, nofollow',
      },
    },
    {
      path: "/blog-dodaj-zdjecie/:slug",
      component: BlogAddPhoto,
      name: "blog-add-photo",
      meta: {
        title: "",
        description: "",
        content: 'noindex, nofollow',
      },
    },
    {
      path: "/blog-dodaj-meta/:slug",
      component: BlogAddMeta,
      name: "blog-add-meta",
      meta: {
        title: "",
        description: "",
        content: 'noindex, nofollow',
      },
    },
    {
      path: "/blog-dodaj-tresc/:slug",
      component: BlogAddContent,
      name: "blog-add-content",
      meta: {
        title: "",
        description: "",
        content: 'noindex, nofollow',
      },
    },
    {
      path: "/blog-edytuj-tresc/:slug",
      component: BlogEditContent,
      name: "blog-edit-content",
      meta: {
        title: "",
        description: "",
        content: 'noindex, nofollow',
      },
    },
    {
      path: "/galeria-lista",
      component: GalleryList,
      name: "gallery-list",
      meta: {
        title: "",
        description: "",
        content: 'noindex, nofollow',
      },
    },
    {
      path: "/galeria-lista-zdjecia/:slug",
      component: GalleryListPhotos,
      name: "gallery-list-photos",
      meta: {
        title: "",
        description: "",
        content: 'noindex, nofollow',
      },
    },
    {
      path: "/galeria-dodaj",
      component: GalleryAdd,
      name: "gallery-add",
      meta: {
        title: "",
        description: "",
        content: 'noindex, nofollow',
      },
    },
    {
      path: "/galeria-dodaj-zdjecia/:slug",
      component: GalleryAddPhotos,
      name: "gallery-add-photos",
      meta: {
        title: "",
        description: "",
        content: 'noindex, nofollow',
      },
    },
    {
      path: "/ustawienia-konta",
      component: SettingsAccount,
      name: "settings-account",
      meta: {
        title: "",
        description: "",
        content: 'noindex, nofollow',
      },
    },
    {
      path: "/zmien-email/:user_name",
      component: ChangeEmail,
      name: "change-email",
      meta: {
        title: "",
        description: "",
        content: 'noindex, nofollow',
      },
    },
    {
      path: "/zmien-haslo/:user_name",
      component: ChangePassword,
      name: "change-password",
      meta: {
        title: "",
        description: "",
        content: 'noindex, nofollow',
      },
    },
  ],
});

router.beforeEach(async (to, from, next) => {
  window.scrollTo(0, 0);
  const meta = to.meta;

  if (meta.title) {
    document.title = meta.title;
  }

  if (meta.description) {
    const descriptionMetaTag = document.querySelector('meta[name="description"]');
    if (descriptionMetaTag) {
      descriptionMetaTag.setAttribute('content', meta.description);
    } else {
      const newDescriptionMetaTag = document.createElement('meta');
      newDescriptionMetaTag.name = 'description';
      newDescriptionMetaTag.content = meta.description;
      document.head.appendChild(newDescriptionMetaTag);
    }
  }

  if (meta.canonical) {
    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (linkCanonical) {
      linkCanonical.setAttribute('href', meta.canonical);
    } else {
      linkCanonical = document.createElement('link');
      linkCanonical.setAttribute('rel', 'canonical');
      linkCanonical.setAttribute('href', meta.canonical);
      document.head.appendChild(linkCanonical);
    }
  }

  // Handle specific logic for 'article' route
  if (to.name === 'article') {
    const slug = to.params.slug;
    console.log('Article Name:', slug);

    try {
      const response = await axios.get(`http://localhost:8000/blog-download-meta/${slug}`);
      const article = response.data.article;

      if (article.article_meta_title) {
        document.title = article.article_meta_title;
      }

      if (article.article_meta_description) {
        const descriptionMetaTag = document.querySelector('meta[name="description"]');
        if (descriptionMetaTag) {
          descriptionMetaTag.setAttribute('content', article.article_meta_description);
        } else {
          const newDescriptionMetaTag = document.createElement('meta');
          newDescriptionMetaTag.name = 'description';
          newDescriptionMetaTag.content = article.article_meta_description;
          document.head.appendChild(newDescriptionMetaTag);
        }
      }

      // Optionally handle canonical URL for articles
      if (article.article_canonical_url) {
        let linkCanonical = document.querySelector('link[rel="canonical"]');
        if (linkCanonical) {
          linkCanonical.setAttribute('href', article.article_canonical_url);
        } else {
          linkCanonical = document.createElement('link');
          linkCanonical.setAttribute('rel', 'canonical');
          linkCanonical.setAttribute('href', article.article_canonical_url);
          document.head.appendChild(linkCanonical);
        }
      }

    } catch (error) {
      console.error('Error:', error);
      next({ name: '404' });
      return;
    }
  }

  next();
});




export default router