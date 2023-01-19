import Header from '@/organisms/Header';
import Footer from '@/organisms/Footer';

/**
 * 
 * on upgrade look at @https://beta.nextjs.org/docs/upgrade-guide
 * @note we will move it to app dir on upgrade
 */

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}){

    return(
      <>
       <Header />
        {children}
       <Footer />
      </>
    )
}
  