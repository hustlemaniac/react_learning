/**
Mini Challenge:
- Move the `header` element from Page into 
its own component called "Header"
- Move the `footer` into its own component called "Footer" 
  and render that component inside the Page component.
- Move the `h1` and `ol` together into another component
  called "MainContent" and render inside Page as well.
 */

function Header(){
    return (
        <header>
            <nav>
                <img src="react-logo.png" width="40px"/>
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