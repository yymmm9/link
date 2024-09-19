// @ts-nocheck
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import { data } from '@/constants'
import { userData } from "@/constants";
import type { Metadata, ResolvingMetadata } from "next";
import dynamic from "next/dynamic";
import { ButtonLink } from "@/components/button-link";
import { PlusIcon } from "lucide-react";
import { SaveVcf } from "@/components/client/save-as-vcf";
import { TdesignLogoWechatStroke } from "@/components/icons/wechat-2";

export const revalidate = 86400;

const CardLink = dynamic(() => import("@/components/card-link"), {
  ssr: false,
});
// const ButtonLink = dynamic(() => import("@/components/button-link"), {
//   ssr: false,
// });
// generateMetadata should handle errors properly

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const data = userData[params.slug] || null; // Handle missing data

  if (!data) {
    // Return metadata or log errors if necessary
    return { title: "User Not Found" };
  }

  return {
    title: data.name,
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

export default function HomePage({ params }: any) {
  let data = userData[params.slug];
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
            {data.initials}
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
      <div className="flex flex-col gap-4 w-full">
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
