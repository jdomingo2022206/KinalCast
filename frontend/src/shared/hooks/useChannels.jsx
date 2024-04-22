/* eslint-disable no-extra-boolean-cast */
import { useState } from "react";
import toast from "react-hot-toast";
import { getChannels as getChannelsRequest, getFollowedChannels } from "../../services/api";

export const useChannels = () => {
    const [ channels, setChannels] = useState(null)

    const getChannels = async (isLogged = false) =>{
        const channelsData = await getChannelsRequest()
        if(channelsData.error){
            console.log('Chipilin pre toast'+channelsData.error)
            return toast.error(
                channelsData.e?.response?.data || 'Chipilin pa: Ocurrió un error al leer los canales'
            )
        }

        if(!isLogged){
            return setChannels({
                channels: channelsData.data.channels
            })
        }   

        const followedChannelsData = await getFollowedChannels();

        if(followedChannelsData.error){
            console.log('Chipilin pre toast'+channelsData.error)
            return toast.error(
                channelsData.e?.response?.data || 'Chipilin pa: Ocurrió un error al leer los canales  que sigues'
            )
        }
        

        setChannels({
            channels: channelsData.data.channels,
            followedChannels: followedChannelsData.data.channels.filter(channel =>
                followedChannelsData.data.followedChannels.includes(channel.id)
            )
        })

    }

    return{
        getChannels,
        isFetching: !Boolean(channels),
        allChannels: channels?.channels,
        followedChannels: channels?.followedChannels
    }
}