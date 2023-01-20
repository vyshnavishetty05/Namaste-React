import React, { useState } from 'react';
import ReactDOM from'react-dom/client';
const Title = ()=>(
    <div className='cardss'>
    <a href="/">
        <img className="logo" alt="logo" src="https://png.pngtree.com/png-clipart/20200720/original/pngtree-fresh-food-logo-png-image_4774188.jpg"/></a>
        </div>
);
const RestaurantCards = ({res})=>{
    const {name, cuisines, cloudinaryImageId, lastMileTravelString}= res.data;
    return( 
    <div className='card'>
    <img alt="img" src={kfc.image+cloudinaryImageId}/>
    <h4>{name}</h4>
    <h3>{cuisines.join(", ")}</h3> 
    <h3>{lastMileTravelString+ " minutes"}</h3>
    </div>
  );
  };
const RestaurantCard = (props)=>{
    console.log(props);
    return (
        <div className='card'>
            <img alt="img" src={kfc.image+props.res.data?.cloudinaryImageId}/>
            <h4>{props.res.data?.name}</h4>
            <h3>{props.res.data?.cuisines.join(", ")}</h3>
            <h3>{props.res.data?.lastMileTravel+ " minutes"}</h3>
        </div>
    );
};
const Header = ()=>{
return(
    <div className='header'>
        <Title/>
        <div className='nav-items'>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Cart</li>
            </ul>
        </div>
    </div>
);
}
const kfc = {
    name: 'kfc',
    image:'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/',
    cuisines: ['kfc','american'],
    rating: 4.3
}
const RestaurantCardss = ({name, cuisines, cloudinaryImageId, lastMileTravelString})=>{
  return(
    <div className='card'>
  <img alt="img" src={kfc.image+cloudinaryImageId}/>
  <h4>{name}</h4>
  <h3>{cuisines.join(", ")}</h3>
  <h3>{lastMileTravelString+ " minutes"}</h3>
  </div>
  );
}
const restuarantList = [
      {
        "type": "restaurant",
        "data": {
          "type": "F",
          "id": "39077",
          "name": "Alankar",
          "uuid": "baf866cc-0205-4271-927f-674057224e9f",
          "city": "3",
          "area": "Shaikpet",
          "totalRatingsString": "1000+ ratings",
          "cloudinaryImageId": "ysqrs5gg2k2zbg8moiyc",
          "cuisines": [
            "South Indian"
          ],
          "tags": [
            
          ],
          "costForTwo": 18000,
          "costForTwoString": "₹180 FOR TWO",
          "deliveryTime": 40,
          "minDeliveryTime": 35,
          "maxDeliveryTime": 45,
          "slaString": "35-45 MINS",
          "lastMileTravel": 11.800000190734863,
          "slugs": {
            "restaurant": "alankar-manikonda-manikonda",
            "city": "hyderabad"
          },
          "cityState": "3",
          "address": "Unnamed Road, OU Colony, Shaikpet, Hyderabad, Telangana 500008, India",
          "locality": "OU Colony",
          "parentId": 19899,
          "unserviceable": false,
          "veg": false,
          "select": false,
          "favorite": false,
          "tradeCampaignHeaders": [
            
          ],
          "aggregatedDiscountInfo": {
            "header": "50% off",
            "shortDescriptionList": [
              {
                "meta": "50% off | Use WELCOME50",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "50% off up to ₹100 | Use code WELCOME50",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          },
          "aggregatedDiscountInfoV2": {
            "header": "50% OFF",
            "shortDescriptionList": [
              {
                "meta": "Use WELCOME50",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "50% off up to ₹100 | Use code WELCOME50",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          },
          "chain": [
            
          ],
          "feeDetails": {
            "fees": [
              {
                "name": "distance",
                "fee": 8800,
                "message": ""
              },
              {
                "name": "time",
                "fee": 0,
                "message": ""
              },
              {
                "name": "special",
                "fee": 0,
                "message": ""
              }
            ],
            "totalFees": 8800,
            "message": "",
            "title": "Delivery Charge",
            "amount": "8800",
            "icon": ""
          },
          "availability": {
            "opened": true,
            "nextOpenMessage": "",
            "nextCloseMessage": ""
          },
          "longDistanceEnabled": 1,
          "rainMode": "NONE",
          "thirdPartyAddress": false,
          "thirdPartyVendor": "",
          "adTrackingID": "",
          "badges": {
            "imageBased": [
              
            ],
            "textBased": [
              
            ],
            "textExtendedBadges": [
              
            ]
          },
          "lastMileTravelString": "11.8 kms",
          "hasSurge": false,
          "sla": {
            "restaurantId": "39077",
            "deliveryTime": 40,
            "minDeliveryTime": 35,
            "maxDeliveryTime": 45,
            "lastMileTravel": 11.800000190734863,
            "lastMileDistance": 0,
            "serviceability": "SERVICEABLE",
            "rainMode": "NONE",
            "longDistance": "IT_IS_LONG_DISTANCE",
            "preferentialService": false,
            "iconType": "EMPTY"
          },
          "promoted": false,
          "avgRating": "4.0",
          "totalRatings": 1000,
          "new": false
        },
        "subtype": "basic"
      },
      {
        "type": "restaurant",
        "data": {
          "type": "F",
          "id": "118357",
          "name": "Lassi Shop",
          "uuid": "7474cd78-872a-4679-a19d-4f5972a7c1db",
          "city": "3",
          "area": "Kachiguda",
          "totalRatingsString": "100+ ratings",
          "cloudinaryImageId": "qxgp3rnex6g2zweo0gfl",
          "cuisines": [
            "Juices",
            "Ice Cream"
          ],
          "tags": [
            
          ],
          "costForTwo": 10000,
          "costForTwoString": "₹100 FOR TWO",
          "deliveryTime": 22,
          "minDeliveryTime": 22,
          "maxDeliveryTime": 22,
          "slaString": "22 MINS",
          "lastMileTravel": 1,
          "slugs": {
            "restaurant": "lassi-shop-3-4-215e-beside-bank-of-india-station-road-kachiguda-main-rd-bagh-lingampalli-kachiguda-hyderabad-telangana-500027-vam",
            "city": "hyderabad"
          },
          "cityState": "3",
          "address": "3-4-215/E, Beside Bank of India, station road, Kachiguda Main Rd, Bagh Lingampalli, Kachiguda, Hyderabad, Telangana 500027.",
          "locality": "Kachiguda",
          "parentId": 587,
          "unserviceable": false,
          "veg": false,
          "select": false,
          "favorite": false,
          "tradeCampaignHeaders": [
            
          ],
          "aggregatedDiscountInfo": {
            "header": "50% off",
            "shortDescriptionList": [
              {
                "meta": "50% off | Use WELCOME50",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "50% off up to ₹100 | Use code WELCOME50",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          },
          "aggregatedDiscountInfoV2": {
            "header": "50% OFF",
            "shortDescriptionList": [
              {
                "meta": "Use WELCOME50",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "50% off up to ₹100 | Use code WELCOME50",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          },
          "chain": [
            
          ],
          "feeDetails": {
            "fees": [
              
            ],
            "totalFees": 0,
            "message": "",
            "title": "",
            "amount": "",
            "icon": ""
          },
          "availability": {
            "opened": true,
            "nextOpenMessage": "",
            "nextCloseMessage": ""
          },
          "longDistanceEnabled": 0,
          "rainMode": "NONE",
          "thirdPartyAddress": false,
          "thirdPartyVendor": "",
          "adTrackingID": "",
          "badges": {
            "imageBased": [
              
            ],
            "textBased": [
              
            ],
            "textExtendedBadges": [
              
            ]
          },
          "lastMileTravelString": "1 kms",
          "hasSurge": false,
          "sla": {
            "restaurantId": "118357",
            "deliveryTime": 22,
            "minDeliveryTime": 22,
            "maxDeliveryTime": 22,
            "lastMileTravel": 1,
            "lastMileDistance": 0,
            "serviceability": "SERVICEABLE",
            "rainMode": "NONE",
            "longDistance": "NOT_LONG_DISTANCE",
            "preferentialService": false,
            "iconType": "EMPTY"
          },
          "promoted": false,
          "avgRating": "3.0",
          "totalRatings": 100,
          "new": false
        },
        "subtype": "basic"
      },
      {
        "type": "restaurant",
        "data": {
          "type": "F",
          "id": "4138",
          "name": "Grand Hotel",
          "uuid": "c1a1d888-51b7-4bcc-b539-f884c796a015",
          "city": "3",
          "area": "Koti",
          "totalRatingsString": "10000+ ratings",
          "cloudinaryImageId": "g1arzw6qd7g9affkmgzk",
          "cuisines": [
            "Biryani",
            "Chinese",
            "Tandoor",
            "Haleem"
          ],
          "tags": [
            
          ],
          "costForTwo": 30000,
          "costForTwoString": "₹300 FOR TWO",
          "deliveryTime": 21,
          "minDeliveryTime": 21,
          "maxDeliveryTime": 21,
          "slaString": "21 MINS",
          "lastMileTravel": 1.2000000476837158,
          "slugs": {
            "restaurant": "grand-hotel-abids-himayath-nagar",
            "city": "hyderabad"
          },
          "cityState": "3",
          "address": "Opposite Big Bazaar, 4-1-395,Abids Road, Hyderabad",
          "locality": "Abids Road",
          "parentId": 4001,
          "unserviceable": false,
          "veg": false,
          "select": false,
          "favorite": false,
          "tradeCampaignHeaders": [
            
          ],
          "aggregatedDiscountInfo": {
            "header": "50% off",
            "shortDescriptionList": [
              {
                "meta": "50% off | Use WELCOME50",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "50% off up to ₹100 | Use code WELCOME50",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          },
          "aggregatedDiscountInfoV2": {
            "header": "50% OFF",
            "shortDescriptionList": [
              {
                "meta": "Use WELCOME50",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "50% off up to ₹100 | Use code WELCOME50",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          },
          "ribbon": [
            {
              "type": "PROMOTED"
            }
          ],
          "chain": [
            
          ],
          "feeDetails": {
            "fees": [
              
            ],
            "totalFees": 0,
            "message": "",
            "title": "",
            "amount": "",
            "icon": ""
          },
          "availability": {
            "opened": true,
            "nextOpenMessage": "",
            "nextCloseMessage": ""
          },
          "longDistanceEnabled": 0,
          "rainMode": "NONE",
          "thirdPartyAddress": false,
          "thirdPartyVendor": "",
          "adTrackingID": "cid=5732728~p=4~eid=00000185-cdfc-6049-03e2-1ddf0009046a",
          "badges": {
            "imageBased": [
              
            ],
            "textBased": [
              
            ],
            "textExtendedBadges": [
              
            ]
          },
          "lastMileTravelString": "1.2 kms",
          "hasSurge": false,
          "sla": {
            "restaurantId": "4138",
            "deliveryTime": 21,
            "minDeliveryTime": 21,
            "maxDeliveryTime": 21,
            "lastMileTravel": 1.2000000476837158,
            "lastMileDistance": 0,
            "serviceability": "SERVICEABLE",
            "rainMode": "NONE",
            "longDistance": "NOT_LONG_DISTANCE",
            "preferentialService": false,
            "iconType": "EMPTY"
          },
          "promoted": true,
          "avgRating": "4.1",
          "totalRatings": 10000,
          "new": false
        },
        "subtype": "basic"
      },
      {
        "type": "restaurant",
        "data": {
          "type": "F",
          "id": "614264",
          "name": "Sri Sai Baba Tiffin Centre",
          "uuid": "a9cd63aa-9e27-4b9b-8b41-a030e0ae43f2",
          "city": "3",
          "area": "Kachiguda",
          "totalRatingsString": "Too Few Ratings",
          "cloudinaryImageId": "qevumarffxxsdjf2pudu",
          "cuisines": [
            "South Indian"
          ],
          "tags": [
            
          ],
          "costForTwo": 12000,
          "costForTwoString": "₹120 FOR TWO",
          "deliveryTime": 36,
          "minDeliveryTime": 36,
          "maxDeliveryTime": 36,
          "slaString": "36 MINS",
          "lastMileTravel": 1,
          "slugs": {
            "restaurant": "sri-sai-baba-tiffin-centre-kachiguda-kachiguda",
            "city": "hyderabad"
          },
          "cityState": "3",
          "address": "Hno, 3-4-355/2, Lingampally ,Barkatpura ,Hyderabad circle no 9,( old mch circle III) ABIDS hyderabad telangana 500029",
          "locality": "Kachiguda",
          "parentId": 366391,
          "unserviceable": false,
          "veg": false,
          "select": false,
          "favorite": false,
          "tradeCampaignHeaders": [
            
          ],
          "aggregatedDiscountInfo": {
            "header": "50% off",
            "shortDescriptionList": [
              {
                "meta": "50% off | Use WELCOME50",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "50% off up to ₹100 | Use code WELCOME50",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          },
          "aggregatedDiscountInfoV2": {
            "header": "50% OFF",
            "shortDescriptionList": [
              {
                "meta": "Use WELCOME50",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "50% off up to ₹100 | Use code WELCOME50",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          },
          "chain": [
            
          ],
          "feeDetails": {
            "fees": [
              
            ],
            "totalFees": 0,
            "message": "",
            "title": "",
            "amount": "",
            "icon": ""
          },
          "availability": {
            "opened": true,
            "nextOpenMessage": "",
            "nextCloseMessage": ""
          },
          "longDistanceEnabled": 0,
          "rainMode": "NONE",
          "thirdPartyAddress": false,
          "thirdPartyVendor": "",
          "adTrackingID": "",
          "badges": {
            "imageBased": [
              
            ],
            "textBased": [
              
            ],
            "textExtendedBadges": [
              
            ]
          },
          "lastMileTravelString": "1 kms",
          "hasSurge": false,
          "sla": {
            "restaurantId": "614264",
            "deliveryTime": 36,
            "minDeliveryTime": 36,
            "maxDeliveryTime": 36,
            "lastMileTravel": 1,
            "lastMileDistance": 0,
            "serviceability": "SERVICEABLE",
            "rainMode": "NONE",
            "longDistance": "NOT_LONG_DISTANCE",
            "preferentialService": false,
            "iconType": "EMPTY"
          },
          "promoted": false,
          "avgRating": "--",
          "totalRatings": 0,
          "new": false
        },
        "subtype": "basic"
      },
      {
        "type": "restaurant",
        "data": {
          "type": "F",
          "id": "501578",
          "name": "Mandi House Arabian Restaurant",
          "uuid": "260227cc-2489-4589-af37-3807a2bc2362",
          "city": "3",
          "area": "Banjara Hills",
          "totalRatingsString": "20+ ratings",
          "cloudinaryImageId": "t76ndu5oqh809awinxeu",
          "cuisines": [
            "North Indian",
            "Arabian",
            "Beverages"
          ],
          "tags": [
            
          ],
          "costForTwo": 40000,
          "costForTwoString": "₹400 FOR TWO",
          "deliveryTime": 40,
          "minDeliveryTime": 40,
          "maxDeliveryTime": 40,
          "slaString": "40 MINS",
          "lastMileTravel": 6.5,
          "slugs": {
            "restaurant": "mandi-house-arabian-restaurant-jubilee-hills-jubilee-hills",
            "city": "hyderabad"
          },
          "cityState": "3",
          "address": "Door No. 6-3-249/A, Road No. 1, Banjara Hills, Hyderabad -500034",
          "locality": "Road No 1",
          "parentId": 131552,
          "unserviceable": false,
          "veg": false,
          "select": false,
          "favorite": false,
          "tradeCampaignHeaders": [
            
          ],
          "aggregatedDiscountInfo": {
            "header": "50% off",
            "shortDescriptionList": [
              {
                "meta": "50% off | Use WELCOME50",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "50% off up to ₹100 | Use code WELCOME50",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          },
          "aggregatedDiscountInfoV2": {
            "header": "50% OFF",
            "shortDescriptionList": [
              {
                "meta": "Use WELCOME50",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "50% off up to ₹100 | Use code WELCOME50",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          },
          "chain": [
            
          ],
          "feeDetails": {
            "fees": [
              
            ],
            "totalFees": 0,
            "message": "",
            "title": "",
            "amount": "",
            "icon": ""
          },
          "availability": {
            "opened": true,
            "nextOpenMessage": "",
            "nextCloseMessage": ""
          },
          "longDistanceEnabled": 1,
          "rainMode": "NONE",
          "thirdPartyAddress": false,
          "thirdPartyVendor": "",
          "adTrackingID": "",
          "badges": {
            "imageBased": [
              
            ],
            "textBased": [
              
            ],
            "textExtendedBadges": [
              
            ]
          },
          "lastMileTravelString": "6.5 kms",
          "hasSurge": false,
          "sla": {
            "restaurantId": "501578",
            "deliveryTime": 40,
            "minDeliveryTime": 40,
            "maxDeliveryTime": 40,
            "lastMileTravel": 6.5,
            "lastMileDistance": 0,
            "serviceability": "SERVICEABLE",
            "rainMode": "NONE",
            "longDistance": "IT_IS_LONG_DISTANCE",
            "preferentialService": false,
            "iconType": "EMPTY"
          },
          "promoted": false,
          "avgRating": "3.8",
          "totalRatings": 20,
          "new": false
        },
        "subtype": "basic"
      },
      {
        "type": "restaurant",
        "data": {
          "type": "F",
          "id": "57903",
          "name": "Capital Multi Cuisine Restaurant",
          "uuid": "22522847-b1c5-48cf-9e3d-ed4405887a00",
          "city": "3",
          "area": "Mumbai hwy",
          "totalRatingsString": "5000+ ratings",
          "cloudinaryImageId": "ijy2jxi7lfwsebdtazpi",
          "cuisines": [
            "Biryani",
            "Chinese",
            "Indian",
            "Kebabs",
            "Tandoor"
          ],
          "tags": [
            
          ],
          "costForTwo": 50000,
          "costForTwoString": "₹500 FOR TWO",
          "deliveryTime": 23,
          "minDeliveryTime": 23,
          "maxDeliveryTime": 23,
          "slaString": "23 MINS",
          "lastMileTravel": 3.700000047683716,
          "slugs": {
            "restaurant": "capital-multi-cusine-restaurant-malakpet-kothapet-dilsukhnagar",
            "city": "hyderabad"
          },
          "cityState": "3",
          "address": "16-2-741/D/7, 8, beside TV tower Malakpet, Hyderabad",
          "locality": "Mumbai hwy",
          "parentId": 19262,
          "unserviceable": false,
          "veg": false,
          "select": false,
          "favorite": false,
          "tradeCampaignHeaders": [
            
          ],
          "aggregatedDiscountInfo": {
            "header": "40% off",
            "shortDescriptionList": [
              {
                "meta": "40% off | Use GUILTFREEJAN",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "40% off up to ₹100 | Use code GUILTFREEJAN",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          },
          "aggregatedDiscountInfoV2": {
            "header": "40% OFF",
            "shortDescriptionList": [
              {
                "meta": "Use GUILTFREEJAN",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "40% off up to ₹100 | Use code GUILTFREEJAN",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          },
          "ribbon": [
            {
              "type": "PROMOTED"
            }
          ],
          "chain": [
            
          ],
          "feeDetails": {
            "fees": [
              
            ],
            "totalFees": 0,
            "message": "",
            "title": "",
            "amount": "",
            "icon": ""
          },
          "availability": {
            "opened": true,
            "nextOpenMessage": "",
            "nextCloseMessage": ""
          },
          "longDistanceEnabled": 0,
          "rainMode": "NONE",
          "thirdPartyAddress": false,
          "thirdPartyVendor": "",
          "adTrackingID": "cid=5659142~p=7~eid=00000185-cdfc-6049-03e2-1de00009074d",
          "badges": {
            "imageBased": [
              
            ],
            "textBased": [
              
            ],
            "textExtendedBadges": [
              
            ]
          },
          "lastMileTravelString": "3.7 kms",
          "hasSurge": false,
          "sla": {
            "restaurantId": "57903",
            "deliveryTime": 23,
            "minDeliveryTime": 23,
            "maxDeliveryTime": 23,
            "lastMileTravel": 3.700000047683716,
            "lastMileDistance": 0,
            "serviceability": "SERVICEABLE",
            "rainMode": "NONE",
            "longDistance": "NOT_LONG_DISTANCE",
            "preferentialService": false,
            "iconType": "EMPTY"
          },
          "promoted": true,
          "avgRating": "3.7",
          "totalRatings": 5000,
          "new": false
        },
        "subtype": "basic"
      },
        {
          "type": "restaurant",
          "data": {
            "type": "F",
            "id": "37103",
            "name": "KFC",
            "uuid": "5bd88204-bfc5-4703-834e-cd09e1ba659c",
            "city": "3",
            "area": "Basheer Bagh",
            "totalRatingsString": "500+ ratings",
            "cloudinaryImageId": "bdcd233971b7c81bf77e1fa4471280eb",
            "cuisines": [
              "Burgers",
              "Biryani",
              "American",
              "Snacks",
              "Fast Food"
            ],
            "tags": [
              
            ],
            "costForTwo": 40000,
            "costForTwoString": "₹400 FOR TWO",
            "deliveryTime": 36,
            "minDeliveryTime": 36,
            "maxDeliveryTime": 36,
            "slaString": "36 MINS",
            "lastMileTravel": 2,
            "slugs": {
              "restaurant": "kfc-abids-road-abids-koti",
              "city": "hyderabad"
            },
            "cityState": "3",
            "address": "Yum Restaurants -(India)- PVT LTD|Ground Floor, H No: 5-9-322,T. S. No. 86, Ward No. 51, Block F, Abids Road, Opp SBH Bank, Gun Foundry, Hyderabad, Telangana 500001",
            "locality": "Abids Road",
            "parentId": 547,
            "unserviceable": false,
            "veg": false,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [
              
            ],
            "aggregatedDiscountInfo": {
              "header": "50% off",
              "shortDescriptionList": [
                {
                  "meta": "50% off | Use WELCOME50",
                  "discountType": "Percentage",
                  "operationType": "RESTAURANT"
                }
              ],
              "descriptionList": [
                {
                  "meta": "50% off up to ₹100 | Use code WELCOME50",
                  "discountType": "Percentage",
                  "operationType": "RESTAURANT"
                }
              ],
              "subHeader": "",
              "headerType": 0,
              "superFreedel": ""
            },
            "aggregatedDiscountInfoV2": {
              "header": "50% OFF",
              "shortDescriptionList": [
                {
                  "meta": "Use WELCOME50",
                  "discountType": "Percentage",
                  "operationType": "RESTAURANT"
                }
              ],
              "descriptionList": [
                {
                  "meta": "50% off up to ₹100 | Use code WELCOME50",
                  "discountType": "Percentage",
                  "operationType": "RESTAURANT"
                }
              ],
              "subHeader": "",
              "headerType": 0,
              "superFreedel": ""
            },
            "ribbon": [
              {
                "type": "PROMOTED"
              }
            ],
            "chain": [
              
            ],
            "feeDetails": {
              "fees": [
                
              ],
              "totalFees": 0,
              "message": "",
              "title": "",
              "amount": "",
              "icon": ""
            },
            "availability": {
              "opened": true,
              "nextOpenMessage": "",
              "nextCloseMessage": ""
            },
            "longDistanceEnabled": 0,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "cid=5729043~p=1~eid=00000185-aebc-b611-35b4-4c6400a7017b",
            "badges": {
              "imageBased": [
                
              ],
              "textBased": [
                
              ],
              "textExtendedBadges": [
                
              ]
            },
            "lastMileTravelString": "2 kms",
            "hasSurge": false,
            "sla": {
              "restaurantId": "37103",
              "deliveryTime": 36,
              "minDeliveryTime": 36,
              "maxDeliveryTime": 36,
              "lastMileTravel": 2,
              "lastMileDistance": 0,
              "serviceability": "SERVICEABLE",
              "rainMode": "NONE",
              "longDistance": "NOT_LONG_DISTANCE",
              "preferentialService": false,
              "iconType": "EMPTY"
            },
            "promoted": true,
            "avgRating": "4.1",
            "totalRatings": 500,
            "new": false
          },
          "subtype": "basic"
        },
        {
          "type": "restaurant",
          "data": {
            "type": "F",
            "id": "24769",
            "name": "Sri Raghavendra Udupi Veg",
            "uuid": "867be188-73a8-4b06-8d6a-c5ec706b526a",
            "city": "3",
            "area": "Krishna Nagar Colony",
            "totalRatingsString": "1000+ ratings",
            "cloudinaryImageId": "emrgehw3uuq82clyh5ol",
            "cuisines": [
              "South Indian"
            ],
            "tags": [
              
            ],
            "costForTwo": 20000,
            "costForTwoString": "₹200 FOR TWO",
            "deliveryTime": 30,
            "minDeliveryTime": 30,
            "maxDeliveryTime": 30,
            "slaString": "30 MINS",
            "lastMileTravel": 7.900000095367432,
            "slugs": {
              "restaurant": "sri-raghavendra-udupi-veg-lbnagar-kothapet-dilsukhnagar",
              "city": "hyderabad"
            },
            "cityState": "3",
            "address": "13-1-31-811, Janapriya Colony, CM Road, LB nagar, OPP Tnr shakuntala, Hyderabad",
            "locality": "Saroor Nagar Road",
            "parentId": 19939,
            "unserviceable": false,
            "veg": true,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [
              
            ],
            "aggregatedDiscountInfo": {
              "header": "10% off",
              "shortDescriptionList": [
                {
                  "meta": "10% off | Use JUMBO",
                  "discountType": "Percentage",
                  "operationType": "RESTAURANT"
                }
              ],
              "descriptionList": [
                {
                  "meta": "10% off up to ₹100 on orders above ₹479 | Use code JUMBO",
                  "discountType": "Percentage",
                  "operationType": "RESTAURANT"
                }
              ],
              "subHeader": "",
              "headerType": 0,
              "superFreedel": ""
            },
            "aggregatedDiscountInfoV2": {
              "header": "10% OFF",
              "shortDescriptionList": [
                {
                  "meta": "Use JUMBO",
                  "discountType": "Percentage",
                  "operationType": "RESTAURANT"
                }
              ],
              "descriptionList": [
                {
                  "meta": "10% off up to ₹100 on orders above ₹479 | Use code JUMBO",
                  "discountType": "Percentage",
                  "operationType": "RESTAURANT"
                }
              ],
              "subHeader": "",
              "headerType": 0,
              "superFreedel": ""
            },
            "chain": [
              
            ],
            "feeDetails": {
              "fees": [
                
              ],
              "totalFees": 0,
              "message": "",
              "title": "",
              "amount": "",
              "icon": ""
            },
            "availability": {
              "opened": true,
              "nextOpenMessage": "",
              "nextCloseMessage": ""
            },
            "longDistanceEnabled": 1,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "",
            "badges": {
              "imageBased": [
                
              ],
              "textBased": [
                
              ],
              "textExtendedBadges": [
                
              ]
            },
            "lastMileTravelString": "7.9 kms",
            "hasSurge": false,
            "sla": {
              "restaurantId": "24769",
              "deliveryTime": 30,
              "minDeliveryTime": 30,
              "maxDeliveryTime": 30,
              "lastMileTravel": 7.900000095367432,
              "lastMileDistance": 0,
              "serviceability": "SERVICEABLE",
              "rainMode": "NONE",
              "longDistance": "IT_IS_LONG_DISTANCE",
              "preferentialService": false,
              "iconType": "EMPTY"
            },
            "promoted": false,
            "avgRating": "4.0",
            "totalRatings": 1000,
            "new": false
          },
          "subtype": "basic"
        },
        {
          "type": "restaurant",
          "data": {
            "type": "F",
            "id": "5974",
            "name": "Bheema's",
            "uuid": "b9f4e99f-5958-49d4-b9fa-a169beada530",
            "city": "3",
            "area": "Shaikpet",
            "totalRatingsString": "5000+ ratings",
            "cloudinaryImageId": "wrlcwarzitxcdrtqv4ix",
            "cuisines": [
              "South Indian"
            ],
            "tags": [
              
            ],
            "costForTwo": 15000,
            "costForTwoString": "₹150 FOR TWO",
            "deliveryTime": 54,
            "minDeliveryTime": 50,
            "maxDeliveryTime": 60,
            "slaString": "50-60 MINS",
            "lastMileTravel": 11.899999618530273,
            "slugs": {
              "restaurant": "bheemas-manikonda",
              "city": "hyderabad"
            },
            "cityState": "3",
            "address": "Manikonda Rd, OU Colony, Shaikpet, Hyderabad, Telangana 500008",
            "locality": "OU Colony",
            "parentId": 1841,
            "unserviceable": false,
            "veg": true,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [
              
            ],
            "aggregatedDiscountInfo": {
              "header": "40% off",
              "shortDescriptionList": [
                {
                  "meta": "40% off | Use GUILTFREEJAN",
                  "discountType": "Percentage",
                  "operationType": "RESTAURANT"
                }
              ],
              "descriptionList": [
                {
                  "meta": "40% off up to ₹100 | Use code GUILTFREEJAN",
                  "discountType": "Percentage",
                  "operationType": "RESTAURANT"
                }
              ],
              "subHeader": "",
              "headerType": 0,
              "superFreedel": ""
            },
            "aggregatedDiscountInfoV2": {
              "header": "40% OFF",
              "shortDescriptionList": [
                {
                  "meta": "Use GUILTFREEJAN",
                  "discountType": "Percentage",
                  "operationType": "RESTAURANT"
                }
              ],
              "descriptionList": [
                {
                  "meta": "40% off up to ₹100 | Use code GUILTFREEJAN",
                  "discountType": "Percentage",
                  "operationType": "RESTAURANT"
                }
              ],
              "subHeader": "",
              "headerType": 0,
              "superFreedel": ""
            },
            "chain": [
              
            ],
            "feeDetails": {
              "fees": [
                
              ],
              "totalFees": 0,
              "message": "",
              "title": "",
              "amount": "",
              "icon": ""
            },
            "availability": {
              "opened": true,
              "nextOpenMessage": "",
              "nextCloseMessage": ""
            },
            "longDistanceEnabled": 1,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "",
            "badges": {
              "imageBased": [
                
              ],
              "textBased": [
                
              ],
              "textExtendedBadges": [
                
              ]
            },
            "lastMileTravelString": "11.8 kms",
            "hasSurge": false,
            "sla": {
              "restaurantId": "5974",
              "deliveryTime": 54,
              "minDeliveryTime": 50,
              "maxDeliveryTime": 60,
              "lastMileTravel": 11.899999618530273,
              "lastMileDistance": 0,
              "serviceability": "SERVICEABLE",
              "rainMode": "NONE",
              "longDistance": "IT_IS_LONG_DISTANCE",
              "preferentialService": false,
              "iconType": "EMPTY"
            },
            "promoted": false,
            "avgRating": "4.3",
            "totalRatings": 5000,
            "new": false
          },
          "subtype": "basic"
        },
        {
          "type": "restaurant",
          "data": {
            "type": "F",
            "id": "107648",
            "name": "Ghrelin - Cafe and Patisserie",
            "uuid": "11bef8de-a058-4737-812c-4050dbaecf4a",
            "city": "3",
            "area": "Basheer Bagh",
            "totalRatingsString": "500+ ratings",
            "cloudinaryImageId": "f37orhqt2pa7hxpxfv2q",
            "cuisines": [
              "Desserts",
              "Bakery"
            ],
            "tags": [
              
            ],
            "costForTwo": 45000,
            "costForTwoString": "₹450 FOR TWO",
            "deliveryTime": 29,
            "minDeliveryTime": 29,
            "maxDeliveryTime": 29,
            "slaString": "29 MINS",
            "lastMileTravel": 2.4000000953674316,
            "slugs": {
              "restaurant": "ghrelin-cafe-and-patisserie-king-koti-himayath-nagar",
              "city": "hyderabad"
            },
            "cityState": "3",
            "address": "6-288/2, Sri Siva Rama Towers , King Koti, Avanti Nagar, Hyderguda., Hyderabad - 500029",
            "locality": "Sri Siva Rama Towers",
            "parentId": 8166,
            "unserviceable": false,
            "veg": false,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [
              
            ],
            "aggregatedDiscountInfo": {
              "header": "10% off",
              "shortDescriptionList": [
                {
                  "meta": "10% off | Use PARTY",
                  "discountType": "Percentage",
                  "operationType": "RESTAURANT"
                }
              ],
              "descriptionList": [
                {
                  "meta": "10% off | Use code PARTY",
                  "discountType": "Percentage",
                  "operationType": "RESTAURANT"
                }
              ],
              "subHeader": "",
              "headerType": 0,
              "superFreedel": ""
            },
            "aggregatedDiscountInfoV2": {
              "header": "10% OFF",
              "shortDescriptionList": [
                {
                  "meta": "Use PARTY",
                  "discountType": "Percentage",
                  "operationType": "RESTAURANT"
                }
              ],
              "descriptionList": [
                {
                  "meta": "10% off | Use code PARTY",
                  "discountType": "Percentage",
                  "operationType": "RESTAURANT"
                }
              ],
              "subHeader": "",
              "headerType": 0,
              "superFreedel": ""
            },
            "ribbon": [
              {
                "type": "PROMOTED"
              }
            ],
            "chain": [
              
            ],
            "feeDetails": {
              "fees": [
                
              ],
              "totalFees": 0,
              "message": "",
              "title": "",
              "amount": "",
              "icon": ""
            },
            "availability": {
              "opened": true,
              "nextOpenMessage": "",
              "nextCloseMessage": ""
            },
            "longDistanceEnabled": 0,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "cid=5677129~p=4~eid=00000185-aebc-b611-35b4-4c6500a70478",
            "badges": {
              "imageBased": [
                
              ],
              "textBased": [
                
              ],
              "textExtendedBadges": [
                
              ]
            },
            "lastMileTravelString": "2.4 kms",
            "hasSurge": false,
            "sla": {
              "restaurantId": "107648",
              "deliveryTime": 29,
              "minDeliveryTime": 29,
              "maxDeliveryTime": 29,
              "lastMileTravel": 2.4000000953674316,
              "lastMileDistance": 0,
              "serviceability": "SERVICEABLE",
              "rainMode": "NONE",
              "longDistance": "NOT_LONG_DISTANCE",
              "preferentialService": false,
              "iconType": "EMPTY"
            },
            "promoted": true,
            "avgRating": "4.3",
            "totalRatings": 500,
            "new": false
          },
          "subtype": "basic"
        },
        {
          "type": "restaurant",
          "data": {
            "type": "F",
            "id": "4320",
            "name": "Mehfil",
            "uuid": "4dee4970-8673-42b6-8a49-cab0efdb258f",
            "city": "3",
            "area": "Narayanguda",
            "totalRatingsString": "10000+ ratings",
            "cloudinaryImageId": "esp0fhddgfgdss5hyhpi",
            "cuisines": [
              "Biryani",
              "Chinese",
              "Indian",
              "Kebabs",
              "Tandoor",
              "Desserts"
            ],
            "tags": [
              
            ],
            "costForTwo": 30000,
            "costForTwoString": "₹300 FOR TWO",
            "deliveryTime": 18,
            "minDeliveryTime": 18,
            "maxDeliveryTime": 18,
            "slaString": "18 MINS",
            "lastMileTravel": 1.7000000476837158,
            "slugs": {
              "restaurant": "mehfil-narayanguda-himayath-nagar",
              "city": "hyderabad"
            },
            "cityState": "3",
            "address": "Near Narayanguda Flyover, Narayanguda, Hyderabad",
            "locality": "Near Narayanguda Flyover",
            "parentId": 637,
            "unserviceable": false,
            "veg": false,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [
              
            ],
            "aggregatedDiscountInfo": {
              "header": "50% off",
              "shortDescriptionList": [
                {
                  "meta": "50% off | Use WELCOME50",
                  "discountType": "Percentage",
                  "operationType": "RESTAURANT"
                }
              ],
              "descriptionList": [
                {
                  "meta": "50% off up to ₹100 | Use code WELCOME50",
                  "discountType": "Percentage",
                  "operationType": "RESTAURANT"
                }
              ],
              "subHeader": "",
              "headerType": 0,
              "superFreedel": ""
            },
            "aggregatedDiscountInfoV2": {
              "header": "50% OFF",
              "shortDescriptionList": [
                {
                  "meta": "Use WELCOME50",
                  "discountType": "Percentage",
                  "operationType": "RESTAURANT"
                }
              ],
              "descriptionList": [
                {
                  "meta": "50% off up to ₹100 | Use code WELCOME50",
                  "discountType": "Percentage",
                  "operationType": "RESTAURANT"
                }
              ],
              "subHeader": "",
              "headerType": 0,
              "superFreedel": ""
            },
            "chain": [
              
            ],
            "feeDetails": {
              "fees": [
                
              ],
              "totalFees": 0,
              "message": "",
              "title": "",
              "amount": "",
              "icon": ""
            },
            "availability": {
              "opened": true,
              "nextOpenMessage": "",
              "nextCloseMessage": ""
            },
            "longDistanceEnabled": 0,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "",
            "badges": {
              "imageBased": [
                
              ],
              "textBased": [
                
              ],
              "textExtendedBadges": [
                
              ]
            },
            "lastMileTravelString": "1.7 kms",
            "hasSurge": false,
            "sla": {
              "restaurantId": "4320",
              "deliveryTime": 18,
              "minDeliveryTime": 18,
              "maxDeliveryTime": 18,
              "lastMileTravel": 1.7000000476837158,
              "lastMileDistance": 0,
              "serviceability": "SERVICEABLE",
              "rainMode": "NONE",
              "longDistance": "NOT_LONG_DISTANCE",
              "preferentialService": false,
              "iconType": "EMPTY"
            },
            "promoted": false,
            "avgRating": "3.8",
            "totalRatings": 10000,
            "new": false
          },
          "subtype": "basic"
        },
        {
          "type": "restaurant",
          "data": {
            "type": "F",
            "id": "34634",
            "name": "Shah Ghouse Cafe & Restaurant",
            "uuid": "b01410a9-830a-45c8-b128-7358eea26f5b",
            "city": "3",
            "area": "Tolichowki",
            "totalRatingsString": "10000+ ratings",
            "cloudinaryImageId": "ks4d93rjtcbitkzkbqx0",
            "cuisines": [
              "Biryani",
              "North Indian",
              "Chinese",
              "Mughlai",
              "Tandoor"
            ],
            "tags": [
              
            ],
            "costForTwo": 35000,
            "costForTwoString": "₹350 FOR TWO",
            "deliveryTime": 36,
            "minDeliveryTime": 36,
            "maxDeliveryTime": 36,
            "slaString": "36 MINS",
            "lastMileTravel": 8.399999618530273,
            "slugs": {
              "restaurant": "shah-ghouse-cafe-restaurant-tolichowki-tolichowki",
              "city": "hyderabad"
            },
            "cityState": "3",
            "address": "Opposite SA Imperial Gardens, Near RTA Office, Tolichowki, Hyderabad",
            "locality": "Tolichowki",
            "parentId": 18992,
            "unserviceable": false,
            "veg": false,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [
              
            ],
            "aggregatedDiscountInfo": {
              "header": "50% off",
              "shortDescriptionList": [
                {
                  "meta": "50% off | Use WELCOME50",
                  "discountType": "Percentage",
                  "operationType": "RESTAURANT"
                }
              ],
              "descriptionList": [
                {
                  "meta": "50% off up to ₹100 | Use code WELCOME50",
                  "discountType": "Percentage",
                  "operationType": "RESTAURANT"
                }
              ],
              "subHeader": "",
              "headerType": 0,
              "superFreedel": ""
            },
            "aggregatedDiscountInfoV2": {
              "header": "50% OFF",
              "shortDescriptionList": [
                {
                  "meta": "Use WELCOME50",
                  "discountType": "Percentage",
                  "operationType": "RESTAURANT"
                }
              ],
              "descriptionList": [
                {
                  "meta": "50% off up to ₹100 | Use code WELCOME50",
                  "discountType": "Percentage",
                  "operationType": "RESTAURANT"
                }
              ],
              "subHeader": "",
              "headerType": 0,
              "superFreedel": ""
            },
            "chain": [
              
            ],
            "feeDetails": {
              "fees": [
                
              ],
              "totalFees": 0,
              "message": "",
              "title": "",
              "amount": "",
              "icon": ""
            },
            "availability": {
              "opened": true,
              "nextOpenMessage": "",
              "nextCloseMessage": ""
            },
            "longDistanceEnabled": 1,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "",
            "badges": {
              "imageBased": [
                
              ],
              "textBased": [
                
              ],
              "textExtendedBadges": [
                
              ]
            },
            "lastMileTravelString": "8.3 kms",
            "hasSurge": false,
            "sla": {
              "restaurantId": "34634",
              "deliveryTime": 36,
              "minDeliveryTime": 36,
              "maxDeliveryTime": 36,
              "lastMileTravel": 8.399999618530273,
              "lastMileDistance": 0,
              "serviceability": "SERVICEABLE",
              "rainMode": "NONE",
              "longDistance": "IT_IS_LONG_DISTANCE",
              "preferentialService": false,
              "iconType": "EMPTY"
            },
            "promoted": false,
            "avgRating": "4.1",
            "totalRatings": 10000,
            "new": false
          },
          "subtype": "basic"
        },
    ];

function filterData(txt,res){
const filterDat = res.filter((r)=>r.data.name.toLowerCase().includes(txt.toLowerCase()));
return filterDat;
}
    const Body = ()=>{
  const [someVal, setsomeVal] = useState(""); 
  const [restaurantData, setRestaurantData] = useState(restuarantList);
    return(
      <>
    <div className='search'>
      <input type="text" placeholder="Search" value={someVal} onChange={(e)=>
        {setsomeVal(e.target.value);}
      }/>
    <button onClick={() =>{ const data = filterData(someVal,restuarantList); setRestaurantData(data);}}>Submit</button>

    <h1>{someVal}</h1>

    </div>
        <div className='restuarant-list'>
        {restaurantData.map(x => {return <RestaurantCardss {...x.data} key={x.data.id}/>})}
        </div>
        </>
    );
    }

const Footer = ()=>{
        return(
            <h1>Footer</h1>
        );
        }
const AppComponent = () => {
    return(
        <React.Fragment>
        <Header/>
        <Body/>
        <Footer/>
        </React.Fragment>
    );
};
const rooting = document.getElementById("root");
const root=ReactDOM.createRoot(rooting); 
root.render(<AppComponent />);