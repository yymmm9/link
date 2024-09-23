"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import { data } from '@/constants'
import { userData } from "@/constants";
import type { Metadata, ResolvingMetadata } from "next";
import dynamic from "next/dynamic";
import { ButtonLink } from "@/components/button-link";
import { PlusIcon } from "lucide-react";
import { SaveVcf } from "@/components/client/save-as-vcf";
import { TdesignLogoWechatStroke } from "@/components/icons/wechat-2";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

export const revalidate = 86400;

const CardLink = dynamic(() => import("@/components/card-link"), {
  ssr: false,
});
// const ButtonLink = dynamic(() => import("@/components/button-link"), {
//   ssr: false,
// });
// generateMetadata should handle errors properly
export async function generateMetadata({
  params: { locale, slug },
}: {
  params: { locale: string; slug: string };
}) {
  const data = userData[slug] || null; // Handle missing data

  if (!data) {
    // Return metadata or log errors if necessary
    return { title: "User Not Found" };
  }

  return {
    title: data?.firstName + " " + data?.lastName,
  };
}

export async function generateStaticParams() {
  // Make sure slugs are valid and returned correctly
  const slugs = Object.keys(userData); // Assuming userData is available

  if (!slugs || slugs.length === 0) {
    throw new Error("No valid slugs available for SSG");
  }

  return slugs.map((slug) => ({
    slug, // Return slug as a valid static param
  }));
}

function getInitials(firstName: string, lastName: string) {
  // Check if the name is Chinese
  const isChinese = /[\u4e00-\u9fa5]/.test(firstName + lastName);

  if (isChinese) {
    const fullName = lastName + firstName; // Combine last and first name
    if (fullName.length === 2) {
      return fullName; // For 2-character Chinese names, return full name
    } else {
      return lastName; // For 3 or more characters, return last name only
    }
  } else {
    // Handle non-Chinese names (assumed to be in English)
    const initials = (firstName[0] || "") + (lastName[0] || "");
    return initials.length > 3
      ? initials.slice(0, 3).toUpperCase()
      : initials.toUpperCase();
  }
}

export default function HomePage({
  params: { lang, slug },
}: {
  params: { lang: string; slug: string };
}) {
  const t = useTranslations(slug);
  console.log({ t });
  let data = userData[slug];
  console.log({ lang });
  if (!data) return;

  let fullname = data?.firstName + " " + data?.lastName;
  return (
    <main className="flex items-center flex-col mx-auto w-full justify-center pt-10 px-8 gap-2">
      <div
        // href=""
        // target="_blank"
        // rel="noopener noreferrer"
        className="rounded-full relative"
      >
        <SaveVcf data={data} variant="icon" />
        <Avatar className="size-28 shadow border">
          <AvatarImage alt={fullname} src={data.avatar} />
          <AvatarFallback className="font-monoo font-bold text-lg">
            {getInitials(data?.firstName, data?.lastName)}
          </AvatarFallback>
        </Avatar>
      </div>

      <section className="flex flex-col items-center justify-center my-4 gap-2">
        <div className="flex gap-4 justify-center items-center ">
          <h1 className="font-bold text-3xl dark:text-white text-black text-center">
            {fullname}
          </h1>
        </div>
        <h2 className="mx-auto max-w-lg px-4 text-sm font-monoo font-semibold dark:text-neutral-300 text-neutral-700 md:text-pretty text-center">
          {data.about}
        </h2>
      </section>

      {/* <section className="flex items-center gap-4 my-8">
        {data.contacts.map((contact) => (
          <ButtonLink key={contact.url} {...contact} />
        ))}
      </section> */}
      <div className="">
        <SaveVcf data={data} />
      </div>
      {data.socials.length > 0 && (
        <h3 className="font-semibold  text-xl dark:text-white text-black text-center">
          Highlight
        </h3>
      )}

      {data.socials.map((social) => (
        <CardLink key={social.url} {...social} />
      ))}
      <div className="flex flex-col gap-4 w-full max-w-lg mx-auto">
        {data.communities.length > 0 && (
          <h3 className="font-semibold mt-4 text-xl dark:text-white text-black text-center">
            Links
          </h3>
        )}
        <CardLink
          key={data.wechat}
          mode="copy"
          title={"Wechat: " + data.wechat}
          url={data.wechat}
          icon={<TdesignLogoWechatStroke />}
          className="!bg-green-600 p-2 rounded-full"
        />
        {data.communities.map((community) => (
          <CardLink key={community.url} {...community} />
        ))}
      </div>
    </main>
  );
}
