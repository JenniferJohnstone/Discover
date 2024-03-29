export default class DataManager {
    static myInstance = null;
    userID = "";

    placeList = [
        {
            id: '101',
            title: 'Santorini Beach',
            image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.dGDecBbyeWWhvSF5PPsOIgHaEK%26pid%3DApi&f=1',
            category: 'Place to visit',
            country: 'Fira Town',
            description: 'This picturesque beach will make your problems seem as tiny as grains of sand',
            address: '123 Fake Street, Newington, NSW'
        },
        {
            id: '111',
            title: 'Santorini Beach',
            image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.dGDecBbyeWWhvSF5PPsOIgHaEK%26pid%3DApi&f=1',
            category: 'Place to eat',
            country: 'Fira Town',
            description: 'This picturesque beach will make your problems seem as tiny as grains of sand',
            address: '123 Fake Street, Newington, NSW'
        }, {
            id: '222',
            title: 'Santorini Beach',
            image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.dGDecBbyeWWhvSF5PPsOIgHaEK%26pid%3DApi&f=1',
            category: 'Place to stay',
            country: 'Fira Town',
            description: 'This picturesque beach will make your problems seem as tiny as grains of sand',
            address: '123 Fake Street, Newington, NSW'
        }, {
            id: '333',
            title: 'Santorini Beach',
            image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.dGDecBbyeWWhvSF5PPsOIgHaEK%26pid%3DApi&f=1',
            category: 'Thing to do',
            country: 'Fira Town',
            description: 'This picturesque beach will make your problems seem as tiny as grains of sand',
            address: '123 Fake Street, Newington, NSW'
        },
        {
            id: '102',
            title: "Ramsay's kitchen",
            image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.sIlZBr-C5_Cg1MJ3WpTyswHaEK%26pid%3DApi&f=1',
            category: 'Place to eat',
            country: 'New York',
            description: 'This kitchen is believed to be from hell, but the food tastes as good as sin',
            address: '123 Fake Street, Newington, NSW'
        },
        {
            id: '103',
            title: "Haunted Hotel",
            image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.RgT08jNKIuzHkHfCnvd-OwHaE6%26pid%3DApi&f=1',
            category: 'Place to stay',
            country: 'Sydney',
            description: "Well the title says it all... don't say we didn't warn you!",
            address: '123 Fake Street, Newington, NSW'
        },
        {
            id: '104',
            title: "Camel Riding",
            image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.gP20cBDCYQqeA-gsaL_pJgHaE6%26pid%3DApi&f=1',
            category: 'Thing to do',
            country: 'Abu Dabi',
            description: "It's like a horse, but different. More humps.",
            address: '123 Fake Street, Newington, NSW'
        }, {
            "id": "TxXJrh",
            "title": "Crescent Oaks",
            "image": "http://dummyimage.com/119x100.png/ff4444/ffffff",
            "category": "Place to visit",
            "country": "Sydney",
            "description": "Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.",
            "address": "36 Brickson Park Alley"
        }, {
            "id": "DzNVoS",
            "title": "Fairview",
            "image": "http://dummyimage.com/116x100.png/dddddd/000000",
            "category": "Thing to do",
            "country": "New York",
            "description": "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros.",
            "address": "63 Warbler Plaza"
        }, {
            "id": "auLZnRszaeY4",
            "title": "Surrey",
            "image": "http://dummyimage.com/138x100.png/ff4444/ffffff",
            "category": "Place to stay",
            "country": "Abu Dabi",
            "description": "In quis justo.",
            "address": "99101 Dapin Parkway"
        }, {
            "id": "HyxwQWnYfXS",
            "title": "Charing Cross",
            "image": "http://dummyimage.com/145x100.png/ff4444/ffffff",
            "category": "Place to eat",
            "country": "London",
            "description": "Morbi vestibulum, velit id pretium iacu.",
            "address": "42953 Hoffman Parkway"
        }, {
            "id": "fanApyPUWlE",
            "title": "Pine View",
            "image": "http://dummyimage.com/225x100.png/5fa2dd/ffffff",
            "category": "Place to visit",
            "country": "Tokyo",
            "description": "Nam congue, risus semper porta volutpat, q.",
            "address": "594 Cascade Parkway"
        },
    ]

    wishList = [
        {
            userId: 0,
            placeList: ['101', '111', '222', '333']
        },
        {
            userId: 1,
            placeList: ['333', 'auLZnRszaeY4']
        }
    ]

    // this is an array of lists that contain the id's of the  places within their wishlist 


    static getInstance() {
        if (DataManager.myInstance == null) {
            DataManager.myInstance = new DataManager();
        }
        return this.myInstance;
    }

    getUserID() {
        return this.userID;
    }

    setUserID(id) {
        this.userID = id;
    }

    getWishList(id) {
        let wishList = this.wishList.filter(listing => listing.userId === id)
        let userPlaceList = wishList[0].placeList
        userPlaceList = this.placeList.filter(place => {
            return userPlaceList.includes(place.id)
        })
        return userPlaceList
    }
    // filters the wishList array for the entry containing the user's id 

    removeFromWishList(placeId, userId) {
        let userIndex = this.findUserIndex(userId)
        let placeIndex = this.wishList[userIndex].placeList.indexOf(placeId)
        if (placeIndex == undefined) {
            return 0
        } else {
            this.wishList[userIndex].placeList.splice(placeIndex, 1)
        }
    }
    // this will remove the id of the place given from the user's wishlist entry 

    findUserIndex(id) {
        let userIndex = this.wishList.findIndex(listing => {
            if (listing.userId === id) {
                return true
            }
        })
        return userIndex
    }

    // this will find the index of the user's entry within the wishlist array 

    addToWishList(placeId, userId) {
        let userIndex = this.findUserIndex(userId)
        if (this.wishList[userIndex].placeList.indexOf(placeId) === -1) {
            this.wishList[userIndex].placeList.push(placeId)
        }
    }

    //this will add the id of the given place to the user's wishlist entry 

    getPlace(id) {
        const searchIndex = this.placeList.findIndex((place) => place.id == id);
        return this.placeList[searchIndex]
    }
    //filters the placelist array for the one containing the id 

    //filters the placelist array for the one containing the id 

    getPlaceList() {
        return this.placeList
    }
    //simply returns all the places within the array

    addPlace(data) {
        data.image = data.image.localUri
        this.placeList.push(data);
    }
    // adds an entry to the placelist 

    removePlace(id) {
        let placeIndex = this.findPlaceIndex(id)
        this.placeList.splice(placeIndex, 1)
    }
    // removes the place from the array that matches the given id 

    editPlace(id, data) {
        let placeIndex = this.findPlaceIndex(id)
        this.placeList[placeIndex] = data
    }
    //finds the index of the place's entry within the placelist array and replaces it with the edited version 

    findPlaceIndex(id) {
        let placeIndex = this.placeList.findIndex(place => {
            if (place.id === id) {
                return true
            }
        })
        return placeIndex
    }
    //returns the index of the place within the placelist array  

}