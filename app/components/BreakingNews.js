import React from 'react'
import HonrizontalList from './lists/HorizontalList';

const BreakingNews = ({data}) => {
    return (
        <HonrizontalList title='Breaking News' data={data} />
    )
}

export default BreakingNews
