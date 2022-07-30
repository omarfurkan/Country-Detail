import React, { useContext } from 'react';
import { CountryContext } from '../../App';

const BlogDetail = () => {
    const [countries] = useContext(CountryContext)
    return (
        <div>
            <h1>Blog Detail: {countries.length} </h1>
        </div>
    );
};

export default BlogDetail;