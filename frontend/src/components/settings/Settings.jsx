import { useChannelSettings } from "../../shared/hooks/useChannlesSettings";
import { LoadingSpinner } from "../LoadingSpinner";
import { channelSettings } from "../channel/ChannelSettings";
 
export const Settings = () =>{
    const {channelSettings, isFetching, saveSettings} = useChannelSettings()
 
    if(isFetching){
        return <LoadingSpinner/>
    }
 
    return(
        <div className="settings-container">
            <span>Settings</span>
            <channelSettings Settings={channelSettings} saveSettings={saveSettings}/>
           
        </div>
    )
}