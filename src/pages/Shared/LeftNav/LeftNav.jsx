import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftNav = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('https://the-news-dragon-server-mdmahfujhasan.vercel.app/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
            .catch(error => console.error(error))
    }, [])

    return (
        <div>
            {/* <h5 className='fw-bold'>Login with</h5> */}
            <div className='ps-2 pt-3'>
                {
                    categories.map(category => <p key={category.id}>
                        <Link
                            to={`/category/${category.id}`}
                            className='text-decoration-none text-secondary fw-bold'>{category.name}
                        </Link>
                    </p>)
                }
            </div>
        </div>
    );
};

export default LeftNav;