import type{ User } from "firebase/auth";
import { 
    signInWithEmailAndPassword, 
    createUserWithEmailAndPassword, 
    updateProfile,
    getAuth,
    updatePassword,
 } from "firebase/auth";
import { 
    collection,  
    query, 
    getDocs,
    doc,
    where,
    updateDoc,
    Firestore, 
 } from 'firebase/firestore'
import { db, auth } from '@/libs/firebase' 


interface IUserStoreState {
    user: User | null
}


export const useUserStore = defineStore('user', {

    state: (): IUserStoreState => ({
        user: null,
    }),

    actions: {
      
        login(email: string, password: string ): void {
            signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    this.user = userCredential.user
                    
                })
                .catch((error) => {
                    const errorCode = error.code;
                    // const errorMessage = error.message;
                });
        },

        singOut() {
            auth.signOut()
            this.user = null 
        }
    },


})

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot));
}