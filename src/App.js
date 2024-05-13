import './App.css';
import { Link, Element } from 'react-scroll';
import Blog from './components/Blog/Blog';
import Gallery from './components/Gallery/Gallery';


function App(){
    return (
      <div className='main_container'>
        <div className='main_head'>
            <div className='main_title'>
              <Link to="main_page"  smooth={true} duration={600} className='cu'>React Blog</Link>
            </div>
            <div className='Menu'>
              <Link to="gallery" smooth={true} duration={800} className='cu'>Gallery</Link>
            </div>
            <div className='Menu'>
              <Link to="blog" smooth={true} duration={750} className='cu'>Blog</Link>
            </div>
        </div>
        <Element name='main_page'>
          <div className='main__page'>
            REACT
          </div>
        </Element>
        <div className='main_body'>
            <Element name='gallery'>
              <Gallery></Gallery>
            </Element>
            <Element name='blog'> 
              <Blog></Blog>
            </Element>
        </div>
      </div>
    );
}

export default App;