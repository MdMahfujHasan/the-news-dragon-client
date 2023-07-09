import moment from 'moment';
import React from 'react';
import { Card, Image } from 'react-bootstrap';
import { FaRegBookmark, FaRegStar, FaShareAlt, FaStar } from 'react-icons/fa';
import { AiFillEye } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';

const NewsCard = ({ news }) => {
    const { _id, author, title, image_url, details, rating, total_view } = news;
    return (
        <Card className="mb-4">
            <Card.Header className='d-flex align-items-center'>
                <Image height="40px" src={author.img} roundedCircle></Image>
                <div className='ms-2 flex-grow-1'>
                    <p className='m-0'>{author?.name}</p>
                    <p className='m-0'><small>{moment(author.published_date).format('YYYY-MM-DD')}</small></p>
                </div>
                <div>
                    <FaRegBookmark />
                    <FaShareAlt />
                </div>
            </Card.Header>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Img variant="top" src={image_url} />
                <Card.Text>
                    {
                        details.length < 300 ? <>{details}</> :
                            <>{details.slice(0, 300)}...<Link to={`/news/${_id}`}>Read More</Link></>
                    }
                </Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted d-flex">
                <div className='flex-grow-1 d-flex align-items-center'>
                    <Rating style={{ maxWidth: 100 }} value={Math.round(rating?.number) || 0} readOnly />
                    <span className='ms-1 fw-bold'>{rating?.number}</span>
                </div>
                <div>
                    <AiFillEye className='me-1' />{total_view}
                </div>
            </Card.Footer>
        </Card>
    );
};

export default NewsCard;