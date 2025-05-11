class PagesUrlConfig {
  private root =
    process.env.NODE_ENV === 'development'
      ? process.env.NEXT_PUBLIC_LOCAL_URL
      : process.env.NEXT_PUBLIC_PROD_URL

  MAIN = `${this.root}/main`
  PROJECTS = `${this.root}/projects`
  ABOUT = `${this.root}/about`
  CONTACT = `${this.root}/contact`
  REVIEWS = `${this.root}/reviews`
}

export const APP_NAVIGATION = new PagesUrlConfig()
