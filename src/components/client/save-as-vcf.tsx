"use client";
import { UserData } from "@/constants";
import { PlusIcon } from "lucide-react";
import { Button } from "../ui/button";
import dayjs from "dayjs";
import VCard from "vcard-creator";
import { cn } from "components/craft";
import { cva } from "class-variance-authority";

export const SaveVcf = ({
  data,
  variant = "default",
  cta,
}: {
  data: any;
  variant?: "icon" | "default";
  cta?: string;
}) => {
  console.log({ data });
  if (!data) return;
  const buttonStyles = cva(
    "flex items-center", // common styles
    {
      variants: {
        variant: {
          default: " gap-2",
          icon: "absolute bottom-0 right-0 z-10 size-8 p-1 rounded-full",
        },
      },
      defaultVariants: {
        variant: "default",
      },
    }
  );

  const myVCard = new VCard();

  myVCard
    .addName(data.lastName, data.firstName)
    // .addName(data.lastName, data.firstName, additional, prefix, suffix)
    // Add work data
    .addCompany(data.organization)
    .addJobtitle(data.title)
    .addRole(data.role)
    .addEmail(data.email)
    .addPhoneNumber(data.workPhone, "PREF;WORK")
    // .addPhoneNumber(123456789, 'WORK')
    // .addAddress(null, null, 'street', 'worktown', null, 'workpostcode', 'Belgium')
    // .addSocial('https://twitter.com/desloovere_j', 'Twitter', 'desloovere_j')
    .addURL(data.website);

  //get as formatted string
  const vCardString = myVCard.toString();

  return (
    <Button
      className={cn(buttonStyles({ variant }))}
      variant={variant == "default" ? "secondary" : "default"}
      onClick={() => {
        const userAgent = window.navigator.userAgent;
        if (
          /(iPad|iPhone|iPod)/gi.test(userAgent) &&
          !/CriOS/.test(userAgent) &&
          !/FxiOS/.test(userAgent) &&
          !/OPiOS/.test(userAgent) &&
          !/mercury/.test(userAgent)
        ) {
          myVCard.setFormat("vcalendar");

          const file = new Blob([vCardString], {
            type: "text/vcard",
          });

          const a = document.createElement("a");
          a.href = URL.createObjectURL(file);
          a.download = "vcard.ics";
          a.click();
        } else {
          myVCard.setFormat("vcard");

          const file = new Blob([vCardString], {
            type: "text/vcard",
          });

          const a = document.createElement("a");
          a.href = URL.createObjectURL(file);
          a.download = "vcard.vcf";
          a.click();
        }
      }}
    >
      {variant == "icon" || !cta ? <PlusIcon className="size-6" /> : null}
      {variant == "default" && cta ? (
        <>
          <PlusIcon className="size-4" /> {cta}
        </>
      ) : null}
    </Button>
  );
};
