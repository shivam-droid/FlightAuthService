const {User} = require('../models/index.js');

class UserRepository {

    async create(userData){
        try {
            const user = await User.create(userData);
            return user;
        } catch (error) {
            console.log("Something went wrong on repository layer");
            throw new Error('Error creating user: ' + error.message);
        }
    }

    async destroy(userId){
        try {
            await User.destroy({
                where:{
                    id: userId
                }
            });
            return true;
        } catch (error) {
            console.log("Something went wrong on repository layer");
            throw new Error('Error creating user: ' + error.message);
        }
    }

    async getAllUsers() {
        try {

            const users = await User.findAll();
            return users;
            
        } catch (error) {
            console.log("Something went wrong on repository layer");
            throw new Error('Error fetching users: ' + error.message);
            
        }
    }
}

module.exports = UserRepository;

