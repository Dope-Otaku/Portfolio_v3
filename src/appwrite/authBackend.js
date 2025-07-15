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

   async forgotPswd(email, recoveryEndPoint){
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
   //http://localhost:5173/api/fpswd?userId=6875f01a0017f2a18ea6&secret=5138be7a56b2e2c51d4094b5db3afeddd2f4884bb3bca65de10f2a9b730f554fa498af6ce7283d0b6e24604d82f1405da1d4599cbd22cfc690f64cd56e5bdc61becd0f5d8edceb82e70ae1e9ba91785f3d9402c5f820a479f417d89ec1b43590451ca882bfcc0ee503f6e56d792b01d42ebb97052ee94be5fd31bab4f87a0774&expire=2025-07-15+12%3A20%3A15.690

   async forgotPswdRecovery({userId, secret, password}){
      try {
         const recoverySuccess = await this.account.updateRecovery(userId, secret, password)
         if(recoverySuccess){
            console.log('password changed succesfully')
         }
      } catch (error) {
         console.log(error)
         throw error
      }
   }


}


const authService = new AuthClient();
export default authService