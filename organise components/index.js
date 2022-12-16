
/**
Challenge: move the Header, Footer and MainContent components
into their own files.
*/

import Header from "./Header"
import Footer from "./Footer"
import MainContent from "./MainContent"

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
