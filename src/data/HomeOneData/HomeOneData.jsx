import React from 'react'; 

// Banner One
import BannerImg from '../../../public/assets/images/thumbs/banner-img.png'; 
export const bannerContent = {
    subtitle: 'Anila Apartments',
    title: 'Apartments in ',
    gradientTitle: 'Shëngjin, Albania',
    desc: 'Experience the charm of Shëngjin with a stay in our beautiful apartments.',
    thumb: BannerImg
}

// Filter Tabs
export const filterTabs = [
    {
        id: 1,
        text: 'All'
    },
    {
        id: 2,
        text: 'Buy'
    },
    {
        id: 3,
        text: 'Rent'
    },
]
  

// About One Content
export const aboutStatistics = {
    icon: <i className="fas fa-users text-gradient"></i>,
    number: '15+',
    text: 'Apartments'
}
import aboutContentThumb from '../../../public/assets/images/thumbs/about-img.png'; 
import aboutContentIcon from '../../../public/assets/images/icons/about-icon.svg'; 
export const aboutContent = {
    thumb: aboutContentThumb,
    icon: aboutContentIcon,
    title: 'Your Dream Home Awaits',
    desc: 'Real Estate is a vast industry that deals with the buying, selling, and renting of properties. It inv transactions related to residential, commercial, and industrial properties'
}


