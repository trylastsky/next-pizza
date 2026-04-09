'use client';

import { cn, hashSlug } from "@/lib/utils";
import { useCategoryStore } from "@/store/category";
import React from "react";

interface Props {
    className?: string;
}

const cats:string[] = ['Пиццы','Комбо','Закуски','Коктейли','Кофе','Напитки','Десерты'];

export const Categories: React.FC<Props> = ({ className }) => {
    const activeId = useCategoryStore((state) => state.activeCategoryId);
    return <div className={cn("inline-flex gap-1 bg-gray-50 p-1 rounded-2xl", className)}>
        {
            cats.map((cat, index) => (
                <a className={cn(
                    'flex items-center font-bold h-11 rounded-2xl px-5 transition-color duration-200',
                    activeId === index + 1 && 'bg-white shadow-md shadow-gray-200 text-primary'
                )}
                    href={`/#${hashSlug(cat)}`}
                    key={index} >
                    <button
                        className={cn('cursor-pointer')}
                        onClick={() => useCategoryStore.setState({ activeCategoryId: index + 1 })}>
                    {cat}
                    </button>
                </a>
            ))
        }
    </div>;
};
