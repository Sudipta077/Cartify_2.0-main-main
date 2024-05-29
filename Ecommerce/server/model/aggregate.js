// fetchData.js
const Admin = require('./adminSchema');
const User = require('./userSchema');

async function fetchData() {
    try {
        // Use the Admin model
        const collectionAData = await Admin.aggregate([
            {
                $lookup: {
                    from: 'users', // Name of the second collection (User)
                    localField: 'userId', // Field from the first collection (Admin)
                    foreignField: '_id', // Field from the second collection (User)
                    as: 'mappedData' // Name of the field where the mapped data will be stored
                },
                
            },
            {
                $unwind: '$mappedData' // Unwind the mappedData array to simplify the structure
            },
             {
                $project: {
                    _id: 1,
                    name: 1,
                    address: 1,
                    contact: 1,
                    payment: 1,
                    
                    'mappedData.orders': 1 // Ensure orders array is included
                }
            }
        ]);

        console.log(collectionAData);
        return collectionAData;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

module.exports = fetchData;
