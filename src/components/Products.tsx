import React from 'react';
import {ArrivalsType} from './Arrivals';

type ProductsType = {
    avatar: ArrivalsType["avatar"]
    productTitle: ArrivalsType["name"]
    technologies: ArrivalsType["technologies"]
}

export const Products = (props: ProductsType[]) => {
    return (
        <div>
            <table>
                <tr></tr>
            </table>
        </div>
    );
};