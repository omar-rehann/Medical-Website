import "../pagesstyles/aboutpages.css";
import News from "../component/news"

function Blog(){
    return(
        <>
        <div className="pageone">
        <div className="container">
          <div className="banner-content">
            <h1>Blog</h1>
            <div className="breadcrumb">
              <span><i class="fa-solid fa-house"></i> Home </span>
              <span className="separator">  /  </span>
              <span className="current"> Blog </span>
            </div>
          </div>
        </div>
      </div>
        <News/>
        </>

    )
}
export default Blog