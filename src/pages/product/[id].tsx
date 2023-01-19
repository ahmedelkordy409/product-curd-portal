import { useRouter } from "next/router";
import AppLayout from '@/templates/AppLayout'
//organisms
import DashboardHead  from '@/organisms/DashboardHead'
// services
import { createProduct } from '@/services/product'
//
import { dehydrate, QueryClient, useQuery } from 'react-query';
//
import NewProductForm from '@/organisms/NewProductForm';
// services
import { getProduct } from '@/services/product';



export default function CreateProductPage(){

    // get id from url
    const router = useRouter()


    // get product data

    const { data: product, isLoading, error } = useQuery(
        ['product', router.query.id],
        () => getProduct(router.query.id as string),
        {
            enabled: !!router.query.id,
        }
    )


    return(
      <AppLayout>

        <DashboardHead
          title={`Update ${product?.name}`}
        />

            {/** error */}
            { !isLoading && error && <div> unexpexted error</div> }

            { isLoading && <div>Loading...</div> }



            {  !isLoading && !error && product &&

                    <NewProductForm 
                        isEdit={true}
                        currentProduct={product}
                    />
            }

    </AppLayout>
    )
}



