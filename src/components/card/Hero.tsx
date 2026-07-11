import Image from "next/image";
import { Phone, MessageSquare, Mail, Globe2, ShieldCheck } from "lucide-react";
import { cardProfile } from "@/lib/cardProfile";

export default function Hero() {
  const p = cardProfile;

  return (
    <section className="tokan-hero">
      <style>
        {`
          @keyframes fadeUp {
            from {
              opacity: 0;
              transform: translateY(18px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes logoIn {
            from {
              opacity: 0;
              transform: translateY(14px) scale(0.94);
              filter: blur(6px);
            }
            to {
              opacity: 1;
              transform: translateY(0) scale(1);
              filter: blur(0);
            }
          }

          .tokan-hero {
            position: relative;
            min-height: 100vh;
            width: 100%;
            overflow: hidden;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 14px;
            background: #1c1c1e;
            color: white;
          }

          .tokan-bg {
            object-fit: cover;
            object-position: 72% center;
            opacity: 1;
          }

          .tokan-overlay-1 {
            position: absolute;
            inset: 0;
            background: rgba(0, 0, 0, 0.03);
          }

          .tokan-overlay-2 {
            position: absolute;
            inset: 0;
            background:
              radial-gradient(circle at 50% 24%, rgba(184, 115, 51, 0.012), transparent 44%),
              linear-gradient(to bottom, rgba(0,0,0,0.01), rgba(28,28,30,0.02), rgba(0,0,0,0.10));
          }

          .tokan-card {
            position: relative;
            z-index: 10;
            width: min(80vw, 346px);
            overflow: hidden;
            border-radius: 38px;
            border: 1px solid rgba(255, 255, 255, 0.44);
            background: rgba(255, 255, 255, 0.025);
            box-shadow:
              0 42px 140px rgba(0, 0, 0, 0.32),
              inset 0 1px 0 rgba(255, 255, 255, 0.28),
              inset 0 -1px 0 rgba(255, 255, 255, 0.10);
            backdrop-filter: blur(4px) saturate(108%) brightness(1.04);
            -webkit-backdrop-filter: blur(4px) saturate(108%) brightness(1.04);
            padding: 24px 22px 22px;
            display: flex;
            flex-direction: column;
            align-items: center;
          }

          .tokan-card::before {
            content: "";
            position: absolute;
            inset: 0;
            background-image: url("/images/card-bg-new.jpg");
            background-size: cover;
            background-position: 86% center;
            opacity: 0.40;
            filter: blur(9px) saturate(108%) brightness(1.08);
            transform: scale(1.08);
            z-index: 0;
            pointer-events: none;
          }

          .tokan-card::after {
            content: "";
            position: absolute;
            inset: 0;
            background:
              linear-gradient(
                180deg,
                rgba(18, 18, 18, 0.08) 0%,
                rgba(18, 18, 18, 0.10) 45%,
                rgba(10, 10, 10, 0.15) 100%
              );
            z-index: 0;
            pointer-events: none;
          }

          .tokan-card > * {
            position: relative;
            z-index: 1;
          }

          .logo-in {
            animation: logoIn 900ms ease-out both;
          }

          .reveal-1 {
            animation: fadeUp 700ms ease-out 180ms both;
          }

          .reveal-2 {
            animation: fadeUp 700ms ease-out 340ms both;
          }

          .reveal-3 {
            animation: fadeUp 700ms ease-out 520ms both;
          }

          .reveal-4 {
            animation: fadeUp 700ms ease-out 700ms both;
          }

          .reveal-5 {
            animation: fadeUp 700ms ease-out 860ms both;
          }

          .soft-shadow {
            text-shadow: 0 3px 18px rgba(0, 0, 0, 0.95);
          }

          .tokan-logo-wrap {
            width: 112px;
            height: 112px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 12px;
          }

          .tokan-logo-img {
            width: 112px;
            height: 112px;
            object-fit: contain;
            filter: drop-shadow(0 32px 90px rgba(0, 0, 0, 0.95));
          }

          .tokan-brand {
            margin-bottom: 12px;
            font-size: 18px;
            line-height: 1;
            letter-spacing: 0.16em;
            text-transform: uppercase;
            color: #d28a3c;
            font-weight: 500;
          }

          .tokan-name {
            font-size: 27px;
            line-height: 1.05;
            font-weight: 700;
            letter-spacing: -0.02em;
            color: #ffffff;
          }

          .tokan-title {
            margin-top: 17px;
            font-size: 18px;
            line-height: 1.25;
            font-weight: 300;
            color: rgba(255, 255, 255, 0.94);
          }

          .tokan-service {
            margin-top: 12px;
            font-size: 17px;
            line-height: 1.25;
            font-weight: 500;
            color: #d28a3c;
          }

          .tokan-tagline {
            margin-top: 34px;
            text-align: center;
            font-size: 23px;
            line-height: 1.18;
            font-weight: 300;
            color: #ffffff;
          }

          .tokan-tagline strong {
            font-weight: 750;
          }

          .tokan-save {
            margin-top: 36px;
            width: 100%;
            height: 62px;
            border-radius: 22px;
            border: 1px solid rgba(245, 188, 118, 0.58);
            background: linear-gradient(180deg, #dc8d3a 0%, #c77a2e 100%);
            color: #ffffff;
            font-size: 20px;
            line-height: 1;
            font-weight: 700;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            text-decoration: none;
            box-shadow:
              0 22px 62px rgba(199, 122, 46, 0.34),
              inset 0 1px 0 rgba(255, 255, 255, 0.18);
            transition: transform 250ms ease, background 250ms ease, box-shadow 250ms ease;
          }

          .tokan-save:hover {
            transform: scale(1.02);
            background: linear-gradient(180deg, #e39846 0%, #ce8034 100%);
            box-shadow:
              0 26px 80px rgba(199, 122, 46, 0.42),
              inset 0 1px 0 rgba(255, 255, 255, 0.18);
          }

          .tokan-save:active {
            transform: scale(0.96);
          }

          .tokan-actions {
            margin-top: 20px;
            width: 100%;
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 15px;
          }

          .tokan-action {
            height: 82px;
            border-radius: 23px;
            border: 1px solid rgba(255, 255, 255, 0.32);
            background: rgba(10, 10, 10, 0.09);
            color: #ffffff;
            text-decoration: none;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            box-shadow:
              0 18px 52px rgba(0, 0, 0, 0.16),
              inset 0 1px 0 rgba(255, 255, 255, 0.12);
            backdrop-filter: blur(5px) saturate(110%) brightness(1.04);
            -webkit-backdrop-filter: blur(5px) saturate(110%) brightness(1.04);
            transition: border-color 250ms ease, background 250ms ease, transform 250ms ease;
          }

          .tokan-action:hover {
            border-color: rgba(210, 138, 60, 0.85);
            background: rgba(184, 115, 51, 0.14);
            transform: translateY(-1px);
          }

          .tokan-action svg {
            width: 28px;
            height: 28px;
            stroke-width: 1.9;
            filter: drop-shadow(0 3px 12px rgba(0, 0, 0, 0.9));
          }

          .tokan-action span {
            margin-top: 9px;
            font-size: 15px;
            line-height: 1;
            font-weight: 500;
            filter: drop-shadow(0 3px 12px rgba(0, 0, 0, 0.92));
          }

          .tokan-serving {
            margin-top: 18px;
            min-height: 48px;
            border-radius: 22px;
            border: 1px solid rgba(255, 255, 255, 0.32);
            background: rgba(10, 10, 10, 0.09);
            color: #ffffff;
            padding: 0 18px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
            font-size: 13px;
            line-height: 1;
            font-weight: 500;
            box-shadow:
              0 16px 46px rgba(0, 0, 0, 0.16),
              inset 0 1px 0 rgba(255, 255, 255, 0.12);
            backdrop-filter: blur(5px) saturate(110%) brightness(1.04);
            -webkit-backdrop-filter: blur(5px) saturate(110%) brightness(1.04);
            white-space: nowrap;
          }

          .tokan-serving svg {
            width: 17px;
            height: 17px;
            stroke-width: 1.9;
            flex-shrink: 0;
            filter: drop-shadow(0 3px 12px rgba(0, 0, 0, 0.9));
          }

          .tokan-serving span {
            filter: drop-shadow(0 3px 12px rgba(0, 0, 0, 0.92));
          }

          @media (max-width: 390px) {
            .tokan-card {
              width: min(86vw, 356px);
              padding: 22px 20px 20px;
            }

            .tokan-card::before {
              background-position: 88% center;
              opacity: 0.42;
              filter: blur(8px) saturate(108%) brightness(1.08);
            }

            .tokan-logo-wrap {
              width: 104px;
              height: 104px;
              margin-bottom: 10px;
            }

            .tokan-logo-img {
              width: 104px;
              height: 104px;
            }

            .tokan-brand {
              font-size: 16px;
              margin-bottom: 10px;
            }

            .tokan-name {
              font-size: 23px;
            }

            .tokan-title {
              margin-top: 15px;
              font-size: 16px;
            }

            .tokan-service {
              margin-top: 11px;
              font-size: 15px;
            }

            .tokan-tagline {
              margin-top: 30px;
              font-size: 20px;
            }

            .tokan-save {
              margin-top: 34px;
              height: 58px;
              font-size: 18px;
            }

            .tokan-action {
              height: 78px;
            }

            .tokan-action svg {
              width: 26px;
              height: 26px;
            }

            .tokan-action span {
              font-size: 15px;
            }

            .tokan-serving {
              min-height: 46px;
              font-size: 12px;
              padding: 0 14px;
              gap: 8px;
            }

            .tokan-serving svg {
              width: 16px;
              height: 16px;
            }
          }

          @media (min-width: 768px) {
            .tokan-bg {
              transform: scale(1.04);
              opacity: 0.96;
              filter: blur(0.2px);
              object-position: 72% center;
            }

            .tokan-overlay-1 {
              background: rgba(0, 0, 0, 0.06);
            }

            .tokan-overlay-2 {
              background:
                radial-gradient(circle at 50% 24%, rgba(184, 115, 51, 0.012), transparent 44%),
                linear-gradient(to bottom, rgba(0,0,0,0.02), rgba(28,28,30,0.04), rgba(0,0,0,0.14));
            }

            .tokan-card {
              width: 430px;
              padding: 30px 28px 28px;
            }

            .tokan-logo-wrap {
              width: 118px;
              height: 118px;
              margin-bottom: 12px;
            }

            .tokan-logo-img {
              width: 118px;
              height: 118px;
            }

            .tokan-name {
              font-size: 30px;
            }

            .tokan-title {
              font-size: 19px;
            }

            .tokan-service {
              font-size: 18px;
            }

            .tokan-tagline {
              font-size: 24px;
              margin-top: 36px;
            }

            .tokan-save {
              height: 66px;
              font-size: 22px;
            }

            .tokan-action {
              height: 92px;
            }

            .tokan-serving {
              min-height: 50px;
              font-size: 14px;
              padding: 0 20px;
            }
          }
        `}
      </style>

      <Image
        src="/images/card-bg-new.jpg"
        alt=""
        fill
        priority
        className="tokan-bg"
      />

      <div className="tokan-overlay-1" />
      <div className="tokan-overlay-2" />

      <div className="tokan-card">
        <div className="tokan-logo-wrap logo-in">
          <Image
            src="/logos/tokan-symbol-render.png"
            alt={`${p.brand} symbol`}
            width={112}
            height={112}
            priority
            className="tokan-logo-img"
          />
        </div>

        <div className="reveal-1 text-center">
          <p className="tokan-brand soft-shadow">{p.brand}</p>

          <h1 className="tokan-name soft-shadow">{p.name}</h1>

          <p className="tokan-title soft-shadow">{p.title}</p>

          <p className="tokan-service soft-shadow">{p.serviceLine}</p>
        </div>

        <div className="tokan-tagline reveal-2 soft-shadow">
          {p.taglineLine1}
          <br />
          <strong>{p.taglineLine2}</strong>
        </div>

        <a href="/api/vcard" className="tokan-save reveal-3">
          Save Contact
        </a>

        <div className="tokan-actions reveal-4">
          <a
            href={`tel:${p.phoneE164}`}
            aria-label={`Call ${p.name}`}
            className="tokan-action"
          >
            <Phone />
            <span>Call</span>
          </a>

          <a
            href={`sms:${p.phoneE164}`}
            aria-label={`Text ${p.name}`}
            className="tokan-action"
          >
            <MessageSquare />
            <span>Text</span>
          </a>

          <a
            href={`mailto:${p.email}`}
            aria-label={`Email ${p.brand}`}
            className="tokan-action"
          >
            <Mail />
            <span>Email</span>
          </a>

          <a
            href={p.website}
            aria-label={`Visit ${p.brand} website`}
            className="tokan-action"
          >
            <Globe2 />
            <span>Website</span>
          </a>
        </div>

        <div className="tokan-serving reveal-5">
          <ShieldCheck />
          <span>{p.servingLine}</span>
        </div>
      </div>
    </section>
  );
}