// Property Data 
import propertyThumb1 from '../../../public/assets/images/thumbs/property-1.png'; 
import propertyThumb2 from '../../../public/assets/images/thumbs/property-2.png'; 
import propertyThumb3 from '../../../public/assets/images/thumbs/property-3.png'; 
import propertyThumb4 from '../../../public/assets/images/thumbs/property-4.png'; 
import propertyThumb5 from '../../../public/assets/images/thumbs/property-5.png'; 
import propertyThumb6 from '../../../public/assets/images/thumbs/property-6.png'; 
import propertyThumb7 from '../../../public/assets/images/thumbs/property-7.png'; 
import propertyThumb8 from '../../../public/assets/images/thumbs/property-8.png'; 
import propertyThumb9 from '../../../public/assets/images/thumbs/property-9.png'; 
import propertyThumb10 from '../../../public/assets/images/thumbs/property-10.png'; 
import propertyThumb11 from '../../../public/assets/images/thumbs/property-11.png'; 
import propertyThumb12 from '../../../public/assets/images/thumbs/property-12.png'; 
import propertyThumb13 from '../../../public/assets/images/thumbs/property-13.png'; 
import propertyThumb14 from '../../../public/assets/images/thumbs/property-14.png'; 
import propertyThumb15 from '../../../public/assets/images/thumbs/property-15.png'; 
export const properties = [

    
    {
        id: 14,
        thumb: propertyThumb14,
        price: '270€',
        day: '/per night',
        title: 'Suite - Flora ',    
        desc: '',
        locationIcon: <i className="fas fa-map-marker-alt"></i>,
        location: 'Shëngjin, Albania',
        amenities: [
            {
                icon: <i className="fas fa-bed"></i>,
                text: '2 Beds',
            },
            {
                icon: <i className="fas fa-bath"></i>,
                text: ' 1 Baths ',
            }
        ],
        btnText: 'Book Now',
        dataSort: 'Best Seller',
        dataStatuses: 'Rent',
        dataTypes: 'Suite',
        dataLocations: "Shëngjin, Albania",
    },
    {
        id: 15,
        thumb: propertyThumb15,
        price: '200€',
        day: '/per night',
        title: 'Suite - Vjosa ',    
        desc: '',
        locationIcon: <i className="fas fa-map-marker-alt"></i>,
        location: 'Shëngjin, Albania',
        amenities: [
            {
                icon: <i className="fas fa-bed"></i>,
                text: '1 Beds',
            },
            {
                icon: <i className="fas fa-bath"></i>,
                text: ' 1 Baths ',
            }
        ],
        btnText: 'Book Now',
        dataSort: 'Best Seller',
        dataStatuses: 'Rent',
        dataTypes: 'Suite',
        dataLocations: "Shëngjin, Albania",
    },

    {
        id: 13,
        thumb: propertyThumb13,
        price: '190€',
        day: '/per night',
        title: 'Suite - Anila ',    
        desc: '',
        locationIcon: <i className="fas fa-map-marker-alt"></i>,
        location: 'Shëngjin, Albania',
        amenities: [
            {
                icon: <i className="fas fa-bed"></i>,
                text: '1 Beds',
            },
            {
                icon: <i className="fas fa-bath"></i>,
                text: ' 1 Baths ',
            }
        ],
        btnText: 'Book Now',
        dataSort: 'Best Seller',
        dataStatuses: 'Rent',
        dataTypes: 'Suite',
        dataLocations: "Shëngjin, Albania",
    },
    
    {
        id: 1,
        thumb: propertyThumb1,
        price: '120€',
        day: '/per night',
        title: 'Apartment Nina',
        desc: '',
        locationIcon: <i className="fas fa-map-marker-alt"></i>,
        location: 'Shëngjin, Albania',
        amenities: [
            {
                icon: <i className="fas fa-bed"></i>,
                text: '1 Beds',
            },
            {
                icon: <i className="fas fa-bath"></i>,
                text: ' 1 Baths ',
            }
        ],
        btnText: 'Book Now',
        dataSort: 'Best Seller',
        dataStatuses: 'Rent',
        dataTypes: 'Apartments',
        dataLocations: "Shëngjin, Albania",
    },
    {
        id: 2,
        thumb: propertyThumb2,
        price: '120€',
        day: '/per night',
        title: 'Apartment - Rosa ',
        desc: ' ',
        locationIcon: <i className="fas fa-map-marker-alt"></i>,
        location: 'Shëngjin, Albania',
        amenities: [
            {
                icon: <i className="fas fa-bed"></i>,
                text: '1 Beds',
            },
            {
                icon: <i className="fas fa-bath"></i>,
                text: ' 1 Baths ',
            }
        ],
        btnText: 'Book Now',
        dataSort: 'Best Seller',
        dataStatuses: 'Rent',
        dataTypes: 'Apartments',
        dataLocations: "Shëngjin, Albania",
    },
    {
        id: 3,
        thumb: propertyThumb3,
        price: '120€',
        day: '/per night',
        title: 'Apartment - Margarita ',
        desc: '',
        locationIcon: <i className="fas fa-map-marker-alt"></i>,
        location: 'Shëngjin, Albania',
        amenities: [
            {
                icon: <i className="fas fa-bed"></i>,
                text: '1 Beds',
            },
            {
                icon: <i className="fas fa-bath"></i>,
                text: ' 1 Baths ',
            }
        ],
        btnText: 'Book Now',
        dataSort: 'Best Seller',
        dataStatuses: 'Rent',
        dataTypes: 'Apartments',
        dataLocations: "Shëngjin, Albania",
    },
    {
        id: 4,
        thumb: propertyThumb4,
        price: '120€',
        day: '/per night',
        title: 'Apartment - Billy ',
        desc: '',
        locationIcon: <i className="fas fa-map-marker-alt"></i>,
        location: 'Shëngjin, Albania',
        amenities: [
            {
                icon: <i className="fas fa-bed"></i>,
                text: '1 Beds',
            },
            {
                icon: <i className="fas fa-bath"></i>,
                text: ' 1 Baths ',
            }
        ],
        btnText: 'Book Now',
        dataSort: 'Best Seller',
        dataStatuses: 'Rent',
        dataTypes: 'Apartments',
        dataLocations: "Shëngjin, Albania",
    },
    {
        id: 5,
        thumb: propertyThumb5,
        price: '135€',
        day: '/per night',
        title: 'Apartment - Irisë ',
        desc: '',
        locationIcon: <i className="fas fa-map-marker-alt"></i>,
        location: 'Shëngjin, Albania',
        amenities: [
            {
                icon: <i className="fas fa-bed"></i>,
                text: '1 Beds',
            },
            {
                icon: <i className="fas fa-bath"></i>,
                text: ' 1 Baths ',
            }
        ],
        btnText: 'Book Now',
        dataSort: 'Best Seller',
        dataStatuses: 'Rent',
        dataTypes: 'Apartments',
        dataLocations: "Shëngjin, Albania",
    },
    {
        id: 6,
        thumb: propertyThumb6,
        price: '135€',
        day: '/per night',
        title: 'Apartment - Illyria ',
        desc: '',
        locationIcon: <i className="fas fa-map-marker-alt"></i>,
        location: 'Shëngjin, Albania',
        amenities: [
            {
                icon: <i className="fas fa-bed"></i>,
                text: '1 Beds',
            },
            {
                icon: <i className="fas fa-bath"></i>,
                text: ' 1 Baths ',
            }
        ],
        btnText: 'Book Now',
        dataSort: 'Best Seller',
        dataStatuses: 'Rent',
        dataTypes: 'Apartments',
        dataLocations: "Shëngjin, Albania",
    },
    {
        id: 7,
        thumb: propertyThumb7,
        price: '135€',
        day: '/per night',
        title: 'Apartment - Margarite ',
        desc: '',
        locationIcon: <i className="fas fa-map-marker-alt"></i>,
        location: 'Shëngjin, Albania',
        amenities: [
            {
                icon: <i className="fas fa-bed"></i>,
                text: '1 Beds',
            },
            {
                icon: <i className="fas fa-bath"></i>,
                text: ' 1 Baths ',
            }
        ],
        btnText: 'Book Now',
        dataSort: 'Best Seller',
        dataStatuses: 'Rent',
        dataTypes: 'Apartments',
        dataLocations: "Shëngjin, Albania",
    },
    {
        id: 8,
        thumb: propertyThumb8,
        price: '135€',
        day: '/per night',
        title: 'Apartment - Tukpam ',
        desc: '',
        locationIcon: <i className="fas fa-map-marker-alt"></i>,
        location: 'Shëngjin, Albania',
        amenities: [
            {
                icon: <i className="fas fa-bed"></i>,
                text: '1 Beds',
            },
            {
                icon: <i className="fas fa-bath"></i>,
                text: ' 1 Baths ',
            }
        ],
        btnText: 'Book Now',
        dataSort: 'Best Seller',
        dataStatuses: 'Rent',
        dataTypes: 'Apartments',
        dataLocations: "Shëngjin, Albania",
    },
    {
        id: 9,
        thumb: propertyThumb9,
        price: '135€',
        day: '/per night',
        title: 'Apartment - Kleoparta ',
        desc: '',
        locationIcon: <i className="fas fa-map-marker-alt"></i>,
        location: 'Shëngjin, Albania',
        amenities: [
            {
                icon: <i className="fas fa-bed"></i>,
                text: '1 Beds',
            },
            {
                icon: <i className="fas fa-bath"></i>,
                text: ' 1 Baths ',
            }
        ],
        btnText: 'Book Now',
        dataSort: 'Best Seller',
        dataStatuses: 'Rent',
        dataTypes: 'Apartments',
        dataLocations: "Shëngjin, Albania",
    },
    {
        id: 10,
        thumb: propertyThumb10,
        price: '135€',
        day: '/per night',
        title: 'Apartment - Masha ',
        desc: '',
        locationIcon: <i className="fas fa-map-marker-alt"></i>,
        location: 'Shëngjin, Albania',
        amenities: [
            {
                icon: <i className="fas fa-bed"></i>,
                text: '1 Beds',
            },
            {
                icon: <i className="fas fa-bath"></i>,
                text: ' 1 Baths ',
            }
        ],
        btnText: 'Book Now',
        dataSort: 'Best Seller',
        dataStatuses: 'Rent',
        dataTypes: 'Apartments',
        dataLocations: "Shëngjin, Albania",
    },
    {
        id: 11,
        thumb: propertyThumb11,
        price: '120€',
        day: '/per night',
        title: 'Apartment - Feti ',
        desc: '',
        locationIcon: <i className="fas fa-map-marker-alt"></i>,
        location: 'Shëngjin, Albania',
        amenities: [
            {
                icon: <i className="fas fa-bed"></i>,
                text: '1 Beds',
            },
            {
                icon: <i className="fas fa-bath"></i>,
                text: ' 1 Baths ',
            }
        ],
        btnText: 'Book Now',
        dataSort: 'Best Seller',
        dataStatuses: 'Rent',
        dataTypes: 'Apartments',
        dataLocations: "Shëngjin, Albania",
    },
    
]


