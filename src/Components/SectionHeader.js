import React from "react";

const SectionHeader = (props) => {
    return (
        <div className='py-2 px-4 rounded border bg-primary bg-opacity-10 mb-2'>
            <h3 className='m-0 p-0'>
                {props.title}
            </h3>
        </div>
    );
};

export default SectionHeader;