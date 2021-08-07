import { SearchIcon, MapIcon, PhotographIcon, NewspaperIcon, PlayIcon, DotsVerticalIcon } from '@heroicons/react/outline'
import Option from './Option'

function SearchHeaderOptions() {
    return (
        <div className="flex w-full text-gray-700 justify-evenly text-sm lg:justify-start 
        lg:space-x-36 lg:pl-44 border-b-[1px]">
            <div className="flex space-x-6">
                <Option Icon={SearchIcon}
                    title="All"
                    selected />
                <Option Icon={PhotographIcon}
                    title="Images" />
                <Option Icon={NewspaperIcon}
                    title="News" />
                <Option Icon={PlayIcon}
                    title="Video" />
                <Option Icon={MapIcon}
                    title="Map" />
                <Option Icon={DotsVerticalIcon}
                    title="More" />
            </div>

            <div className="flex space-x-4">
                <p className="useless-links">Settings</p>
                <p className="useless-links">Tools</p>
            </div>
        </div>
    )
}

export default SearchHeaderOptions;