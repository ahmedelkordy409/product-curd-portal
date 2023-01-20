import { useMemo, useEffect } from 'react';
import { useRouter } from 'next/router';
//
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
//
import { useMutation } from 'react-query'
//
import { 
  createProduct,
  updateProduct
} from '@/services/product'
//
import { toast , ToastContainer } from "react-toastify";
// @types
import { Product } from "@/@types/products";
// ui
import Input from '@/ui-framework/TextField';
import TextArea from '@/ui-framework/TextArea';
import Button from '@/ui-framework/Button';
import Card from "@ui-framework/Card";
import FormFieldGroup from "@ui-framework/FormFieldGroup";


//----------------------------------------------------------------
const productValidationSchema = z
  .object({
    name: z.string().min(1, { message: "name is required" }),
    description: z.string().min(1, { message: "description is required" }),
    category: z.string().min(1, { message: "category is required" }),
    price: z.string({
      required_error: "price is required",
    }),
    sale_price: z.string(),
    barcode: z.string().min(1, { message: "price is required" }),
    sku: z.string().min(1, { message: "price is required" }),
});


type ValidationSchema = z.infer<typeof productValidationSchema>;


export type NewProductFormProps = {
    isEdit?: boolean;
    currentProduct?: Product;
};
    


export default function NewProductForm({
   isEdit = false,
   currentProduct 
}: NewProductFormProps){
  

    const { push } = useRouter();



    const {  mutate: updateProudctMutate } = useMutation(updateProduct,{
      onSuccess(data: any) {
        console.log("data", data)
        if (!data.error) {
          reset();
          push('/product');
        }
      },
      onError(error: any) {
        console.log("error", error)
      },
    });



    const {  mutate: createProudctMutate } = useMutation(createProduct,{
      onSuccess() {
        reset();
        push('/product');
      },
      onError(error: any) {
        console.log("error", error)
      },
    });





    const defaultValues: any = useMemo(
      () => ({
          name: currentProduct?.name || '',
          description: currentProduct?.description || '',
          category: currentProduct?.category || '',
          price: String(currentProduct?.price) || '0',
          sale_price: String(currentProduct?.sale_price) || '0',
          barcode: currentProduct?.barcode || 'F5D818RTD1S7TRTD5G15DFG17RET',
          sku: currentProduct?.sku || 'DF8T5GFDG9EETR',
      }),
      // eslint-disable-next-line react-hooks/exhaustive-deps
      [currentProduct]
    );



    const {
      register,
      handleSubmit,
      reset,
      watch,
      formState: { errors },
    } = useForm<ValidationSchema>({
      resolver: zodResolver(productValidationSchema),
      defaultValues 
    });





    useEffect(() => {
      if (isEdit && currentProduct) {
        reset(defaultValues);
      }
      if (!isEdit) {
        reset(defaultValues);
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isEdit, currentProduct]);
  

    const onSubmit = async (data: ValidationSchema) => {
        try {
          if (!isEdit) {
            createProudctMutate(data as any)
          } else {
            updateProudctMutate(
              {
                id: currentProduct?.id,
                productDto: data
              } as any
            )
          }
        } catch (error) {
          console.error(error);
        }
      };


      const handleCancel = async () => {
        try {
          await new Promise((resolve) => setTimeout(resolve, 500));
          reset();
          push('/product')
          // go to product page
        } catch (error) {
          console.error(error);
        }
      };

    
    return(
  <div className="w-full">

    {/** display form submittion error */}
    <p>
      {errors.name?.message}
    </p>

  <form className="px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit(onSubmit)}>

      <div className="grid gap-10" >

      {/** Basic details */}
      <Card className="w-full">
        <FormFieldGroup
           name="Basic details"
           description=""
        >

              <Input
                label='firstName'
                type="text"
                variant="solid"
                //disabled={true}
                {...register('name')}
                error={errors.name?.message as string}
              />


              <TextArea
                //disabled={true}
                variant="solid"
                label="description"
                {...register('description')}
                error={errors.description?.message}
              />

        </FormFieldGroup>
      </Card>





      <Card>
        <FormFieldGroup
           name="Pricing"
           description=""
        >
              

              <Input
                label='price'
                type="number"
                min="0.00"
                max="10000.00"
                step="0.01" 
                variant="solid"
                //disabled={true}
                {...register('price')}
                error={errors.price?.message as string}
              />



              <Input
                label='sale price'
                type="number"
                min="0.00"
                max="10000.00"
                step="0.01" 
                variant="solid"
                //disabled={true}

                {...register('sale_price')}
                error={errors.sale_price?.message as string}
              />

        </FormFieldGroup>
      </Card>




      <Card>
        <FormFieldGroup
           name="Category"
           description=""
        >

              <Input
                label='Category'
                type="text"
                variant="solid"
                {...register('category')}
                //disabled={true}
                error={errors.category?.message as string}
              />

              <Input
                label='SKU'
                type="text"
                variant="solid"
                {...register('sku')}
                disabled={true}
                error={errors.sku?.message as string}
              />


              <Input
                label='Barcode'
                type="text"
                variant="solid"
                {...register('barcode')}
                disabled={true}
                error={errors.barcode?.message as string}
              />
        </FormFieldGroup>
      </Card>





      <div
       className='flex	gap-8'
      
      > 

        {/* flex grow 1 */}
        <div className="flex-grow" />



        <Button 
          className="h-11 md:h-12 w-full mt-1.5" 
          type="submit"
          style={{
            background: '#3f51b5',
            color: '#feffff',
            height: '2.7rem',
            maxWidth: '150px'
          }}
          variant="primary"
          //loading={true}
          //disabled={true}
        >

          {!isEdit ? 'Create ' : 'Save '}

        </Button>


        <button 
          className="h-11 md:h-12 w-full mt-1.5" 
          type="button"
          style={{
            maxWidth: '150px',
            color: 'rgb(0 0 0)',
            height: '2.7rem',
            background: '#ededed',
          }}
          onClick={handleCancel}
        >
            Cancel
        </button>



      </div>

      </div>
    </form>

    </div>

    )
}
  
  
