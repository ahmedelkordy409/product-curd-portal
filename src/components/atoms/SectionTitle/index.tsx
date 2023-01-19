

export  type SectionTitleProps = {
    title: string;
    dark?: boolean;
    labelColor?: string;
}
  

function classNames(...classes: any) {
    return classes.filter(Boolean).join(' ')
}
  
  
export default function SectionTitle(props: SectionTitleProps){
  
    const { title, dark, labelColor } = props;
  
    return(
        <div className="text-lg font-bold flex py-5">

                <h2 
                  style={{ fontSize: '23px' }}
                  className={classNames(
                    dark ? 'text-white '  : 'text-slate-700 ',
                    'text-lg font-bold flex  font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-red-600'
                  )}
                >

                            <span 
                              className={classNames(
                                labelColor ? `${labelColor}`  : 'bg-teal-500',
                                'inline-flex w-3 ml-2.5 rounded-r-lg'
                              )}
                            >

                            </span>


                            <a href="/latest-news" className="inline-flex " title="الأخبار">
                                { title }
                                <i className="aa aa-chevron-right"></i>
                            </a>
                </h2>
        </div>
    )
  }
  