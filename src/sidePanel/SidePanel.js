import ebook from './imgs/ebook.svg';
import tute from './imgs/tute.svg';
import library from './imgs/library-book.svg';
import book from './imgs/book.svg';
import payment from './imgs/payment-method.svg';
import './sidepanel.css';
import SPElement from './sidePanelElement/SPElement';

function SidePanel() {
    return (
        <aside className='side-panel'>
            <div className="side-panel-header">
                <h1 id="sph1">ict</h1>
                <h1 id="sph2">fromabc</h1>
            </div>
            <div className='side-panel-body'>
                <div className="spe-container" id="les-tue-container">
                    <SPElement id="selected" imgURL={ebook} text="My Lessons" />
                    <SPElement imgURL={tute} text="My Tutes" />
                </div>
                <div className="spe-container mt3em" id="courses-container">
                    <h1 className="ec-title">Courses</h1>
                    <SPElement imgURL={library} text='A/L 2026'/>
                    <SPElement imgURL={library} text='A/L 2025'/>
                    <SPElement imgURL={library} text='A/L 2024'/>
                    <SPElement imgURL={library} text='Grade 11'/>
                    <SPElement imgURL={library} text='Grade 10'/>
                    <SPElement imgURL={library} text='GIT'/>
                    <SPElement imgURL={library} text='A/L Video Modules'/>
                    <SPElement imgURL={library} text='O/L Video Modules'/>
                </div>
                <div className="spe-container mt3em" id="pastpapers-container">
                    <h1 className="ec-title">Past Papers</h1>
                    <SPElement imgURL={book} text='A/L Pastpapers' />
                    <SPElement imgURL={book} text='O/L Pastpapers' />
                </div>
                <div className="spe-container mt3em" id="instruction-container">
                    <h1 className="ec-title">Instructions</h1>
                    <SPElement imgURL={payment} text='Payment Details' />
                </div>
            </div>
        </aside>
    );
}

export default SidePanel;