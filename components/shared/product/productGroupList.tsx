'use client';

import React from 'react';
import { useIntersection } from 'react-use';
import { ProductCard, Title } from '..';

interface Props {
  title: string;
  categoryId: number;
  products: any[];
  className?: string;
  itemClassName?: string;
}

export const ProductGroupList: React.FC<Props> = (
    {
        title,
        products,
        className,
        categoryId }
) => {
    const intersectionRef = React.useRef<HTMLDivElement>(null);
    const intersection = useIntersection(intersectionRef as React.RefObject<HTMLElement>, {
        threshold: 0.4,
    });

    React.useEffect(() => {
        if (intersection?.isIntersecting) {
            console.log(title, categoryId);
        }
    }, [categoryId, intersection, title]);

  return (
    <div className={className} id={title} ref={intersectionRef}>
      <Title text={title} size="lg" className="font-extrabold mb-5" />
      <div className="grid grid-cols-3 gap-[50px]">
        {products.map((product, i) => (
          <ProductCard
            key={product.id}
            name={product.name}
            imageUrl={product.imageUrl}
            price={product.items[0].price}
            count={i % 2}
          />
        ))}
      </div>
    </div>
  );
};