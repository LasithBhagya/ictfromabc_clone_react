import { Route, Routes, Navigate } from 'react-router-dom';
import ContentHolder from "./contentPanel/ContentHolder";
import PageNotFound from './contentPanel/ErrorMessages/PageNotFound';
import { useSelection } from './sidePanel/SelectionContext';

const lessons = [
    // [ ID, NAME, DESCRIPTION, IS_LIVE ]
    { id: '2026_al_react', name: 'React', description: 'React is a JavaScript library for building user interfaces, particularly single-page applications, using components.', isLive: true },
    { id: '2026_al_html', name: 'HTML', description: 'HTML is the standard markup language for creating web pages, providing structure with elements like headings and paragraphs.', isLive: false },
    { id: '2026_al_css', name: 'CSS', description: 'CSS (Cascading Style Sheets) is a language used to describe the presentation and styling of HTML elements on a webpage.', isLive: false },
    { id: '2026_al_js', name: 'Javascript', description: 'JavaScript is a programming language used to create dynamic, interactive content on websites, such as animations and form validations.', isLive: false },
    { id: '2026_al_python', name: 'Python', description: 'Python is a versatile, high-level programming language known for its readability, simplicity, and wide range of applications.', isLive: false },
    { id: '2026_al_sql', name: 'SQL', description: 'SQL (Structured Query Language) is used for managing and manipulating relational databases, enabling data querying, updating, and administration.', isLive: false },
    { id: '2026_al_cs', name: 'C#', description: 'C# is a modern, object-oriented programming language developed by Microsoft for building applications on the .NET framework.', isLive: false },
    { id: '2026_al_java', name: 'Java', description: 'Java is a high-level, object-oriented programming language designed for cross-platform applications, known for its portability and robustness.', isLive: false }
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

const MyLessons = <ContentHolder type='mylessons' title='My Lessons' content={lessons} />;
const MyTutes = <ContentHolder type='mytutes' title='My Tutes' content={tutes} />;

function RouteHandler() {
    const { spes } = useSelection();
    return(
        <Routes>
            <Route path="/" element={<Navigate to="/myLessons" />} />
            <Route path={`/${spes[0].url}`} element={MyLessons} />
            <Route path={`/${spes[1].url}`} element={MyTutes} />
            <Route path="*" element={<PageNotFound />} />
        </Routes>
    )
}

export default RouteHandler;