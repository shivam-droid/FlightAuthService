const UserRepository = require('../repository/user-repository');

class UserService {
    constructor() {
        this.userRepository = new UserRepository();
    }

    async create(userData) {
        try {
            const user = await this.userRepository.create(userData);
            return user;
        } catch (error) {
            console.log("Something went wrong in the service layer");
            throw new Error('Error creating user: ' + error.message);
        }
    }

    async destroy(userId) {
        try {
            const result = await this.userRepository.destroy(userId);
            return result;
        } catch (error) {
            console.log("Something went wrong in the service layer");
            throw new Error('Error deleting user: ' + error.message);
        }
    }

    async getAllUsers() {
        try {

            const users = await this.userRepository.getAllUsers();
            return users;   
            
        } catch (error) {
            console.log("Something went wrong in the service layer");
            throw new Error('Error fetching users: ' + error.message);
            
        }
    }
}

module.exports = { UserService };