import ebook from './imgs/ebook.svg';
import tute from './imgs/tute.svg';
import library from './imgs/library-book.svg';
import book from './imgs/book.svg';
import payment from './imgs/payment-method.svg';
import './sidepanel.css';
import SPElement from './sidePanelElement/SPElement';
import { useSelection } from './SelectionContext';

function SidePanel() {
    const { spes } = useSelection();
    return (
        <div className='side-panel'>
            <div className="side-panel-header">
                <h1 id="sph1">ict</h1>
                <h1 id="sph2">fromabc</h1>
            </div>
            <div className='side-panel-body'>
                <div className="spe-container" id="les-tue-container">
                    <SPElement url={`/${spes[0].url}`} id={spes[0]} status={spes[0].selected ? 'selected' : undefined} imgURL={ebook} text="My Lessons" />
                    <SPElement url={`/${spes[1].url}`} id={spes[1]} status={spes[1].selected ? 'selected' : undefined} imgURL={tute} text="My Tutes" />
                </div>
                <div className="spe-container mt3em" id="courses-container">
                    <h1 className="ec-title">Courses</h1>
                    <SPElement url={`/${spes[2].url}`} id={spes[2]} status={spes[2].selected ? 'selected' : undefined} imgURL={library} text='A/L 2026' />
                    <SPElement url={`/${spes[3].url}`} id={spes[3]} status={spes[3].selected ? 'selected' : undefined} imgURL={library} text='A/L 2025' />
                    <SPElement url={`/${spes[4].url}`} id={spes[4]} status={spes[4].selected ? 'selected' : undefined} imgURL={library} text='A/L 2024' />
                    <SPElement url={`/${spes[5].url}`} id={spes[5]} status={spes[5].selected ? 'selected' : undefined} imgURL={library} text='Grade 11' />
                    <SPElement url={`/${spes[6].url}`} id={spes[6]} status={spes[6].selected ? 'selected' : undefined} imgURL={library} text='Grade 10' />
                    <SPElement url={`/${spes[7].url}`} id={spes[7]} status={spes[7].selected ? 'selected' : undefined} imgURL={library} text='GIT'/>
                    <SPElement url={`/${spes[8].url}`} id={spes[8]} status={spes[8].selected ? 'selected' : undefined} imgURL={library} text='A/L Video Modules'/>
                    <SPElement url={`/${spes[9].url}`} id={spes[9]} status={spes[9].selected ? 'selected' : undefined} imgURL={library} text='O/L Video Modules'/>
                </div>
                <div className="spe-container mt3em" id="pastpapers-container">
                    <h1 className="ec-title">Past Papers</h1>
                    <SPElement url={`/${spes[10].url}`} id={spes[10]} status={spes[10].selected ? 'selected' : undefined} imgURL={book} text='A/L Pastpapers' />
                    <SPElement url={`/${spes[11].url}`} id={spes[11]} status={spes[11].selected ? 'selected' : undefined} imgURL={book} text='O/L Pastpapers' />
                </div>
                <div className="spe-container mt3em" id="instruction-container">
                    <h1 className="ec-title">Instructions</h1>
                    <SPElement url={`/${spes[12].url}`} id={spes[12]} status={spes[12].selected ? 'selected' : undefined} imgURL={payment} text='Payment Details' />
                </div>
            </div>
        </div>
    );
}

export default SidePanel;