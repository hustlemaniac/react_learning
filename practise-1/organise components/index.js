
/**
Challenge: move the Header, Footer and MainContent components
into their own files.
*/
import React from "react"
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

    );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Page />
)

