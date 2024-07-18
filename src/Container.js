import './Container.css';
import SidePanel from './sidePanel/SidePanel';
import ContentPanel from './contentPanel/ContentPanel';

function Container() {
    return (
        <div className="container">
            <SidePanel />
            <ContentPanel />
        </div>
    );
}

export default Container;
