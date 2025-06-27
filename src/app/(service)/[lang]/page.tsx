import LandingPage from '../(default)/(_components)/LandingPage'

export default function Home({ params }: { params: { lang: string } }) {
  return <LandingPage lang={params.lang} />
}
