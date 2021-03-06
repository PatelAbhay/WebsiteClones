import { useRouter } from 'next/router'
import Link from 'next/link'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline'

function Pagination() {

    const router = useRouter();

    const startIndex = Number(router.query.start) || 0;

    return (
        <div className="flex max-w-lg justiffy-between text-blue-700 mb-8">
            {startIndex >= 10 && (
                <Link href={`/search?term=${router.query.term}&start=${startIndex - 10}`}>
                    <div className="flex flex-grow flex-col items-center cursor-pointer hover:underline">
                        <ChevronLeftIcon className="h-4" />
                        <p>Next</p>
                    </div>
                </Link>
            )}

            <Link href={`/search?term=${router.query.term}&start=${startIndex + 10}`}>
                <div className="flex flex-grow flex-col items-center cursor-pointer hover:underline">
                    <ChevronRightIcon className="h-4" />
                    <p>Next</p>
                </div>
            </Link>
        </div>
    )
}

export default Pagination;