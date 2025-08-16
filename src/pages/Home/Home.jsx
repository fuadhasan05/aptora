import About from '../../components/Home/About'
import Amenities from '../../components/Home/Amenities'
import Banner from '../../components/Home/Banner'
import CommunityEvents from '../../components/Home/CommunityEvents'
import Coupons from '../../components/Home/Coupons'
import LocationSection from '../../components/Home/LocationSection'
import Testimonials from '../../components/Home/Testimonials'

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <About></About>
      <Coupons></Coupons>
      <LocationSection></LocationSection>
      <Testimonials></Testimonials>
      <Amenities></Amenities>
      <CommunityEvents/>
    </div>
  )
}

export default Home
