import Image from 'next/image'

function Profile({ url, className }) {
    return (
        <Image
            loading='lazy'
            src={url}
            width={40}
            height={40}
            className={`h-8 rounded-full cursor-pointer transition duration-150 transform hover:scale-110 ${className}`}
            alt="Absolute Chad" />
    )
}

export default Profile;