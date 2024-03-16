import User from "../../models/userModel.js";
import Favorites from "../../models/favoriteModel.js"
class UserManger {
    constructor() {
        this.modelUser = User;
        this.modelFavorites = Favorites;
    }

    async saveUser (user) {
        try {
            const userCreated =await this.modelUser.create(user);   
            const newFavorites =await this.modelFavorites.create({user: userCreated.id , movies: []});

            userCreated.favorites = newFavorites.id;
            await userCreated.save();
            return userCreated;

            console.log(userCreated)
        } catch (error) {
            throw error;
        }
    }


    async getUserByEmail(userEmail) {
        try {
            const user = await this.modelUser.findOne({email: userEmail}).lean();
            if(user) {
                return user;
            } else {
                return null;
            };

        } catch (error) {
            throw error
        }
    }

    async getUserById(userId){
        try {
            const user = await this.modelUser.findById(userId).lean();
            return user;
        } catch (error) {
            throw error
        }
    }

    async getUsers() {
        try {
            const users = await this.modelUser.find({}).lean();
            return users;
        } catch (error) {
            throw error
        }
    }


    async deleteUser (userId) {
        try {
            return await this.modelUser.findByIdAndDelete(userId);
        } catch (error) {
            throw error
        }
    }


    async updateUser(idUser, newData) {
        try {
            const newUserData = await this.modelUser.updateOne({ _id: idUser }, newData, { new: true });
            return newUserData;
        } catch (error) {
            throw error;
        }
    }

}


export default UserManger;

