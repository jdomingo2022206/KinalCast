const imageUrl = 'https://static-cdn.jtvnw.net/user-default-pictures-uv/998f01ae-def8-11e9-b95c-784f43822e80-profile_image-300x300.png'

const ChannelAvatar = ({url}) => {
    return(
        <div className="channels-avatar-container">
            <img src={url || imageUrl} alt="Default Avatar" width='100%' height='100%' />
        </div>
    )
}

export const ChannelCard = ({
    title, 
    id,
    username,
    isOnline,
    avatarUrl,
    navigateToChannelHandle
}) => {
    const handleNavigate = () => {
        navigateToChannelHandle(id)
    }

    return(
        <div className="channels-card" onClick={handleNavigate}>
            <ChannelAvatar url={avatarUrl}/>
            <span className="channels-card-title">{title}</span>
            <span className="channels-card-title">{username}</span>
            <span className="channels-card-title" style={{color: isOnline? 'green':'red'}}>
                {isOnline? 'Online':'Offline'}
            </span>
        </div>
    )
}