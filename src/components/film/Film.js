import React from 'react';

function Film(props) {
    return (
        <div className='  border-2 border-x-slate-400 shadow-md shadow-slate-600  hover:scale-110 hover:bg-orange-300 hover:shadow-xl hover:shadow-yellow-500 hover:cursor-pointer'>
                <div>
                    <img src={props.image} alt="" />
                </div>
                <div>
                    <h4 className='text-center'>{props.title}</h4>
                    <p>Release Date : {props.release}</p>
                    <p>Duration : {props.duration}</p>

                </div>
        </div>
    );
};

export default Film;