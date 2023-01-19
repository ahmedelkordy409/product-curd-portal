

export type FormFieldGroupProps = {
    name: string;
    description?: string;
    children: React.ReactNode
}
  
export default function FormFieldGroup({
    name,
    description,
    children
}: FormFieldGroupProps){
  
      return(
          <div className="grid grid-cols-3 gap-4 p-6">
                
                <div className="my-8">
         
                   <h6 className="text-lg font-bold dark:text-white">
                     {name}
                   </h6>

                    { description && (
                        <p className="mb-3 font-light text-gray-500 dark:text-gray-400">
                            {description}
                        </p>
                    )}

                </div>


                <div className="col-span-2 ">
                    {children}
                </div>
          </div>
      )
}
     
  
  
  
  
  