import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const Common = () => {
    const [signInWithGoogle, gUser, gError] = useSignInWithGoogle(auth);

    const GoogleSignIn = () => {
        signInWithGoogle();
        // if (gUser) {
        const user = { name: gUser?.user?.displayName, email: gUser?.user?.email, picture:'' };
        console.log(user);
        fetch(`http://localhost:5000/google-sign-in`, {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.token) {
                    localStorage.setItem('token', data?.token)
                }
            })
    }

    // [
    //     {
    //     "_id": "63d667f89e70f3209ecf54bf",
    //     "image": "https://i.ibb.co/202hNGm/aa1ac5b90b13123b0dc09815336d66a9.png",
    //     "subCategory": "Cats",
    //     "mainCategory": "Indivitual",
    //     "category": "For rent",
    //     "adTitle": "About Japan",
    //     "adDescription": "Japan is known for everything from onsen hot springs and kabuki baths (dating to the 6th and 16th centuries, respectively) to all-night neon-lit dance parties, anime, and sushi boat restaurants, all of which are decidedly more modern.",
    //     "adNumber": "0654206879",
    //     "adPrice": "1500",
    //     "adLocation": "Japan",
    //     "admin": {}
    //     },
    //     {
    //     "_id": "63d6681a9e70f3209ecf54c0",
    //     "image": "https://i.ibb.co/Jn9ctPG/anime-scenery-wallpaper.jpg",
    //     "subCategory": "Cats",
    //     "mainCategory": "Indivitual",
    //     "category": "For rent",
    //     "adTitle": "About Nature",
    //     "adDescription": "Our forests, rivers, oceans and soils provide us with the food we eat, the air we breathe, the water we irrigate our crops with. We also rely on them for numerous other goods and services we depend on for our health, happiness and prosperity. These natural assets are often called the world's 'natural capital'.",
    //     "adNumber": "0654206879",
    //     "adPrice": "1500",
    //     "adLocation": "Japan",
    //     "admin": {}
    //     },
    //     {
    //     "_id": "63d6685d9e70f3209ecf54c1",
    //     "image": "https://i.ibb.co/gvhH600/unnamed.png",
    //     "subCategory": "Cats",
    //     "mainCategory": "Indivitual",
    //     "category": "for trip",
    //     "adTitle": "About Tree",
    //     "adDescription": "Here's our simple definition: A tree is a tall plant that can live for a very long time. It has a single stem or trunk and branches that support leaves. Beneath the ground, a tree has a root system that acts as an anchor and stores the water and nutrients the plant needs to grow.",
    //     "adNumber": "0654206879",
    //     "adPrice": "1500",
    //     "adLocation": "Japan",
    //     "admin": {}
    //     },
    //     {
    //     "_id": "63d6687d9e70f3209ecf54c2",
    //     "image": "https://i.ibb.co/yhxCcfX/5d71ecae5bbff04860fbe4632e032b1f.jpg",
    //     "subCategory": "checking",
    //     "mainCategory": "Indivitual",
    //     "category": "phychology",
    //     "adTitle": "About Daisy",
    //     "adDescription": "Each flower has a rosette of small, thin white petals surrounding a bright yellow centre. These are supported by a single stem which grows from a group of dark green rounded leaves. The petals can sometimes be tinged with pink.",
    //     "adNumber": "0654206879",
    //     "adPrice": "1500",
    //     "adLocation": "Japan",
    //     "admin": {}
    //     },
    //     {
    //     "_id": "63d6689d9e70f3209ecf54c3",
    //     "image": "https://i.ibb.co/7kcxSHg/09d293843c280e4240e0866e3436899d.jpg",
    //     "subCategory": "checking",
    //     "mainCategory": "Indivitual",
    //     "category": "Mixed Cats",
    //     "adTitle": "About Water",
    //     "adDescription": "Its chemical formula, H2O, indicates that each of its molecules contains one oxygen and two hydrogen atoms, connected by covalent bonds. The hydrogen atoms are attached to the oxygen atom at an angle of 104.45°. \"Water\" is also the name of the liquid state of H2O at standard temperature and pressure.",
    //     "adNumber": "0654206879",
    //     "adPrice": "1500",
    //     "adLocation": "Japan",
    //     "admin": {}
    //     },
    //     {
    //     "_id": "63d668ba9e70f3209ecf54c4",
    //     "image": "https://i.ibb.co/1zDYBf3/9f413d2435a929624bff0e3cf251295b.jpg",
    //     "subCategory": "checking",
    //     "mainCategory": "Indivitual",
    //     "category": "ming",
    //     "adTitle": "About Road",
    //     "adDescription": "Its chemical formula, H2O, indicates that each of its molecules contains one oxygen and two hydrogen atoms, connected by covalent bonds. The hydrogen atoms are attached to the oxygen atom at an angle of 104.45°. \"Water\" is also the name of the liquid state of H2O at standard temperature and pressure.",
    //     "adNumber": "0654206879",
    //     "adPrice": "1500",
    //     "adLocation": "Japan",
    //     "admin": {}
    //     },
    //     {
    //     "_id": "63d668dc9e70f3209ecf54c5",
    //     "image": "https://i.ibb.co/G03pQLt/ec4ee0fe9c5be90e2bf8d44b6c32d553.jpg",
    //     "subCategory": "Hotel",
    //     "mainCategory": "Indivitual",
    //     "category": "For rent",
    //     "adTitle": "About City",
    //     "adDescription": "It can be defined as a permanent and densely settled place with administratively defined boundaries whose members work primarily on non-agricultural tasks. Cities generally have extensive systems for housing, transportation, sanitation, utilities, land use, production of goods, and communication.",
    //     "adNumber": "0654206879",
    //     "adPrice": "1500",
    //     "adLocation": "Japan",
    //     "admin": {}
    //     },
    //     {
    //     "_id": "63d669069e70f3209ecf54c6",
    //     "image": "https://i.ibb.co/yhxCcfX/5d71ecae5bbff04860fbe4632e032b1f.jpg",
    //     "subCategory": "Hotel",
    //     "mainCategory": "Indivitual",
    //     "category": "for trip",
    //     "adTitle": "About Flower",
    //     "adDescription": "Flowers are thus connected to a positive, emotional environment for optimal psychological—and from this, physical—health. We tend flowers as we tend loved ones. The aesthetic experience becomes socially embedded and relational.",
    //     "adNumber": "0654206879",
    //     "adPrice": "1500",
    //     "adLocation": "Japan",
    //     "admin": {}
    //     },
    //     {
    //     "_id": "63d669209e70f3209ecf54c7",
    //     "image": "https://i.ibb.co/T42zgqP/desktop-wallpaper-thumb1920750482-png-1920-u00d71080-anime-pinterest-anime-scenery-anime-retro-1920.jpg",
    //     "subCategory": "Hotel",
    //     "mainCategory": "Property",
    //     "category": "for trip",
    //     "adTitle": "About Forest",
    //     "adDescription": "A forest is a complex ecological system in which trees are the dominant life-form. A forest is nature's most efficient ecosystem, with a high rate of photosynthesis affecting both plant and animal systems in a series of complex organic relationships.",
    //     "adNumber": "0654206879",
    //     "adPrice": "1500",
    //     "adLocation": "Japan",
    //     "admin": {}
    //     }
    //     ]

    return (
        <div className="bg-slate-100 m-8 p-8 rounded-lg">
            <button onClick={() => GoogleSignIn()} className='flex relative items-center gap-3 border-none mx-auto btn w-2/5 h-14 bg-blue-700 hover:bg-blue-500 mb-3'> <img className='w-12 bg-white p-2 absolute top-1 left-1 rounded-lg' src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-google-icon-logo-png-transparent-svg-vector-bie-supply-14.png" alt="" />
                Continue with Google
            </button>

            <button className='flex relative items-center gap-3 border-none mx-auto btn w-2/5 h-14 bg-blue-700 hover:bg-blue-500'> <img className='w-12 bg-white p-2 absolute top-1 left-1 rounded-lg' src="https://cdn-icons-png.flaticon.com/512/1017/1017466.png" alt="" />
                Log in with a Magic Link
            </button>
        </div>
    );
};

export default Common;