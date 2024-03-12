import { userDao } from "../config/dbFactory.js";

export class UserService {

    static async saveUser (user) {
        return await userDao.saveUser(user)
    }

    static async getUsers () {
        return await userDao.getUsers();
    }

    static async getUserByEmail (userEmail) {
        return await userDao.getUserByEmail(userEmail)
    }

    static async getUserById (userId) {
        return await userDao.getUserById(userId);
    }

    static async deleteUser (userId) {
        return await userDao.deleteUser(userId)
    }

    static async updateUser (userId, newData) {
        return await userDao.updateUser(userId, newData);
    }
}