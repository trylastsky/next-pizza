import React from 'react';
import { CheckboxFiltersGroup, FilterCheckbox, Title } from '..';
import { Input } from '@/components/ui';
import { RangeSlider } from '..';

interface Props {
    className?: string;
}

export const Filters: React.FC<Props> = ({className}) => {
    // const [price] = useState(1000);


    return(<div className={className}>
        <Title text='Фильтрация' size='sm' className='mb-5 font-bold'/>

            {/* Верхние чекбоксы */}

            <div className='flex flex-col gap-4'>
                <FilterCheckbox text='Можно собирать' value='1'/>
                <FilterCheckbox text='Новинки' value='2'/>
            </div>

            {/* Фильтрация цены */}

            <div className='mt-5 border-y border-y-neutral-100 py-6 pb-7'> 
                <p className='font-bold'>Цена от и до:</p>
                <div className='flex gap-3 mb-5'>
                    <Input type='number' placeholder='0' min={0} max={1000} defaultValue={0}/>
                    <Input type='number' placeholder='100' min={100} max={1000} defaultValue={1000}/>
                </div>
                <RangeSlider min={0} max={1000} step={10} value={[0,1000] }/>
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