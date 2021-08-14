import Image from 'next/image'

function Header() {
    return (
        <header>
            {/* Search */}
            <div>
                <Image src="/facebook-logo.svg"
                    width={40} height={40}
                />
            </div>

            {/* Pages Icons */}
            <div>

            </div>

            {/* Profile Icons */}
            <div>

            </div>
        </header>
    )
}

export default Header;