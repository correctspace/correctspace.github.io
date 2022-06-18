import React from 'react'

function PrivateCloudServices() {
  return (
    <>
<div className="item">
<div className="container">
    <div className="row align-center">
        <div className="col-lg-6">
            <div className="content">
                <h2 className="wow fadeInLeft" data-wow-delay="500ms">We are a Strong DevOps Company <strong></strong></h2>
                <p className="wow fadeInRight" data-wow-delay="600ms">
                    We are offering services under the Hybrid cloud, CI/CD, Docker, Terraform, Kubernetes,
                    Infrastructure security, Monitoring, and Disaster management solutions. We also help to increase an
                    organization’s speed to deliver the various platform applications and services. It permits
                    organizations to serve their customers better and compete in the market.
                </p>
                <div className="button wow fadeInUp" data-wow-delay="700ms">
                    <a className="btn btn-light effect btn-md" href="contact-us.html">Get Started</a>
                </div>
            </div>
        </div>
        <div className="col-lg-6 thumb wow fadeInUp" data-wow-delay="900ms">
            <img src={require("../assets/img/vectors/devops.png")} alt="Thumb"/>
        </div>
    </div>
</div>
</div>   
    </>
  )
}

export default PrivateCloudServices