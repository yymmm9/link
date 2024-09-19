"use client";
import { UserData } from "@/constants";
import { PlusIcon } from "lucide-react";
import { Button } from "../ui/button";
import dayjs from "dayjs";
import VCard from "vcard-creator";

export const SaveVcf = ({ data }: UserData) => {
  if (!data) return;

  const myVCard = new VCard();

  myVCard
    // Add personal data
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
      className="flex items-center p-1 absolute top-0 right-0 rounded-full z-10 size-7"
    >
      <PlusIcon className="size-6" />
    </Button>
  );
};
