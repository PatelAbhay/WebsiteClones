import Head from 'next/head'
import SearchHeader from '../components/SearchHeader'
import { useRouter } from 'next/router'
import SearchResults from '../components/SearchResults'

function Search({ results }) {

    const router = useRouter();

    return (
        <div>
            <Head>
                <title>{router.query.term} - Google Search</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/GoogleLogo.svg" />
            </Head>

            {/* Header */}
            <SearchHeader />

            {/* Search Results */}
            <SearchResults results={results} />
        </div>
    )

}

export default Search;

/* Handles server-side rendering */
export async function getServerSideProps(context) {
    const startIndex = context.query.start || "0";

    const data = await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${context.query.term}&start=${startIndex}`
    ).then(response => response.json())

    return {
        props: {
            results: data,
        },
    }
}