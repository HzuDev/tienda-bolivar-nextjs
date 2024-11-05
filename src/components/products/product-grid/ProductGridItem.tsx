'use client';


import Image from 'next/image';
import Link from 'next/link';

import { Product } from '@/interfaces';
import { useState } from 'react';

interface Props {
  product: Product;
}


export const ProductGridItem = ( { product }: Props ) => {

  const [ displayImage, setDisplayImage ] = useState( product.images[ 0 ] );


  return (
    <div className="rounded-md overflow-hidden fade-in  hover:underline">
      <Link href={ `/shop/product/${ product.slug }` }>
        <Image
          src={ `/products/${ displayImage }` }
          alt={ product.title }
          className="w-full object-cover rounded transform hover:scale-90 transition-transform duration-300"
          width={ 500 }
          height={ 500 }
          
        />
      </Link>

      <div className="p-4 flex flex-col">
        <Link
          className="hover:text-blue-600"
          href={ `/product/${ product.slug }` }>
          { product.title }
        </Link>
        <span className="font-bold">BOB { product.price }</span>
      </div>

    </div>
  );
};