import DataManager from '../Config/DataManager'


const addListing = (listing) => {
    let commonData = DataManager.getInstance();
    commonData.addPlace(listing)
}

export default addListing;