import Image from 'next/image'

function Login() {
    return (
        <div>
            <Image src="/facebook-logo.svg"
                height={400}
                width={400}
                objectFit="contain"
            />
        </div>
    )
}

export default Login