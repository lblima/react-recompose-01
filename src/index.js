import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app';

const dogs_breed = [{
        name: 'Akita',
        picture: 'https://images.dog.ceo/breeds/akita/512px-Ainu-Dog.jpg',
        description: "The Akita has a short double-coat similar to that of many other northern spitz breeds such as the Siberian Husky, but long-coated dogs can be found in many litters due to a recessive gene. The Akita is a powerful, independent and dominant breed, commonly aloof with strangers but affectionate with family members."
    },
    {
        name: 'Beagle',
        picture: 'https://images.dog.ceo/breeds/beagle/n02088364_10575.jpg',
        description: "The American Kennel Club recognizes two varieties of Beagle. The 13-inch variety is for hounds that don't exceed 13 inches in height at the shoulder, and the 15-inch variety is for hounds that stand 13 inches to 15 inches at the shoulder. Depending on their height, Beagles weigh between 18 and 30 pounds."
    },
    {
        name: 'Boxer',
        picture: 'https://images.dog.ceo/breeds/boxer/n02108089_11001.jpg',
        description: "The Boxer is a medium-sized, short-haired breed of dog, developed in Germany. The coat is smooth and tight-fitting; colors are fawn or brindled, with or without white markings, and white. ... The Boxer is a member of the Working Group."
    },
    {
        name: 'Chihuahua',
        picture: 'https://images.dog.ceo/breeds/chihuahua/n02085620_1205.jpg',
        description: "Typically, the breed standard for both the long and short coat Chihuahua will be identical except for the description of the coat. Chihuahuas have large, round eyes and large, erect ears, set in a high, dramatically rounded skull."
    },
    {
        name: 'Dalmatian',
        picture: 'https://images.dog.ceo/breeds/dalmatian/cooper1.jpg',
        description: "Dalmatian dog. The Dalmatian is a breed of medium-sized dog, noted for its unique black or liver spotted coat and mainly used as a carriage dog in its early days. Its roots trace back to Croatia and its historical region of Dalmatia."
    }
];

ReactDOM.render( < App breeds = {[]} />, document.getElementById('root'));

setTimeout(function() {
    ReactDOM.render( < App breeds = { dogs_breed } />, document.getElementById('root'));
}, 2000);