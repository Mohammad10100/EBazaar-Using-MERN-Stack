import React, { Component } from 'react'
import ProductItems from './ProductItems';
import 'bootstrap/dist/css/bootstrap.css';
// import {Link} from 'react-router-dom';

export default class ProductComponent extends Component {
    products = [
        {
            id: '1',
            title: 'Cassava',
            description: 'On-demand sand castle construction expertise.',
            productImageUrl: '/img-1.jpg',
        },
        {
            id: '2',
            title: 'Maize',
            description: 'On-demand sand castle construction expertise.',
            productImageUrl: '/img-2.jpg',
        },
        {
            id: '3',
            title: 'Plantains',
            description: 'On-demand sand castle construction expertise.',
            productImageUrl: '/img-3.jpg',
        },
        {
            id: '4',
            title: 'Potatos',
            description: 'On-demand sand castle construction expertise.',
            productImageUrl: '/img-4.jpg',
        },
        {
            id: '5',
            title: 'Rice',
            description: 'On-demand sand castle construction expertise.',
            productImageUrl: '/img-5.jpg',
        },
        {
            id: '6',
            title: 'Soyabeans',
            description: 'On-demand sand castle construction expertise.',
            productImageUrl: '/img-6.jpg',
        }
    ]
    constructor() {
        super();
        console.log("A constructor from product component");
        this.state = {
            products: this.products,
            loading: false,
        }
    };

    render() {
        return (
            <div className="row">
                {this.state.products.map((element) => {
                    return (
                        <>
                            <div key={element.id} className="col-lg-4 ">
                                <ProductItems title={element.title} description={element.description} productImageUrl={element.productImageUrl} />
                            </div>
                        </>
                    )
                })}
            </div>
        )
    }
}


