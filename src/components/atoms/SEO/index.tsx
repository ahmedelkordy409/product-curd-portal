import Head from 'next/head'


export type SeoProps = {

    title: string
    description: string
}


export default function SEO( props:SeoProps ){

    const { title, description } = props;


    return(
      <Head>
        {/** */}
        <title> { title } </title>
        {/** */}
        <meta name="description" content={description} />

        <meta name="thumbnail" content="https://vid.alarabiya.net/images/2023/01/12/a512409f-62ec-4131-8baa-a35ec66e5d8c/a512409f-62ec-4131-8baa-a35ec66e5d8c_4x3_186x139.jpg" />

        {/** shortcut icon */}
        <link rel="icon" href="/favicon.ico" />



        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta httpEquiv="content-language" content="ar" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />


    
        <link rel="shortcut icon" type="image/x-icon" href="/.resources/aa-fe-templating/webresources/dist/assets/gfx/touch/favicon.ico" />
        <link rel="icon" type="image/x-icon" href="/.resources/aa-fe-templating/webresources/dist/assets/gfx/touch/favicon.ico" />
        <meta name="msapplication-tap-highlight" content="no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="application-name" content="العربية" />
        <meta name="short_name" content="العربية" />
        <link rel="icon" sizes="192x192" href="/.resources/aa-fe-templating/webresources/dist/assets/gfx/touch/chrome-touch-icon-192x192.png" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <meta name="apple-mobile-web-app-title" content="العربية" />
        <link rel="apple-touch-icon" href="/.resources/aa-fe-templating/webresources/dist/assets/gfx/touch/apple-touch-icon.png" />
        <meta name="msapplication-TileImage" content="/.resources/aa-fe-templating/webresources/dist/assets/gfx/touch/ms-touch-icon-144x144-precomposed.png" />
        <meta name="msapplication-TileColor" content="#ff0505" />
        <meta name="theme-color" content="#373c59" />
        <meta name="uuid" content="7e391d8f-eabf-4cb7-8165-8ebb488fd555" />
        <meta property="article:published_time" content="2023-01-12T00:55:00.000+0400" />
        <meta property="article:modified_time" content="2023-01-12T08:31:58.714+0400" />
       
       
        <meta property="article:section" content="اليمن" />



        <meta property="og:image:secure_url" content="https://vid.alarabiya.net/images/2023/01/12/a512409f-62ec-4131-8baa-a35ec66e5d8c/a512409f-62ec-4131-8baa-a35ec66e5d8c_16x9_600x338.jpg" />
        <meta property="og:image" content="https://vid.alarabiya.net/images/2023/01/12/a512409f-62ec-4131-8baa-a35ec66e5d8c/a512409f-62ec-4131-8baa-a35ec66e5d8c_16x9_600x338.jpg" />
        <meta property="og:title" content="من البحرية الأميركية.. اليمن يتسلم سفينة أسلحة إيرانية" />
        <meta property="og:description" content="أعلنت مصلحة خفر السواحل اليمنية، مساء الأربعاء، تسلمها سفينة تهريب سلاح من إيران ضبطتها البحرية الأميركية في وقت سابق بخليج عمان مع طاقمها المكون من ستة" />
        <meta property="og:url" content="https://www.alarabiya.net/arab-and-world/yemen/2023/01/12/%D9%85%D9%86-%D8%A7%D9%84%D8%A8%D8%AD%D8%B1%D9%8A%D8%A9-%D8%A7%D9%84%D8%A3%D9%85%D9%8A%D8%B1%D9%83%D9%8A%D8%A9-%D8%A7%D9%84%D9%8A%D9%85%D9%86-%D8%AA%D8%AA%D8%B3%D9%84%D9%85-%D8%B3%D9%81%D9%8A%D9%86%D8%A9-%D8%A3%D8%B3%D9%84%D8%AD%D8%A9-%D8%A7%D9%8A%D8%B1%D8%A7%D9%86%D9%8A%D8%A9" />
        <meta property="og:site_name" content="العربية" />
        <meta property="og:locale" content="ar_AR" />
        <meta property="og:type" content="article" />



        <link rel="amphtml" href="https://www.alarabiya.net/amp/arab-and-world/yemen/2023/01/12/%D9%85%D9%86-%D8%A7%D9%84%D8%A8%D8%AD%D8%B1%D9%8A%D8%A9-%D8%A7%D9%84%D8%A3%D9%85%D9%8A%D8%B1%D9%83%D9%8A%D8%A9-%D8%A7%D9%84%D9%8A%D9%85%D9%86-%D8%AA%D8%AA%D8%B3%D9%84%D9%85-%D8%B3%D9%81%D9%8A%D9%86%D8%A9-%D8%A3%D8%B3%D9%84%D8%AD%D8%A9-%D8%A7%D9%8A%D8%B1%D8%A7%D9%86%D9%8A%D8%A9" />
        <meta name="twitter:image" content="https://vid.alarabiya.net/images/2023/01/12/a512409f-62ec-4131-8baa-a35ec66e5d8c/a512409f-62ec-4131-8baa-a35ec66e5d8c_16x9_600x338.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@AlArabiya" />
        <meta name="twitter:creator" content="@AlArabiya" />
        <meta name="twitter:title" content="من البحرية الأميركية.. اليمن يتسلم سفينة أسلحة إيرانية" />
        <meta name="twitter:description" content="أعلنت مصلحة خفر السواحل اليمنية، مساء الأربعاء، تسلمها سفينة تهريب سلاح من إيران ضبطتها البحرية" />
       
       
       
{/*
        <meta property="fb:pages" content={101560257956154} />
        <meta property="fb:pages" content={113791238657176} />
        <meta property="fb:pages" content={224360928509465} />
        <meta property="fb:pages" content={244108199019564} />
        <meta property="fb:pages" content={136722529737456} />
        <meta property="fb:pages" content={178246802233923} />
        <meta property="fb:pages" content={420195604705342} />
        <meta property="fb:pages" content={302283276507202} />
        <meta property="fb:pages" content={378330349244043} />
        <meta property="fb:pages" content={1459304117686523} />
        <meta property="fb:pages" content={840173182704721} />
        <meta property="fb:pages" content={2390543547850095} />
        <meta property="fb:pages" content={1475276906055317} />
        <meta property="fb:pages" content={1498942557014055} />
        <meta property="fb:pages" content={588565647885123} />
        <meta property="fb:pages" content={380935266099933} />
        <meta property="fb:app_id" content={477847702293720} />

*/}
        <link rel="manifest" href="/manifest.json" crossOrigin="use-credentials" />
    


      </Head>
    )
}