import search from './imgs/search.svg';
import bell from './imgs/bell.svg';
import profile from './imgs/profile.svg';
import './ContentPanel.css'
import ContentHolder from './ContentHolder';
import { toggleNotificationPanel } from './notificationPanelElement/NPElement';

const lessons = [
    // [ ID, NAME, DESCRIPTION, IS_LIVE ]
    { id: '2026_al_html', name: 'HTML', description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat veritatis dignissimos, accusamus, molestias nulla laudantium maiores doloremque.', isLive: true },
    { id: '2026_al_css', name: 'CSS', description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat veritatis dignissimos, accusamus, molestias nulla laudantium maiores doloremque.', isLive: false },
    { id: '2026_al_js', name: 'Javascript', description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat veritatis dignissimos, accusamus, molestias nulla laudantium maiores doloremque.', isLive: false },
    { id: '2026_al_python', name: 'Python', description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat veritatis dignissimos, accusamus, molestias nulla laudantium maiores doloremque.', isLive: false },
    { id: '2026_al_sql', name: 'SQL', description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat veritatis dignissimos, accusamus, molestias nulla laudantium maiores doloremque.', isLive: false },
    { id: '2026_al_cs', name: 'C#', description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat veritatis dignissimos, accusamus, molestias nulla laudantium maiores doloremque.', isLive: false },
    { id: '2026_al_cpp', name: 'C++', description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat veritatis dignissimos, accusamus, molestias nulla laudantium maiores doloremque.', isLive: false },
    { id: '2026_al_java', name: 'Java', description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat veritatis dignissimos, accusamus, molestias nulla laudantium maiores doloremque.', isLive: false }
];
const tutes = [
    // [ ID, NAME, DESCRIPTION, IS_AVAILABLE ]
    { id: '2026_al_june', name: 'June', description: 'Lesson 01, 02 (part 02)', ordered: true, released: true, available: false },
    { id: '2026_al_july', name: 'July', description: 'Lesson 01, 02 (part 01)', ordered: true, released: true, available: true },
    { id: '2026_al_august', name: 'August', description: 'Lesson 01, 02 (part 03)', ordered: false, released: false, available: true },
    { id: '2026_al_september', name: 'September', description: 'Lesson 01, 02 (part 04)', ordered: false, released: false, available: false },
    { id: '2026_al_october', name: 'October', description: 'Lesson 01, 02 (part 05)', ordered: false, released: false, available: false },
    { id: '2026_al_november', name: 'November', description: 'Lesson 01, 02 (part 06)', ordered: false, released: false, available: false }
];

function ContentPanel() {
    const handleClick = () => {toggleNotificationPanel(document.querySelector('.notification-button'))}
    return(
        <div className='content-panel'>
            <div className="content-panel-header">
                <div className="search-box">
                    <img src={search} alt="" className="icon" />
                    <div className="text-box"><input type="search" id="search" placeholder="Type here to search" /></div>
                </div>
                <div className="status">
                    <button className="notification-button" id='toggle-notification-button' onClick={handleClick}><img src={bell} alt="" /></button>
                    <img src={profile} alt="" className="profile" />
                </div>
            </div>
            <div className="content-panel-body" id="content-panel-body">
                <ContentHolder type='mylessons' title='My Lessons' content={lessons} />
                {/* <ContentHolder type='mytutes' title='My Tutes' content={tutes} /> */}
            </div>
        </div>
    );
}

export default ContentPanel;