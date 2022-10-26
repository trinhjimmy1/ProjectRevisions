import React from 'react';

const DisplayStateUp = ({names}) => {
    return (
        <div>
            <h1>display</h1>
            {
                names.map((name, i) => (
                    <div key={i}>{name}</div>
                ))
            }
        </div>
    );
};

export default DisplayStateUp;