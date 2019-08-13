import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// route-level code splitting
// const createListView = id => () => import('../views/CreateListView').then(m => m.default(id))
// const ItemView = () => import('../views/ItemView.vue')
// const UserView = () => import('../views/UserView.vue')
const HomeView = () => import('../views/HomeView.vue')
const BrandView = () => import('../views/BrandView.vue')
const BrandItemView = () => import('../views/BrandItemView.vue')
const AboutView = () => import('../views/AboutView.vue')
const FinanceView = () => import('../views/FinanceView.vue')
const CaravanView = () => import('../views/CaravanView.vue')
const CaravanItemView = () => import('../views/CaravanItemView.vue')
const BobilView = () => import('../views/BobilView.vue')
const BobilUsedView = () => import('../views/BobilUsedView.vue')
const BobilNewView = () => import('../views/BobilNewView.vue')
const BobilItemView = () => import('../views/BobilItemView.vue')
const Form1View = () => import('../views/Form1View.vue')
const Form2View = () => import('../views/Form2View.vue')
const Form3View = () => import('../views/Form3View.vue')
const LoginView = () => import('../views/LoginView.vue')
const Page404View = () => import('../views/Page404View.vue')
const AdminPageView = () => import('../views/Admin/PageView.vue')
const AdminBrandView = () => import('../views/Admin/BrandPageView.vue')
const AdminHomeView = () => import('../views/Admin/HomePageView.vue')
const AdminFinanceView = () => import('../views/Admin/FinancePageView.vue')
const AdminBobilView = () => import('../views/Admin/BobilPageView.vue')
const AdminCaravanView = () => import('../views/Admin/CaravanPageView.vue')
const AdminAboutView = () => import('../views/Admin/AboutPageView.vue')
const AdminTopComponent = () => import('../views/Admin/TopComponent.vue')
const AdminFooterComponent = () => import('../views/Admin/FooterComponent.vue')
const AdminBobilProduct = () => import('../views/Admin/BobilProduct.vue')
const AdminCaravanProduct = () => import('../views/Admin/CaravanProduct.vue')
const AdminEditProduct = () => import('../views/Admin/EditProduct.vue')
const AdminSettings = () => import('../views/Admin/Settings.vue')
const AdminLogout = () => import('../views/Admin/Logout.vue')
const CustomHeader = () => import('../components/Header.vue')
const CustomFooter = () => import('../components/Footer.vue')
const AdminHeader = () => import('../components/AdminHeader.vue')

