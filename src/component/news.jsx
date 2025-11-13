import "../styles/news.css";
import news1 from "../img/newsone.jpg";
import news2 from "../img/newstwo.jpg";
import news3 from "../img/newsthree.jpg";
import personone from "../img/personone.jpg";
import persontwo from "../img/persontwo.jpg";
import personthree from "../img/personthree.jpg";
import Newanmtion from "../img/newsanmtion.png"
import send from "../img/logo2.png"
import sea from "../img/logo5.png"
import square from "../img/sqauretwo.png"

function News() {
  return (
    <>
      <div className="news-section py-5">
        <div className="container text-center mb-4">
          <h2 className=" fw-bold">Latest News</h2>
          <h4 className="text-muted">Our Latest Updates & Articles</h4>
        </div>

        <div className="row justify-content-center m-2">
          <div className="col-md-4 mb-4">
            <div className="news-card shadow-sm">
              <div className="image">
                <img src={news1} alt="News 1" className="img-fluid rounded-top w-100" />
              </div>
              <div className="info d-flex justify-content-between align-items-center p-3">
                <div className="person d-flex align-items-center gap-2">
                  <img src={personone} alt="person one" className="person-img" />
                  <h5 className="m-0">Michel</h5>
                </div>
                <div className="date text-muted">
                  <i className="fa-solid fa-calendar me-2"></i>17 July 2021
                </div>
              </div>
              <div className="content p-3">
                <p>Dental Care for women is very important and must be taken seriously.</p>
              </div>
              <div className="send">
                <button>Read More <i class="fa-solid fa-chevron-right" style={{marginLeft:"10px"}}></i></button>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="news-card shadow-sm">
              <div className="image">
                <img src={news2} alt="News 2" className="img-fluid rounded-top w-100" />
              </div>
              <div className="info d-flex justify-content-between align-items-center p-3">
                <div className="person d-flex align-items-center gap-2">
                  <img src={persontwo} alt="person two" className="person-img" />
                  <h5 className="m-0">Sarah</h5>
                </div>
                <div className="date text-muted">
                  <i className="fa-solid fa-calendar me-2"></i>20 Aug 2021
                </div>
              </div>
              <div className="content p-3">
                <p>Regular checkups can help you prevent serious dental issues early.</p>
              </div>
              <div className="send">
                <button>Read More <i class="fa-solid fa-chevron-right" style={{marginLeft:"10px"}}></i></button>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="news-card shadow-sm">
              <div className="image">
                <img src={news3} alt="News 3" className=" w-100" />
              </div>
              <div className="info d-flex justify-content-between align-items-center p-3">
                <div className="person d-flex align-items-center gap-2">
                  <img src={personthree} alt="person three" className="person-img" />
                  <h5 className="m-0">John</h5>
                </div>
                <div className="date text-muted">
                  <i className="fa-solid fa-calendar me-2"></i>02 Sep 2021
                </div>
              </div>
              <div className="content p-3">
                <p>Children’s dental health should be monitored regularly for best growth.</p>
              </div>
              <div className="send">
                <button>Read More <i class="fa-solid fa-chevron-right" style={{marginLeft:"10px"}}></i></button>
              </div>
            </div>
          </div>
        </div>
        <div className="anmation">
                        <div className="anone">
                            <img src={Newanmtion} alt="" />
                        </div>
                         <div className="antwo">
                            <img src={send} alt="" />
                        </div>
                         <div className="anthree">
                            <img src={sea} alt="" />
                        </div>
                         <div className="anfour">
                            <img src={square} alt="" />
                        </div>
                    </div>
      </div>
    </>
  );
}

export default News;
