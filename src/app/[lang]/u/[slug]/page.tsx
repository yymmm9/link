import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import { data } from '@/constants'
import { Links, userData } from "@/constants";
import dynamic from "next/dynamic";
import { SaveVcf } from "@/components/client/save-as-vcf";
import { TdesignLogoWechatStroke } from "@/components/icons/wechat-2";
import { getDictionary } from "../../dictionaries";
import { GlobeIcon, MailIcon, PhoneIcon } from "lucide-react";

export const revalidate = 86400;

const CardLink = dynamic(() => import("@/components/card-link"), {
  ssr: false,
});
// const ButtonLink = dynamic(() => import("@/components/button-link"), {
//   ssr: false,
// });
// generateMetadata should handle errors properly
export async function generateMetadata({
  params: { lang, slug },
}: {
  params: { lang: string; slug: string };
}) {
  // const data = userData[slug] || null; // Handle missing data
  const t = await getDictionary(lang);
  const data = t?.[slug];

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

function getInitials(firstName: string = "", lastName: string = "") {
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

export default async function HomePage({
  params: { lang, slug },
}: {
  params: { lang: string; slug: string };
}) {
  const t = await getDictionary(lang);
  const data = t?.[slug];
  const info = userData[slug];

  console.log({ lang, slug });
  if (!data) return;

  let fullname =
    lang == "zh"
      ? data?.lastName + data?.firstName
      : data?.firstName + " " + data?.lastName;
  return (
    <main className="flex items-center flex-col mx-auto w-full justify-center pt-10 px-8 gap-2">
      <div
        // href=""
        // target="_blank"
        // rel="noopener noreferrer"
        className="rounded-full relative"
      >
        <SaveVcf data={data} variant="icon" cta={t.saveVcf} />
        <Avatar className="size-24 shadow border">
          <AvatarImage alt={fullname} src={info?.avatar} />
          <AvatarFallback className="font-monoo font-bold text-lg">
            {getInitials(data?.firstName, data?.lastName)}
          </AvatarFallback>
        </Avatar>
      </div>

      <section className="flex flex-col items-center justify-center gap-2">
        <div className="flex gap-4 justify-center items-center ">
          <h1 className="font-bold text-3xl dark:text-white text-black text-center">
            {fullname}
          </h1>
        </div>
        <div className="flex gap-1 text-sm mx-auto font-monoo font-semibold dark:text-neutral-400 text-neutral-400 md:text-pretty text-center">
          {data.title && (
            <h2 className="">
              {/* {data.role} */}
              {data.title}
            </h2>
          )}
          {data.title && data.organization && "⋅"}

          {data.organization && (
            <h2 className="">
              {/* <h2 className="mx-auto text-sm font-monoo font-semibold dark:text-neutral-300 text-neutral-700 md:text-pretty text-center"> */}
              {data.organization}
            </h2>
          )}
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
        <SaveVcf data={data} cta={t.saveVcf} />
      </div>
      {info && (
        <>
          {info.socials?.length > 0 && (
            <h3 className="font-semibold text-xl dark:text-white text-black text-center">
              Highlight
            </h3>
          )}
          {info.socials?.map((social: Links) => (
            <CardLink key={social.url} {...social} />
          ))}
          <div className="flex flex-col gap-4 w-full max-w-lg mx-auto">
            {info.communities?.length > 0 && (
              <h3 className="font-semibold mt-4 text-xl dark:text-white text-black text-center">
                Links
              </h3>
            )}
            <CardLink
              key={info.wechat}
              mode="copy"
              title={t.wechat}
              // title={t.wechat + ": " + info.wechat}
              url={info.wechat}
              icon={<TdesignLogoWechatStroke />}
              className="!bg-green-600 p-2 rounded-full dark:!text-white"
            />

            <CardLink title={t.email} url={info.email} icon={<MailIcon />} />
            <CardLink
              title={t.phone}
              url={info.workPhone}
              icon={<PhoneIcon />}
            />
            <CardLink
              title={t.website}
              url={info.website}
              icon={<GlobeIcon />}
            />
            {/* {info.communities?.map((community: Links) => (
              <CardLink key={community.url} {...community} />
            ))} */}
          </div>
        </>
      )}
    </main>
  );
}
