import axios from "axios";
import { create, StateCreator } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

// ✅ รวม user profile และ role_id
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
  student_profile?: any;
}

interface formLogin {
  email?: string;
  phone_number?: string;
  password: string;
}

interface AuthStore {
  user: userSchema | null;
  actionLogin: (form: formLogin) => Promise<any>;
  actionLogout: () => Promise<any>;
  actionSetUser: (user: userSchema) => void;
}

const authStore: StateCreator<AuthStore> = (set) => ({
  user: null,

  // ✅ เซ็ต user จาก /me
  actionSetUser: (user) => {
    set({ user });
  },

  actionLogin: async (form: formLogin) => {
    console.log("📌 login form:", form);

    const loginPayload = {
      password: form.password,
      ...(form.email ? { email: form.email } : { phone_number: form.phone_number }),
    };

    const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}login`, loginPayload, {
      withCredentials: true,
    });

    return res; // 👈 ไม่เซ็ต user ตรงนี้ ให้ไปดึงจาก /me
  },

  actionLogout: async () => {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}logout`, {
      withCredentials: true,
    });

    set({ user: null });

    if (typeof window !== "undefined") {
      localStorage.removeItem("auth");
    }

    return res;
  },
});

const usePersist = {
  name: "auth",
  getStorage: () => createJSONStorage(() => localStorage),
};

const useAuthStore = create(persist(authStore, usePersist));

export default useAuthStore;