// Property Type Data
import propertyTypeIcon1 from '../../../public/assets/images/icons/property-type-icon1.svg';
import propertyTypeIcon2 from '../../../public/assets/images/icons/property-type-icon2.svg';
import propertyTypeIcon3 from '../../../public/assets/images/icons/property-type-icon3.svg';
export const propertyTypes = [ 
    {
        icon: propertyTypeIcon1,
        title: 'Apartment for buy ',
        
    },
    {
        icon: propertyTypeIcon2,
        title: 'Apartment for rent  ',
       
    },
    {
        icon: propertyTypeIcon3,
        title: 'Suite',
       
    },
]


// CountUp Data
export const counts = [ 
  
]


// portfolio  Data
import portfolioThumb1 from '../../../public/assets/images/thumbs/portfolio1.png'; 
import portfolioThumb2 from '../../../public/assets/images/thumbs/portfolio2.png'; 
import portfolioThumb3 from '../../../public/assets/images/thumbs/portfolio3.png'; 
import portfolioThumb4 from '../../../public/assets/images/thumbs/portfolio4.png'; 
export const portfolios = [
    {
        thumb: portfolioThumb1,
        title: 'Outsourcing business',
        desc: 'Real Estate is a vast industry that deals with the buying, selling, and renting of properties',
        btnIcon: <i className="fas fa-arrow-right"></i>
    },
    {
        thumb: portfolioThumb2,
        title: 'Outsourcing business',
        desc: 'Real Estate is a vast industry that deals with the buying, selling, and renting of properties',
        btnIcon: <i className="fas fa-arrow-right"></i>
    },
    {
        thumb: portfolioThumb3,
        title: 'Outsourcing business',
        desc: 'Real Estate is a vast industry that deals with the buying, selling, and renting of properties',
        btnIcon: <i className="fas fa-arrow-right"></i>
    },
    {
        thumb: portfolioThumb4,
        title: 'Outsourcing business',
        desc: 'Real Estate is a vast industry that deals with the buying, selling, and renting of properties',
        btnIcon: <i className="fas fa-arrow-right"></i>
    },
]


