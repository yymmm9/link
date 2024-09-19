"use client";
import { UserData } from "@/constants";
import { PlusIcon } from "lucide-react";
import { Button } from "../ui/button";
import dayjs from "dayjs";

export const SaveVcf = ({ data }: UserData) => {
  if (!data) return;
  var vCardsJS = require("vcards-js");

  //create a new vCard
  var vCard = vCardsJS();

  //set properties
  vCard.firstName = data.firstName;
  // vCard.middleName = "J";
  vCard.lastName = data.lastName;
  vCard.organization = "ACME Corporation";
  // vCard.photo.attachFromUrl(
  //   data.avatar,
  //   "JPEG"
  // );
  vCard.workPhone = data.workPhone;

  let birthday = dayjs(data.birthday);
  vCard.birthday = birthday.isValid() && birthday.toDate();
  vCard.title = data.title;
  vCard.url = data.website;
  // vCard.note = data.;

  //get as formatted string
  console.log(vCard.getFormattedString());

  return (
    <Button
      onClick={() => vCard.saveToFile("./" + data.lastName + ".vcf")}
      className="flex items-center p-1 absolute top-0 right-0 rounded-full z-10 size-7"
    >
      <PlusIcon className="size-6" />
    </Button>
  );
};
