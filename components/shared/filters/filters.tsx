'use client';
import React from 'react';
import { CheckboxFiltersGroup, FilterCheckbox, Title } from '..';
import { Input } from '@/components/ui';
import { RangeSlider } from '..';

interface Props {
    className?: string;
}

const MIN_FILTER_PRICE = 0;
const MAX_FILTER_PRICE = 1000;

export const Filters: React.FC<Props> = ({className}) => {
    const [priceFilterArray, setPriceFilterArray] = React.useState<number[]>([MIN_FILTER_PRICE, MAX_FILTER_PRICE]);

    return(<div className={className}>
        <Title text='Фильтрация' size='sm' className='mb-5 font-bold'/>

            {/* Верхние чекбоксы */}

            <div className='flex flex-col gap-4'>
                <FilterCheckbox text='Можно собирать' value='1'/>
                <FilterCheckbox text='Новинки' value='2'/>
            </div>

            {/* Фильтрация цены */}

            <div className='mt-5 border-y border-y-neutral-100 py-6 pb-7'> 
                <p className='font-bold'>Цена, ₽:</p>
                <div className='flex gap-3 mb-5'>
                    <Input type='number' placeholder='0 ₽' min={MIN_FILTER_PRICE} max={MAX_FILTER_PRICE} value={priceFilterArray[0]} onChange={
                        (e) => 
                            setPriceFilterArray([Number(e.target.value), priceFilterArray[1]])
                    }/>
                    <Input type='number' placeholder='1000 ₽' min={MIN_FILTER_PRICE} max={MAX_FILTER_PRICE} value={priceFilterArray[1]} onChange={
                        (e) => 
                            setPriceFilterArray([priceFilterArray[0], Number(e.target.value)])
                    }/>
                </div>
                <RangeSlider min={MIN_FILTER_PRICE} max={MAX_FILTER_PRICE} step={10} value={priceFilterArray} onValueChange={(values) => setPriceFilterArray(values)}/>
            </div>

            {/* Фильтрация ингридиентов */}
            <CheckboxFiltersGroup
            title='Ингредиенты'
            className='mt-5'
            limit={6}
            defaultItems={[
                {
                    text:'Сырный соус',
                    value: '1'
                },
                {
                    text:'Сырный соус',
                    value: '1'
                },
                {
                    text:'Сырный соус',
                    value: '1'
                }
                ,
                {
                    text:'Сырный соус',
                    value: '1'
                }
                ,
                {
                    text:'Сырный соус',
                    value: '1'
                }
                ,
                {
                    text:'Сырный соус',
                    value: '1'
                }
                
        ]}
            items={[
                {
                    text:'Сырный соус',
                    value: '1'
                },
                {
                    text:'Сырный соус',
                    value: '1'
                },
                {
                    text:'Сырный соус',
                    value: '1'
                },
                {
                    text:'Сырный соус',
                    value: '1'
                }
                ,
                {
                    text:'Сырный соус',
                    value: '1'
                }
                ,
                {
                    text:'Сырный соус',
                    value: '1'
                }
                ,
                {
                    text:'Сырный соус',
                    value: '1'
                },
                {
                    text:'Сырный соус',
                    value: '1'
                },
                {
                    text:'Сырный соус',
                    value: '1'
                },
                {
                    text:'Сырный соус',
                    value: '1'
                }
                ,
                {
                    text:'Сырный соус',
                    value: '1'
                }
                ,
                {
                    text:'Сырный соус',
                    value: '1'
                }
                ,
                {
                    text:'Сырный соус',
                    value: '1'
                },
                {
                    text:'Сырный соус',
                    value: '1'
                },
                {
                    text:'Сырный соус',
                    value: '1'
                },
                {
                    text:'Сырный соус',
                    value: '1'
                }
                ,
                {
                    text:'Сырный соус',
                    value: '1'
                }
                ,
                {
                    text:'Сырный соус',
                    value: '1'
                }
                ,
                {
                    text:'Сырный соус',
                    value: '1'
                }
        ]}
            />
    </div>)
}