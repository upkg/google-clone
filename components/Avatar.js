function Avatar({ url, className }) {
    return( 
    <img 
        loading="lazy" 
        className={`inline-flex h-10 w-10 rounded-full cursor-pointer transition 
        duration-150 transform hover:scale-110 ${className}`}
        src={url}
        alt='Profile Picture'
    />
    )
}

export default Avatar
