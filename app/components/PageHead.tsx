import * as React from "react";
import Head from "next/head";
import config from "next/config";

export const PageHead = ({
  site,
  title,
  description,
  pageId,
  image,
  url,
}: any) => {
  title = title;
  description = description ?? site?.description;

  const socialImageUrl = image;

  return (
    <Head>
      <meta charSet="utf-8" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />

      <meta
        name="theme-color"
        media="(prefers-color-scheme: light)"
        content="#fefffe"
        key="theme-color-light"
      />
      <meta
        name="theme-color"
        media="(prefers-color-scheme: dark)"
        content="#2d3439"
        key="theme-color-dark"
      />

      <meta name="robots" content="index,follow" />
      <meta property="og:type" content="website" />
      {/*description针对google搜索优化的，人家可以看到描述  */}
      {description && (
        <>
          <meta name="description" content={description} />
          <meta property="og:description" content={description} />
          <meta name="twitter:description" content={description} />
        </>
      )}
      <title>{title}</title>
    </Head>
  );
};
