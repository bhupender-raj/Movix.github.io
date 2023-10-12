import React, { useState } from 'react'
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper'
import SwitchTabs from '../../../components/switchTabs/SwitchTabs'
import '../style.scss'
import useFetch from '../../../hooks/useFetch'
import Carousels from '../../../components/carousel/Carousels'



const TopRated = () => {
  const [endpoint, setEndpoint] = useState("movie");
  const {data, loading} = useFetch(`/${endpoint}/top_rated`);



  const onTabChange = (tab) => {
    setEndpoint(tab === "Movies" ? "movie" : "tv")
  };


  return (

    <div className='carouselSection'>
        <ContentWrapper>
            <span className="carouselTitle">Top Rated</span>
            < SwitchTabs data={["Movies", "TV Shows"]} onTabChange={onTabChange}/>
        </ContentWrapper>
        <Carousels 
        data={data?.results} 
        loading={loading}
        endpoint={endpoint} />
    </div>
  )
}

export default TopRated