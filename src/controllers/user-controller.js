const { get } = require('../routes');
const {UserService} = require('../services/user-service');

const userService = new UserService();

const create = async (req, res) => {
    try {

        const response = await userService.create({
            email : req.body.email,
            password : req.body.password,
        });

        res.status(201).json({
            data: response,
            success: true,
            message: "Successfully created a new user",
            err: {}
        });
        
    } catch (error) {
        console.log("Something went wrong in the controller layer");
        res.status(500).json({
            data: {},
            success: false,
            message: "Not able to create a new user",
            err: error.message
        })
    }
}

const destroy = async(req,res)=>{
    try {

        const response = await userService.destroy(req.query.userId);

        if(response){
            return res.status(200).json({
                data: response,
                success: true,
                message: "Successfully deleted the user",
                err: {}
            });
        } else {
            return res.status(404).json({
                data: {},
                success: false,
                message: "User not found",
                err: {}
            });
        }
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            data: {},
            success: false,
            message: "Not able to delete the user",
            err: error.message
        });
    }
}

const getAllUsers = async (req, res) => {
    try {
        const response = await userService.getAllUsers();
        return res.status(200).json({
            data: response,
            success: true,
            message: "Successfully fetched all users",
            err: {}
        });
    } catch (error) {
        console.log("Something went wrong in the controller layer");
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to fetch users",
            err: error.message
        });
    }
}

module.exports = {
    create,
    destroy,
    getAllUsers
}