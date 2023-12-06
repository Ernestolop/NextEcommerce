import Head from "next/head";

import { Navbar, SideMenu } from "../ui";

const ShopLayout = ({ children, title, description, kw, imageFullUrl }) => {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
                <meta name="keywords" content={kw} />
                <meta name="og:title" content={title} />
                <meta name="og:description" content={description} />
                <meta name="twitter:title" content={title} />
                <meta name="twitter:description" content={description} />
                {
                    imageFullUrl && (
                        <>
                            <meta name="og:image" content={imageFullUrl} />
                            <meta name="twitter:image" content={imageFullUrl} />
                        </>
                    )
                }
            </Head>
            <nav>
                <Navbar />
            </nav>
            <SideMenu />
            <main style={{
                margin: "80px auto",
                maxWidth: "1440px",
                padding: "0 30px"
            }}>
                {children}
            </main>
            <footer>
                {/* TODO: Add footer */}
            </footer>
        </>
    )
}

export default ShopLayout;