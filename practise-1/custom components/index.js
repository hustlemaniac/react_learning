/**
Challenge: 

Part 1: Create a page of your own using a custom Page component

It should return an ordered list with the reasons why you're
excited to be learning React :)

function MainContent() {
    return (
        <div>
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

Part 2: 
- Add a `header` element with a nested `nav` element. Inside the `nav`,
  include a `img` element with the image of the React logo inside
  (src="./react-logo.png") and make sure to set the width to something
  more manageable so it doesn't take up the whole screen
- Add an `h1` with some text describing the page. (E.g. "Reasons
  I'm excited to learn React"). Place it above the ordered list.
- Add a `footer` after the list that says: 
    "© 20xx <last name here> development. All rights reserved."

Render your list to the page

 */


function MainContent() {
    return (
        <div>
            <header>
                <nav>
                    <img src="react-logo.png" width="40px"/>
                </nav>
            </header>
            <h1>Why am I excited to be learning React?</h1>
            <ol>
                <li>Create my own portfolio</li>
                <li>Explore the world web development</li>
                <li>Integerate any onward apps to the web using React</li>
                <li>Learn mobile app dev after learning React JS</li>
            </ol>
            <footer>© 2022 Kamasamudram development. All rights reserved.</footer>
        </div>

    )
}

ReactDOM.render(<MainContent />,document.getElementById("root"))