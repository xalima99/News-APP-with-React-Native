import React from 'react'
import HonrizontalList from './lists/HorizontalList';

const BreakingNews = ({data}) => {
    return (
        <HonrizontalList title='Tech News' data={data} />
    )
}

export default BreakingNews