// Testimonial Data
import quoteIcon from '../../../public/assets/images/icons/quote.svg';
export const testimonials = [
    {
        name: 'Sakib Fahad',
        designation: 'Content Creator',
        desc: 'Their product exceeded his my routi  expectations. The the quality and attention to detail a the a moutstanding and it has become an essential most a education the a man who can do tant clearly', 
        quote: quoteIcon
    },
    {
        name: 'John Doe',
        designation: 'Frontend Developer',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, autem! Consectetur illo tempora sed repudiandae eaque velit expedita, ipsa earum explicabo libero, voluptatibus aliquid odio', 
        quote: quoteIcon
    },
]

// Blog Data
import blogThumb1 from '../../../public/assets/images/thumbs/blog1.png'; 
import blogThumb2 from '../../../public/assets/images/thumbs/blog2.png'; 
import blogThumb3 from '../../../public/assets/images/thumbs/blog3.png'; 
import blogThumb4 from '../../../public/assets/images/thumbs/property-4.png'; 
import blogThumb5 from '../../../public/assets/images/thumbs/property-5.png'; 
import blogThumb6 from '../../../public/assets/images/thumbs/property-6.png'; 

export const blogs = [
    {
        id: 1,
        thumb: blogThumb1,
        admin: 'Stanio Lainto',
        meta: [
            {
                icon: <i className="fas fa-user"></i>,
                text: ' By admin'
            },
            {
                icon: <i className="fas fa-comments"></i>,
                text: 'Comments (30)'
            },
        ],
        title: 'Discover Endless Possibilities in Real Estate Live Your Best Life',
        desc: 'Real estate is a lucrative industry that involves the buying, selling, and renting of properties. It encompasses residential, commercial, and industrial properties. Real estate agents play a crucial role in facilitating transactions and helping.',
        linkText: 'Read More',
    },
    {
        id: 2,
        thumb: blogThumb2,
        date: '28 Mar',
        admin: 'John Doe',
        meta: [
            {
                icon: <i className="fas fa-user"></i>,
                text: ' By admin'
            },
            {
                icon: <i className="fas fa-comments"></i>,
                text: 'Comments (50)'
            },
        ],
        title: 'Turn Your Real Estate Dreams Into Reality Embrace the Real Estate',
        desc: 'Real estate is a lucrative industry that involves the buying, selling, and renting of properties. It encompasses residential, commercial, and industrial properties. Real estate agents play a crucial role in facilitating transactions and helping.',
        linkText: 'Read More',
    },
    {
        id: 3,
        thumb: blogThumb3,
        admin: 'Rakibul Islam',
        meta: [
            {
                icon: <i className="fas fa-user"></i>,
                text: ' By admin'
            },
            {
                icon: <i className="fas fa-comments"></i>,
                text: 'Comments (10)'
            },
        ],
        title: 'Your Journey to Home Ownership Starts Here: The Satisfaction',
        desc: 'Real estate is a lucrative industry that involves the buying, selling, and renting of properties. It encompasses residential, commercial, and industrial properties. Real estate agents play a crucial role in facilitating transactions and helping.',
        linkText: 'Read More',
    },
    {
        id: 4,
        thumb: blogThumb4,
        admin: 'Alex',
        meta: [
            {
                icon: <i className="fas fa-user"></i>,
                text: ' By admin'
            },
            {
                icon: <i className="fas fa-comments"></i>,
                text: 'Comments (10)'
            },
        ],
        title: 'Experience the Best in Real Estate Services',
        desc: 'Real estate is a lucrative industry that involves the buying, selling, and renting of properties. It encompasses residential, commercial, and industrial properties. Real estate agents play a crucial role in facilitating transactions and helping.',
        linkText: 'Read More',
    },
    {
        id: 5,
        thumb: blogThumb5,
        admin: 'Jenon Doe',
        meta: [
            {
                icon: <i className="fas fa-user"></i>,
                text: ' By admin'
            },
            {
                icon: <i className="fas fa-comments"></i>,
                text: 'Comments (10)'
            },
        ],
        title: 'Let Us Find the Perfect Property for You: Elite Realty Services',
        desc: 'Real estate is a lucrative industry that involves the buying, selling, and renting of properties. It encompasses residential, commercial, and industrial properties. Real estate agents play a crucial role in facilitating transactions and helping.',
        linkText: 'Read More',
    },
    {
        id: 6,
        thumb: blogThumb6,
        admin: 'Akramul Hoq',
        meta: [
            {
                icon: <i className="fas fa-user"></i>,
                text: ' By admin'
            },
            {
                icon: <i className="fas fa-comments"></i>,
                text: 'Comments (10)'
            },
        ],
        title: 'Investing in Real Estate Made Easy: The Door to Your New Home',
        desc: 'Real estate is a lucrative industry that involves the buying, selling, and renting of properties. It encompasses residential, commercial, and industrial properties. Real estate agents play a crucial role in facilitating transactions and helping.',
        linkText: 'Read More',
    },
]

