import './Gallery.css';

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
                src="/images/1.jpg"
                title="하품중"
                width="170"
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
                src="/images/2.jpg"
                title="똘망똘망"
                width="170"
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
                src="/images/3.jpg"
                title="자는중"
                width="170"
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
                src="/images/4.jpg"
                title="화들짝!"
                width="170"
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
                src="/images/5.jpg"
                title="발바닥"
                width="170"
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
                src="/images/6.jpg"
                title="콧바람"
                width="170"
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
                src="/images/8.jpg"
                title="시무룩"
                width="170"
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
                height="226.33"
                src="/images/7.jpg"
                title="joke!"
                width="170"
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
