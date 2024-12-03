import React from 'react'
import { Container, Row, Carousel } from 'react-bootstrap'
import User1 from "../../assets/blog/review-author-1.jpg";
import User2 from "../../assets/blog/review-author-2.jpg";
import User3 from "../../assets/blog/review-author-3.jpg";
import User4 from "../../assets/blog/review-author-5.jpg";

function BlogSection6() {
  return (
    <section className='blog_section'>
        <Container>
            <Row>
                <Carousel>
                    <Carousel.Item>
                        <Carousel.Caption>
                            <div className="user_img">
                                <img src={User1} className="img-fluid" alt="User-1" />
                            </div>
                            <p>
                                " Etiam sapien sem at sagittis congue augue massa varius
                                sodales sapien undo tempus dolor egestas magna suscipit magna
                                tempus aliquet porta sodales augue suscipit luctus neque "
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Carousel.Caption>
                            <div className="user_img">
                                <img src={User2} className="img-fluid" alt="User-1" />
                            </div>
                            <p>
                                " Etiam sapien sem at sagittis congue augue massa varius
                                sodales sapien undo tempus dolor egestas magna suscipit magna
                                tempus aliquet porta sodales augue suscipit luctus neque "
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Carousel.Caption>
                            <div className="user_img">
                                <img src={User3} className="img-fluid" alt="User-1" />
                            </div>
                            <p>
                                " Etiam sapien sem at sagittis congue augue massa varius
                                sodales sapien undo tempus dolor egestas magna suscipit magna
                                tempus aliquet porta sodales augue suscipit luctus neque "
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </Row>
        </Container>
    </section>
  )
}

export default BlogSection6