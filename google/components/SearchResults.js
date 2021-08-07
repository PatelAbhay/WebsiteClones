function SearchResults({ results }) {
    return (
        <div className="mx-auto w-full px-3 sm:pl-[5%] md:pl-[14%] lg:pl-44">
            <p className="text-gray-600 text-sm mb-5 mt-2">
                About {results.searchInformation?.formattedTotalResults} results
                ({results.searchInformation?.formattedSearchTime} seconds)
            </p>

            {results.items?.map((result) => (
                <div key={result.link} className="max-w-xl mb-8">
                    <div>
                        <a href={result.link} className="text-sm">
                            {result.formattedUrl}
                        </a>
                    </div>

                    <p>{result.snippet}</p>
                </div>
            ))}
        </div>
    )
}

export default SearchResults;