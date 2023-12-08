import Head from 'next/head';
import { Box } from '@mui/material';

const AuthLayout = ({ children, title, description, kw, imageFullUrl }) => {
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
            <main>
                <Box display='flex' justifyContent='center' alignItems='center' height='calc(100vh - 200px)'>
                    {children}
                </Box>
            </main>
        </>
    )
}

export default AuthLayout;