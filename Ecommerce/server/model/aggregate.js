require('./adminSchema');
require('./userSchema');
async function fetchData() {
    try {
        // Use the Admin model
        const collectionAData = await Admin.aggregate([
            {
                $lookup: {
                    from: 'User', // Name of the second collection (User)
                    localField: 'userId', // Field from the first collection (Admin)
                    foreignField: '_id', // Field from the second collection (User)
                    as: 'mappedData' // Name of the field where the mapped data will be stored
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
