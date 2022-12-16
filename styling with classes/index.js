/**
Challenge:
- Add an `ul` inside the Header's `nav` and create
  the following `li`s: "Pricing", "About", & "Contact"
- Using flexbox, line up the nav items horizontally, and
  put them inline with the React logo.
- Change the image styling to happen in CSS instead of in-line
  For practice, add a new class to the image in order to style it
- Add your flare to the styling 
*/

function Header(){
    return (
        <header>
            <nav className="nav">
                <img className="nav-logo" src="react-logo.png" />
                <ul className="nav-items">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}

function Footer(){
    return (
        <footer>© 2022 Kamasamudram development. All rights reserved.</footer>
    )
}

function MainContent(){
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

function Page() {
    return (
    // Page()=Parent component Header(), MainContent(), Footer() are children components
        <div>
            <Header />
            <MainContent />
            <Footer />
        </div>

    )
}

ReactDOM.render(<Page />,document.getElementById("root"))

// ReactDOM.render(
//     <div>
//         <Header />,<Page />,<Footer />
//     </div>,document.getElementById("root"))