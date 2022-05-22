import { FC, ReactNode } from "react";
import Head from "next/head"
import { Navbar } from "../ui";



interface Props {
    title: string;
    pageDescription: string;
    imageFullUrl?: string;
    children?: ReactNode;
}

export const PublicLayout:FC<Props> = ({ children, title, pageDescription, imageFullUrl }) => {
    return (
        <>
            <Head>
                <title>{ title }</title>
                <meta name="description" content={ pageDescription } />
                <meta property="og:title" content={ title } />
                <meta property="og:description" content={ pageDescription } />
                {
                    imageFullUrl && (
                      <meta property="og:image" content={ imageFullUrl } />  
                    )
                }                
            </Head>

            <nav>
                <Navbar />
            </nav>
            
            

            <main style={{
                margin:'180px auto',
                maxWidth: '1440px',
                padding:' 0px 30px',
            }}>
                { children }
            </main>

            {/* Footer */}
            <footer>
                {/* TODO: Mi Custom Footer */}
            </footer>

        </>
    )
}
