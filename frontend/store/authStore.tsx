import axios from "axios";
import { create, StateCreator } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface userSchema {
  fname: string;
  lname: string;
  email:string ;
  phone_number:number ;
  university:string ;
  start_date:string ;
  end_date: string;
  department:number ;
  mentor_id: number;
}
interface formLogin {
  email: string;
  phone_number:number ;
  password: string;
}

interface AuthStore {
  user: userSchema | null;
  actionLogin: (form: formLogin) => void;
  actionLogout: () => void;
}

const authStore: StateCreator<AuthStore> = (set) => ({
  user: null,
  actionLogin: async (form: formLogin) => {
    const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}login`, form, {
      withCredentials: true,
    });
    set({
      user: res.data.user,
    });

    return res;
  },
  actionLogout: async () => {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}logout`);
    set({
      user: null,
    });
    useAuthStore.persist.clearStorage();
    return res;
  },
});

const usePersist = {
  name: "auth",
  getStorage: () => createJSONStorage(() => localStorage),
};

const useAuthStore = create(persist(authStore, usePersist));

export default useAuthStore;
