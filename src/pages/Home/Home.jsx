import About from '../../components/Home/About'
import Apartments from '../../components/Home/Apartments'
import Banner from '../../components/Home/Banner'
import Coupons from '../../components/Home/Coupons'
import LocationSection from '../../components/Home/LocationSection'

const Home = () => {
  return (
    <div>
      <Apartments />
      <Banner></Banner>
      <About></About>
      <Coupons></Coupons>
      <LocationSection></LocationSection>
    </div>
  )
}

export default Home
