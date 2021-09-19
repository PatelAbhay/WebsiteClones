import React from 'react'
import "../css/Contacts.css"
import VideocamIcon from '@mui/icons-material/Videocam';
import SearchIcon from '@mui/icons-material/Search';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ContactRow from './ContactRow';

function Contacts() {
    
    const contacts = [
        {src: "https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5bb22ae84bbe6f67d2e82e05%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D627%26cropX2%3D1639%26cropY1%3D129%26cropY2%3D1142", name: "Jeff Bezos"},
        {src: "https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5f4ebe0c87612dab4f12a597%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D292%26cropX2%3D3684%26cropY1%3D592%26cropY2%3D3987", name: "Bill Gates"},
        {src: "https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTc5OTk2ODUyMTMxNzM0ODcy/gettyimages-1229892983-square.jpg", name: "Elon Musk"},
        {src: "https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5c76b7d331358e35dd2773a9%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D0%26cropX2%3D4401%26cropY1%3D0%26cropY2%3D4401", name: "Mark Zuckerburg"},
        {src: "https://assets.vogue.com/photos/5926e3a429c2c85ce79d68c2/master/pass/00-tout-queen-elizabeth-watches-the-crown.jpg", name: "The Queen"},
        {src: "https://www.irishtimes.com/polopoly_fs/1.3170107.1501253408!/image/image.jpg_gen/derivatives/ratio_1x1_w1200/image.jpg", name: "Harry Potter"},
        {src: "https://pbs.twimg.com/profile_images/1364123850036842499/cvnxSqqy_400x400.jpg", name: "Bilbo Baggins"},
    ]
    
    return (
        <div className="contact-container">
            <div className="contact-top">
                <h2>Contacts</h2>
                <div className="contact-icons">
                    <VideocamIcon />
                    <SearchIcon />
                    <MoreHorizIcon />
                </div>
            </div>

            <div className="contact-bottom">
                {contacts.map(contact => (
                    <ContactRow
                        name={contact.name}
                        src={contact.src} />
                ))}
            </div>
        </div>
    )
}

export default Contacts
