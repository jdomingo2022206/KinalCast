import { Navbar } from "../../components/navbars/Navbar"
import { useChannels } from "../../shared/hooks/useChannels"
import { useUserDetails } from "../../shared/hooks"
import { useEffect } from "react"

import './dashboardPage.css'

export const DashboardPage = () => {
  const {getChannels, allChannels, isFetching} =useChannels()
  const {isLogged} = useUserDetails()

  useEffect(() =>{
    getChannels(isLogged)
  },[])

  if(isFetching){
    return <LoadingSpinner />;
  }

  return (
    <div>'
      <Navbar/>
      <Content channels={allChannels} getChannels={getChannels}/>
    </div>
  )
}
