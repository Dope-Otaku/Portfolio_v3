import conf from "../creds/conf";
import { Client, Account, ID } from "appwrite"


export class AuthClient {
   client = new Client()
   account;

   constructor(){
      this.client.setProject(conf.appWriteProjectID);
      this.account = new Account(this.client)
   }

   async getCurrentUserInfo(){
      try {
            const currentUser = await this.account.get();
            console.log("Current User info success:", currentUser);
            return currentUser;
        } catch (error) {
            console.log("getCurrentUserInfo failed:", error);
            return null;
        }
   }

   async login({email, password}){
      try {
         //check if we are already logged in 
         const currentUser = await this.getCurrentUserInfo()
         if(currentUser){
            console.log("user already logged in :", currentUser)
            return currentUser
         }
         //if no one is logged in then create a new session and login the user
         const createSession = this.account.createEmailPasswordSession(email, password);
         if(createSession){
            console.log("new sessionedUser logged in successfully", createSession)
            return createSession
         }else{
            console.log("user unable to create new sessionID")
         }
      } catch (error) {
         console.log("login error: ",error)
         console.error(error)
      }      
   }
}