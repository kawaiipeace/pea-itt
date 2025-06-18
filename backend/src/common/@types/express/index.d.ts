// src/common/@types/express/index.d.ts
import { DecodedToken } from "../../../interface/user.interface";

declare global {
  namespace Express {
    interface Request {
      user?: DecodedToken;
    }
  }
}
