import Image from 'next/image'

function LandingBanner() {
    return (
        <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
            <Image src="https://a0.muscache.com/im/pictures/57b9f708-bb12-498c-bc33-769f8fc43e63.jpg?im_w=2560"
                layout="fill" objectFit="cover" />


        </div>
    )
}

export default LandingBanner
