import './Gallery.css';
import img1 from './1.jpg'
import img2 from './2.jpg'
import img3 from './3.jpg'
import img4 from './4.jpg'
import img5 from './5.jpg'
import img6 from './6.jpg'
import img7 from './7.jpg'
import img8 from './8.jpg'

function Gallery(){
  return (
    <div>
        <body>
        <div id="container">
          <div id="head">
            <div className="title">
              KKOMI
            </div>
            <div id="add">
              ( 2017.01.15~ )
            </div>
          </div>
          <div id="main">
            <div className="picture">
              <img
                alt="치와와 사진"
                src={img1}
                title="하품중"
                width="190"
              />
              <p>
                2021.02.02
                <br />
                하품중
              </p>
            </div>
            <div className="picture">
              <img
                alt="치와와 사진"
                src={img2}
                title="똘망똘망"
                width="190"
              />
              <p>
                2021.02.03
                <br />
                똘망똘망
              </p>
            </div>
            <div className="picture">
              <img
                alt="치와와 사진"
                src={img3}
                title="자는중"
                width="190"
              />
              <p>
                2021.04.07
                <br />
                자는중
              </p>
            </div>
            <div className="picture">
              <img
                alt="치와와 사진"
                src={img4}
                title="화들짝!"
                width="190"
              />
              <p>
                2021.07.15
                <br />
                화들짝!
              </p>
            </div>
            <div className="picture">
              <img
                alt="치와와 사진"
                src={img5}
                title="발바닥"
                width="190"
              />
              <p>
                2021.08.05
                <br />
                발바닥
              </p>
            </div>
            <div className="picture">
              <img
                alt="치와와 사진"
                src={img6}
                title="콧바람"
                width="190"
              />
              <p>
                2021.08.11
                <br />
                콧바람
              </p>
            </div>
            <div className="picture">
              <img
                alt="치와와 사진"
                src={img8}
                title="시무룩"
                width="190"
              />
              <p>
                2021.11.04
                <br />
                시무룩
              </p>
            </div>
            <div className="picture">
              <img
                alt="치와와 사진"
                height="253.33"
                src={img7}
                title="joke!"
                width="190"
              />
              <p className="last">
                2024.02.15
                <br />
                joke!
              </p>
            </div>
          </div>
        </div>
      </body>
    </div>
  )
}

export default Gallery;
