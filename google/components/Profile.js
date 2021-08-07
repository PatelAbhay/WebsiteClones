function Profile({ url }) {
    return (
        <img
            loading='lazy'
            src={url}
            alt='profile-pic'
            className='h-8 rounded-full cursor-pointer transition duration-150 transform hover:scale-110' />
    )
}

export default Profile;