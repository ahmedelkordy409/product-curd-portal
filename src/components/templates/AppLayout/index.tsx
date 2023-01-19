import Drawer from '@/organisms/Drawer';
/**
 * 
 * on upgrade look at @https://beta.nextjs.org/docs/upgrade-guide
 * @note we will move it to app dir on upgrade
 */




export type AppLayout = {

}



export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}){

    return(
      <div>
       <Drawer />

       <main
         className="w-full	h-screen  md:pl-80 px-4"
       >

        <div className="w-full h-screen  container mx-auto p-6">
              {children}
         </div>
       </main>

      </div>
    )
}
  