export function createRouter() {
  return new Router({
    mode: 'history',
    fallback: false,
    scrollBehavior: () => ({ y: 1000 }),
    routes: [
      // { path: '/top/:page(\\d+)?', component: createListView('top') },
      // { path: '/new/:page(\\d+)?', component: createListView('new') },
      // { path: '/show/:page(\\d+)?', component: createListView('show') },
      // { path: '/ask/:page(\\d+)?', component: createListView('ask') },
      // { path: '/job/:page(\\d+)?', component: createListView('job') },
      // { path: '/item/:id(\\d+)', component: ItemView },
      // { path: '/user/:id', component: UserView },
      {
        path: '/', components: {
          default: HomeView,
          header: CustomHeader,
          footer: CustomFooter
        }
      },
      {
        path: '/merker', components: {
          default: BrandView,
          header: CustomHeader,
          footer: CustomFooter
        }
      },
      {
        path: '/merker/:id', components: {
          default: BrandItemView,
          header: CustomHeader,
          footer: CustomFooter
        },
        name: 'BrandItem',
        props: true
      },
      {
        path: '/campingvogn', components: {
          default: CaravanView,
          header: CustomHeader,
          footer: CustomFooter
        }
      },
      {
        path: '/campingvogn/:id', components: {
          default: CaravanItemView,
          header: CustomHeader,
          footer: CustomFooter
        },
        name: 'CaravanItem',
        props: true
      },
      {
        path: '/bobil', components: {
          default: BobilView,
          header: CustomHeader,
          footer: CustomFooter
        }
      },
      {
        path: '/bobil/:id', components: {
          default: BobilItemView,
          header: CustomHeader,
          footer: CustomFooter
        }
      },
      {
        path: '/finansiering', components: {
          default: FinanceView,
          header: CustomHeader,
          footer: CustomFooter
        }
      },
      {
        path: '/om-oss', components: {
          default: AboutView,
          header: CustomHeader,
          footer: CustomFooter
        }
      },
      {
        name: 'BobilUsedView',
        path: '/brukte-bobiler',
        components: {
          default: BobilUsedView,
          header: CustomHeader,
          footer: CustomFooter
        }
      },
      {
        name: 'BobilNewView',
        path: '/nye-bobiler',
        components: {
          default: BobilNewView,
          header: CustomHeader,
          footer: CustomFooter
        }
      },
      {
        path: '/form1', components: {
          default: Form1View
        },
        name: 'Form1',
        props: true
      },
      {
        path: '/form2', components: {
          default: Form2View
        },
        name: 'Form2',
        props: true
      },
      {
        path: '/form3', components: {
          default: Form3View
        },
        name: 'Form3',
        props: true
      },
      {
        name: 'login',
        path: '/login',
        component: LoginView
      },
      {
        path: '*',
        redirect: '/404'
      },
      {
        name: 'Page404',
        path: '/404',
        components: {
          default: Page404View,
          header: CustomHeader,
          footer: CustomFooter
        }
      },
      {
        name: 'AdminPageView',
        path: '/admin/page',
        components: {
          default: AdminPageView,
          header: AdminHeader,
        }
      },
      {
        name: 'AdminHomeView',
        path: '/admin/page/home',
        components: {
          default: AdminHomeView,
          header: AdminHeader,
        }
      },
      {
        name: 'AdminBrandView',
        path: '/admin/page/brand',
        components: {
          default: AdminBrandView,
          header: AdminHeader,
        }
      },
      {
        name: 'AdminFinanceView',
        path: '/admin/page/finance',
        components: {
          default: AdminFinanceView,
          header: AdminHeader,
        }
      },
      {
        name: 'AdminBobilView',
        path: '/admin/page/bobil',
        components: {
          default: AdminBobilView,
          header: AdminHeader,
        }
      },
      {
        name: 'AdminCaravanView',
        path: '/admin/page/caravan',
        components: {
          default: AdminCaravanView,
          header: AdminHeader,
        }
      },
      {
        name: 'AdminAboutView',
        path: '/admin/page/about',
        components: {
          default: AdminAboutView,
          header: AdminHeader,
        }
      },
      {
        name: 'AdminTopComponent',
        path: '/admin/page/top',
        components: {
          default: AdminTopComponent,
          header: AdminHeader,
        }
      },
      {
        name: 'AdminBobilProduct',
        path: '/admin/bobil',
        components: {
          default: AdminBobilProduct,
          header: AdminHeader,
        }
      },
      {
        name: 'AdminEditProduct',
        path: '/admin/product/:id',
        components: {
          default: AdminEditProduct,
          header: AdminHeader,
        },
        props: true
      },
      {
        name: 'AdminCaravanProduct',
        path: '/admin/caravan',
        components: {
          default: AdminCaravanProduct,
          header: AdminHeader,
        }
      },
      {
        name: 'AdminFooterComponent',
        path: '/admin/footer',
        components: {
          default: AdminFooterComponent,
          header: AdminHeader,
        }
      },
      {
        name: 'AdminSettings',
        path: '/admin/settings',
        components: {
          default: AdminSettings,
          header: AdminHeader,
        }
      },
      {
        name: 'AdminLogout',
        path: '/logout',
        components: {
          default: AdminLogout,
          header: AdminHeader,
        }
      },
    ]
  })
}
