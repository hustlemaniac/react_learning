
export default function MainContent(){
    return (
        // <h1> and <ol> are sibling elements hence to be wrapped
        <div className="content">
            <h1>Why am I excited to be learning React?</h1>
            <ol>
                <li>Create my own portfolio</li>
                <li>Explore the world web development</li>
                <li>Integerate any onward apps to the web using React</li>
                <li>Learn mobile app dev after learning React JS</li>
            </ol>
        </div>

    )
}