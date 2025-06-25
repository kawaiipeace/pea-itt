import { Request } from "express";
import { Socket } from "net";

function getClientIp(req: Request): string {
  const forwarded = req.headers["x-forwarded-for"]?.toString();

  const rawIp =
    typeof forwarded === "string"
      ? forwarded.split(",")[0].trim()
      : (req.socket as Socket).remoteAddress || req.ip;

  // ป้องกันกรณีไม่มี IP
  if (!rawIp) return "";

  // ตัด ::ffff: ถ้าเป็น IPv6-mapped IPv4 เช่น "::ffff:192.168.1.20"
  if (rawIp.startsWith("::ffff:")) {
    return rawIp.substring(7);
  }

  return rawIp;
}

export default getClientIp;
