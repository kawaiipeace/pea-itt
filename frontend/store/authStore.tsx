import axios from "axios";
import { create, StateCreator } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface stuData {
  id: string
  mentor_id: number
  university: string
  start_date: string
  end_date: string
}

interface mentData {
  id: number
}

interface userSchema {
  id: number;
  fname: string;
  lname: string;
  email: string;
  phone_number: string;
  university: string;
  start_date: string;
  end_date: string;
  department_id: number;
  mentor_id: number;
  role_id: number;
  student_profile?: stuData;
  mentor_profile?: mentData
}

interface formLogin {
  email?: string;
  phone_number?: string;
  password_hash: string;
}

interface AuthStore {
  user: userSchema | null;
  actionLogin: (form: formLogin) => Promise<any>;
  actionLogout: () => Promise<any>;
  actionSetUser: (user: userSchema) => void;
  refreshUser: () => Promise<void>;
}

const authStore: StateCreator<AuthStore> = (set) => ({
  user: null,

  actionSetUser: (user) => {
    set({ user });
  },

  actionLogin: async (form: formLogin) => {

    const loginPayload = {
      password_hash: form.password_hash,
      ...(form.email ? { email: form.email } : { phone_number: form.phone_number }),
    };
    const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}login`, loginPayload, {
      withCredentials: true,
    });

    return res;
  },

  actionLogout: async () => {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}logout`, {
      withCredentials: true,
    });

    set({ user: null });
    localStorage.removeItem("auth");

    return res;
  },
  refreshUser: async () => {
    try {
      const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}me`, {
        withCredentials: true,
      });
      const myinfo = res.data.data;
      set({ user: myinfo });
    } catch (error) {
      console.error("Failed to refresh user:", error);
      set({ user: null });
    }
  },
});

const usePersist = {
  name: "auth",
  getStorage: () => createJSONStorage(() => localStorage),
};

const useAuthStore = create(persist(authStore, usePersist));

export default useAuthStore;
