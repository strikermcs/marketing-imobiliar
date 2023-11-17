import type{ User } from "firebase/auth";
import { 
    signInWithEmailAndPassword, 
    getAuth,
    updatePassword,
 } from "firebase/auth";

import { auth } from '@/libs/firebase' 


interface IUserStoreState {
    user: User | null
}


export const useUserStore = defineStore('user', {

    state: (): IUserStoreState => ({
        user: null,
    }),

    actions: {
      
        login(email: string, password: string ): void {
            const router = useRouter()
            signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    this.user = userCredential.user
                    router.push('/admin')
                })
                .catch((error) => {
                    const errorCode = error.code;
                    // const errorMessage = error.message;
                });
        },

        async updateUser(password: string) {
            const notify = useNotificationStore()
           
           const auth = getAuth()
           console.log(password, auth.currentUser)
            updatePassword(auth.currentUser!, password).then(() => {
                notify.SetNofication('Succes', 'Пользователь успешно обновлен', 'success')
            }).catch((error) => {
                notify.SetNofication('Error', `Ошибка обновления пользователя. Error: ${error}`, 'error')
            })
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