import About from '../../components/Home/About'
import Banner from '../../components/Home/Banner'
import Coupons from '../../components/Home/Coupons'
import LocationSection from '../../components/Home/LocationSection'

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <About></About>
      <Coupons></Coupons>
      <LocationSection></LocationSection>
    </div>
  )
}

export default Home
