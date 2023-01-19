import { useState } from 'react';
import NextImage from 'next/image'
import { ImageProps } from 'next/image'



import errorPic from './../../../assets/150.png'

export default function Image(props: ImageProps) {

    const [imgSrc, setImgSrc] = useState(props.src);

    return (
        <NextImage
          {...props}
          src={imgSrc}
          onError={(error) => {
            console.log(error, "error")
            setImgSrc('https://images.unsplash.com/photo-1559311648-addd6af95dd4') 
          }}
        />
    )
}
