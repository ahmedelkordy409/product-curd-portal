import AppLayout from '@/templates/AppLayout'
//organisms
import DashboardHead  from '@/organisms/DashboardHead'
// services
import { createProduct } from '@/services/product'
//
import { dehydrate, QueryClient, useQuery } from 'react-query';
//
import NewProductForm from '@/organisms/NewProductForm';




export default function CreateProductPage(){

    return(
      <AppLayout>

        <DashboardHead
          title="create New Product"
        />


        <NewProductForm />

    



    </AppLayout>
    )
}