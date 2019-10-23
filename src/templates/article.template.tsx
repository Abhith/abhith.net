import Layout from "@components/Layout";
import MDXRenderer from "@components/MDX";
import SEO from "@components/seo/SEO";
import TopicsBar from "@components/TopicsBar";
import { OutboundLink } from "gatsby-plugin-google-analytics";

import { DiscussionEmbed } from "disqus-react";
import React from "react";

import { IArticle } from "@types";
import { FaCoffee } from "react-icons/fa";

import ArticleHero from "../sections/article/Article.Hero";
import RelatedArticles from "../sections/article/Article.RelatedArticles";
import RelatedStories from "../sections/article/Article.RelatedStories";
import RelatedTools from "../sections/article/Article.RelatedTools";
import RelatedVideos from "../sections/article/Article.RelatedVideos";
import ArticleShare from "../sections/article/Article.Share";

export default ({ pageContext, location }) => {
  // console.log(pageContext, location);

  const {
    article,
    relatedArticles,
    relatedStories,
    relatedVideos,
    relatedTools
  } = pageContext;
  // const results = useStaticQuery(siteQuery);
  // console.log(results);
  const githubURL = `https://github.com/Abhith/abhith.net/blob/master/content${article.slug.substring(
    0,
    article.slug.length - 1
  )}.mdx`;

  const disqusConfig = {
    shortname: `abhith`,
    config: { identifier: article.commentId, title: article.title }
  };

  return (
    <Layout>
      <div className="blog-post-wrapper">
        <SEO
          title={article.title}
          description={article.excerpt}
          image={article.hero.full.src}
          isBlogPost={true}
          slug={article.slug}
          dateModified={article.dateModifiedSeoFormat}
          datePublished={article.datePublishedSeoFormat}
        />
        <ArticleHero article={article} />
        <section className="section">
          <div className="container is-fluid">
            <div className="columns is-centered">
              <div className="column is-2 pr-4 mb-4">
                <ArticleShare article={article} location={location} />
              </div>
              <div className="column is-8">
                <MDXRenderer content={article.body}>
                  <TopicsBar topics={article.tags} />
                  <div id="typo" className="bd-typo">
                    <p className="has-text-grey">
                      This page is{" "}
                      <strong className="has-text-grey">open source</strong>.
                      Noticed a typo? Or something unclear?
                      <br />
                      <OutboundLink
                        href={githubURL}
                        target="_blank"
                        className="has-text-grey"
                      >
                        Improve this page on GitHub
                      </OutboundLink>
                    </p>
                  </div>
                  <div className="container mt-5">
                    <div className="media">
                      <figure className="media-left">
                        <p className="image is-96x96">
                          <img
                            className="is-rounded"
                            src={`https://www.abhith.net/img/abhith-avatar.jpg`}
                            alt={`Abhith Rajan`}
                          />
                        </p>
                      </figure>
                      <div className="media-content">
                        <div className="content">
                          <p>
                            <strong className="title is-4">
                              Written by {`Abhith Rajan`}
                            </strong>{" "}
                            <span>
                              <OutboundLink
                                target="_blank"
                                className="button is-success is-outlined is-small is-rounded ml-1"
                                href={`https://twitter.com/abhithrajan`}
                              >
                                Follow
                              </OutboundLink>
                            </span>
                            <span>
                              <OutboundLink
                                className="button is-info is-outlined is-small is-rounded ml-1"
                                href="https://ko-fi.com/abhith"
                                target="_blank"
                              >
                                Buy me a coffee{" "}
                                <FaCoffee className="text-danger" />
                              </OutboundLink>
                            </span>
                            <br />
                            {/* TODO: Make dynamic */}
                            {`
        Abhith Rajan is an aspiring software engineer with more than 6 years of experience and proven successful track record of delivering technology-based products and services.
      `}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </MDXRenderer>
              </div>
            </div>
          </div>
        </section>
      </div>
      <RelatedArticles articles={relatedArticles} />
      <RelatedVideos relatedVideos={relatedVideos} />
      <RelatedStories relatedStories={relatedStories} />
      <RelatedTools relatedServices={relatedTools} />
      <section className="section">
        <div className="container is-fluid">
          <DiscussionEmbed {...disqusConfig} />
        </div>
      </section>
    </Layout>
  );
};