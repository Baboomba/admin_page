import Header from '../../components/header/Header';
import SideList from '../../components/sideList/SideList';
import './Home.scss'
import IndexBoard from '../../components/indexBoard/IndexBoard';


const Home = () => {
  return (
    <dvi>
      <div className='background'>
        <SideList />
        <div className='container'>
          <Header />
          <div className='container-background'>
            <IndexBoard />
          </div>
        </div>
      </div>
    </dvi>
  )
};

export default Home;