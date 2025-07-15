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
         //create a session
         const newSession = await this.account.createEmailPasswordSession(email, password);
         console.log("new session created", newSession)

         //check the session and login our user
         const currentUser = await this.getCurrentUserInfo();
         if(!currentUser){
            console.log("user failed to login")
         }
         else{
            console.log("user logged in successfully")
            return currentUser
         }
      } catch (error) {
         console.log("login error in backend", error)
         throw error
      }
   }

   async logout(){
      try {
         //directly logout
         this.account.deleteSessions()
         console.log("user logged out!")
         
      } catch (error) {
         console.log("logout error"), error
         throw error
      }
   }

   async forgotPswd({email, recoveryEndPoint}){
      try {
         const recoveryInitiated = await this.account.createRecovery(email, recoveryEndPoint)
         if(recoveryInitiated){
            console.log(`recovery email sent to user ${email}`)
         }
         else{
            console.log(`recovery failed for user: ${email}`)
         }
      } catch (error) {
         console.log(error)
         throw error
      }
   }
}


const authService = new AuthClient();
export default authService