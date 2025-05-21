import BestDealSection from '../sections/BestDealSection/BestDealSection'
import DreamSection from '../sections/DreamSection/DreamSection'
import Hero from '../sections/Hero/Hero'
import TrendingSection from '../sections/TrendingSection/TrendingSection'
import WorkSection from '../sections/WorkSection/WorkSection'
import { BestDealsTabData } from '../data/BestDealsData'
import { HowItWorksData } from '../data/HowItWorksData'
import { HeroData } from '../data/HeroData'
import { BestDealTitle, DreamTitle, HeroTitle, TrendingTitle, WorksTitle } from '../data/TitleSectionsData'
import { TrendingData } from '../data/TrendingData'

function Home() {

  return (
    <>
      <Hero data={HeroTitle}  herodata={HeroData} />
      <WorkSection dataTitle={WorksTitle} dataCards={HowItWorksData} />
      <DreamSection dataTitle={DreamTitle} />
      <TrendingSection dataTitle={TrendingTitle} dataCards={TrendingData} />
      <BestDealSection dataTitle={BestDealTitle} dataCards={BestDealsTabData} />
    </>
  )
}

export default Home
