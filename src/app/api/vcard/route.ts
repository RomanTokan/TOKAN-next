import { NextResponse } from "next/server";
import { cardProfile } from "@/lib/cardProfile";

function escapeVCardValue(value: string) {
  return value
    .replace(/\\/g, "\\\\")
    .replace(/\n/g, "\\n")
    .replace(/,/g, "\\,")
    .replace(/;/g, "\\;");
}

export function GET() {
  const p = cardProfile;

  const vcard = [
    "BEGIN:VCARD",
    "VERSION:3.0",
    `N:${escapeVCardValue(p.lastName)};${escapeVCardValue(p.firstName)};;;`,
    `FN:${escapeVCardValue(p.name)}`,
    `ORG:${escapeVCardValue(p.company)}`,
    `TITLE:${escapeVCardValue(p.title)}`,
    `EMAIL;TYPE=INTERNET,WORK:${escapeVCardValue(p.email)}`,
    `TEL;TYPE=WORK,VOICE:${escapeVCardValue(p.phoneE164)}`,
    `URL;TYPE=WORK:${escapeVCardValue(p.website)}`,
    `ADR;TYPE=WORK:;;${escapeVCardValue(p.city)};${escapeVCardValue(
      p.state
    )};;;${escapeVCardValue(p.country)}`,
    `NOTE:${escapeVCardValue(p.note)}`,
    "END:VCARD",
  ].join("\r\n");

  return new NextResponse(vcard, {
    status: 200,
    headers: {
      "Content-Type": "text/vcard; charset=utf-8",
      "Content-Disposition": `attachment; filename="${p.vcardFileName}"`,
    },
  });
}