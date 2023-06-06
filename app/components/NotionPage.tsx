import * as React from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import { PageHead } from "./PageHead";
import { Header } from "./Header";
import { GitHubShareButton } from "./GitHubShareButton";

const NotionPage = ({ site, recordMap, error, pageId }: any) => {
  const router = useRouter();

  return (
    <>
      <PageHead
        pageId={pageId}
        site={site}
        title={"宋斯凯的博客"}
        description={"宋斯凯"}
        image={null}
        url={"宋斯凯的博客"}
      />
      <Header />

      <GitHubShareButton />
    </>
  );
};
export default NotionPage;
