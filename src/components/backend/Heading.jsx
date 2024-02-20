import React from 'react';

const Heading = ({title}) => {
    return (
        <div>
            <h2 className='text-3xl font-semibold dark:text-slate-200'> {title} </h2>
        </div>
    );
};

export default Heading;