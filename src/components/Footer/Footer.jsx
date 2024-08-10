import React from "react";

import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import "./footer.css";

import { Link } from "react-router-dom";

const MY__ACCOUNT = [
  {
    display: "Author",
    url: "https://kozhydlomark-portfolio.vercel.app/",
  },
  {
    display: "Contact Me",
    url: "/contact",
  },
  {
    display: "Collection",
    url: "/market",
  },

];




const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="3" md="6" sm="6" className="mb-4">
            <div className="logo">
              <h2 className=" d-flex gap-2 align-items-center ">
                <span>
                  <i class="ri-fire-fill"></i>
                </span>
                NFTs
              </h2>
              <p>
              Browse and discover the digital art pieces I've created and collected. Each NFT is a representation of my creativity and passion
              </p>
            </div>
          </Col>

          <Col lg="2" md="3" sm="6" className="mb-4">
            <h5>My Account</h5>
            <ListGroup className="list__group">
              {MY__ACCOUNT.map((item, index) => (
                <ListGroupItem key={index} className="list__item">
                  <Link to={item.url}> {item.display} </Link>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>


         

          <Col lg="3" md="6" sm="6" className="mb-4">
            <h5>Newsletter</h5>
            <input type="text" className="newsletter" placeholder="Email" />
            <div className="social__links d-flex gap-3 align-items-center ">
              <span>
                <Link to="https://www.facebook.com/profile.php?id=100043989618554&locale=uk_UA">
                  <i class="ri-facebook-line"></i>
                </Link>
              </span>
              <span>
                <Link to="https://x.com/kozhydlo">
                  <i class="ri-twitter-line"></i>
                </Link>
              </span>
              <span>
                <Link to="#">
                  <i class="https://t.me/Kozhydlom"></i>
                </Link>
              </span>
              
            </div>
          </Col>

          <Col lg="12" className=" mt-4 text-center">
            <p className="copyright">
              {" "}
              Copyrights 2024, Developed by Kozhydlo Mark. @Kozhydlo Tech Diary
              All Rights Reserved.{" "}
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
