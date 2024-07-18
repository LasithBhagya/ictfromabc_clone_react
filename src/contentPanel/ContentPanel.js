import search from './imgs/search.svg';
import bell from './imgs/bell.svg';
import profile from './imgs/profile.svg';
import './ContentPanel.css'
import ContentHolder from './ContentHolder';

function ContentPanel() {
    const lessons = [
        ["HTML", "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat veritatis dignissimos, accusamus, molestias nulla laudantium maiores doloremque.", true],
        ["CSS", "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat veritatis dignissimos, accusamus, molestias nulla laudantium maiores doloremque.", false],
        ["Javascript", "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat veritatis dignissimos, accusamus, molestias nulla laudantium maiores doloremque.", false],
        ["Python", "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat veritatis dignissimos, accusamus, molestias nulla laudantium maiores doloremque.", false],
        ["SQL", "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat veritatis dignissimos, accusamus, molestias nulla laudantium maiores doloremque.", false],
        ["C#", "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat veritatis dignissimos, accusamus, molestias nulla laudantium maiores doloremque.", false],
        ["C++", "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat veritatis dignissimos, accusamus, molestias nulla laudantium maiores doloremque.", false],
        ["Java", "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat veritatis dignissimos, accusamus, molestias nulla laudantium maiores doloremque.", false]
    ];
    return(
        <div className='content-panel'>
            <div className="content-panel-header">
                <div className="search-box">
                    <img src={search} alt="" className="icon" />
                    <div className="text-box"><input type="search" id="search" placeholder="Type here to search" /></div>
                </div>
                <div className="status">
                    <img src={bell} alt="" className="notifications" />
                    <img src={profile} alt="" className="profile" />
                </div>
            </div>
            <div className="content-panel-body" id="content-panel-body">
                <ContentHolder type='mylessons' title='My Lessons' content={lessons} />
            </div>
        </div>
    );
}

export default ContentPanel;