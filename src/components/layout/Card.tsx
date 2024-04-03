import React from 'react'

type Props = {
    children?: React.ReactNode;
}

const Card = ({ children }: Props) => {
    return (
        <div className='px-5 py-7 bg-white rounded-md shadow-sm'>
            {children}
        </div>
    )
}

export default Card