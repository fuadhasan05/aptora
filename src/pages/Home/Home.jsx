import About from '../../components/Home/About'
import Apartments from '../../components/Home/Apartments'
import Banner from '../../components/Home/Banner'
import Coupons from '../../components/Home/Coupons'

const Home = () => {
  return (
    <div>
      <Apartments />
      <Banner></Banner>
      <About></About>
      <Coupons></Coupons>
    </div>
  )
}

export default Home
