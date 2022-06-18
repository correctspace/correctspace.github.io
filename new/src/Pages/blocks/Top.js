import {  Link  } from "react-router-dom";

function Top(props) {
    return (
        <div className="item">
            <div className="container">
                <div className="row align-center">
                    <div className="col-lg-6">
                        <div className="content">
                            <h2 className="wow fadeInLeft" data-wow-delay="500ms">{props.data.title}<strong></strong></h2>
                            <p className="wow fadeInRight" data-wow-delay="600ms">
                             {props.data.description}
                            </p>
                            <div className="button wow fadeInUp" data-wow-delay="700ms">
                                <Link className="btn btn-light effect btn-md" to={ props.data.link }>Get Started</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 thumb wow fadeInUp" data-wow-delay="900ms">
                        <img src={require("../../assets/img/vectors/devops.png")} alt="Thumb" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Top