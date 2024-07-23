import conf from "../conf/config";
import { Client, Account,ID } from "appwrite";

export class AuthService {
     client = new Client();
     account;



    constructor() {
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId);
        this.account = new Account(this.client);
    }            


    async createAccount({email,paasword,name}) {
       try {
         const userAccount = await this.account.create(ID.unique(),email,paasword,name);
         if (userAccount) {
            return this .login(email,paasword)
         }
         else {
            return userAccount
         }
       } catch (error) {
         throw error
       }
    }

    async login ({email,paasword}) {
           try {
            return await this.account.createEmailPasswordSession(email,paasword);
           } catch (error) {
            throw error
           }
    }

    async getCurrentUser() {
        try {
            await this.account.get();
        } catch (error) {
            console.log("Appwrite Service :: getCurrentUser :: error",error);
        }
        return null;
    }

    async logout() {
        try {
            await this.account.deleteSessions();
        } catch (error) {
            console.log("Appwrite Service :: getCurrentUser :: error",error);
        }
    }
}

const authService  = new AuthService();

export default authService