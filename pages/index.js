import Head from 'next/head'
import Header from '../components/Header'
import Banner from '../components/Banner'
import SmallCard from '../components/SmallCard'
import Bigcard from '../components/Bigcard'
import LargeCards from '../components/LargeCards'
import Footer from '../components/Footer'

export default function Home({ data, data2 }) {
  return (
    <div className="">
      <Head>
        <title>Airbnb-clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/*Header */}
      <Header />
      <Banner />

      <main className="max-w-7xl mx-auto px-8 sm:px-16  min-h-screen">
        <section className="pt-6">
          <h1 className="text-3xl font-semibold pb-5">Explore Nearby</h1>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {/* data from api*/}
            {data?.map(item => (
              <SmallCard key={item.img} img={item.img} location={item.location} distance={item.distance} />
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-4xl font-semibold py-8">Live Anywhere</h2>
          <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3">
            {data2.map(item => (
              <Bigcard key={item.img} img={item.img} title={item.title} />
            ))}
          </div>
        </section>

        {/* carte */}
        <LargeCards img="https://links.papareact.com/4cj"
          title='The Greatest Outdoors'
          description='Wisglists curated by Airbnb'
          buttonText="Get Inspired" />

      </main>

        <Footer />

      {/*Banner */}


      { }
    </div>
  )
}



export async function getStaticProps() {
  // small cards
  const exploreData = await fetch('https://links.papareact.com/pyp')

  const data = await exploreData.json();

  // cards data
  const cardsData = await fetch('https://links.papareact.com/zp1')

  const data2 = await cardsData.json()

  console.log(data2)
  return {
    props: {
      data,
      data2
    }
  }
}