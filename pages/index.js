import Head from "next/head";
import React, { useEffect } from "react";

import "../public/webslides-latest/static/js/webslides";
import "../public/webslides-latest/static/js/webslides.min";
import "../public/webslides-latest/static/js/svg-icons";

export default function Home() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.ws = new WebSlides();
    }
  }, []);

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <title>Netflix's Culture &middot; WebSlides</title>
        <meta
          name="description"
          content="Patty McCord wrote the document called 'Netflix Culture: Freedom & Responsibility'.It's one of the most important documents ever to come out of Silicon Valley."
        />

        <link
          href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,700,700i%7CMaitree:200,300,400,600,700&amp;subset=latin-ext"
          rel="stylesheet"
        />

        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="theme-color" content="#333333" />
      </Head>

      <body>
        <header role="banner">
          <nav role="navigation">
            <p className="logo">
              <a href="../index.html" title="WebSlides">
                WebSlides
              </a>
            </p>
            <ul>
              <li className="github">
                <a
                  rel="external"
                  href="https://github.com/webslides/webslides"
                  title="Github"
                >
                  <em>WebSlides</em>
                </a>
              </li>
              <li className="twitter">
                <a
                  rel="external"
                  href="https://twitter.com/webslides"
                  title="Twitter"
                >
                  <em>@WebSlides</em>
                </a>
              </li>
            </ul>
          </nav>
        </header>

        <main role="main">
          <article id="webslides">
            <section className="bg-red">
              <span
                className="background dark"
                style={{
                  backgroundImage:
                    "url(https://source.unsplash.com/R1J6Z1cnJZc/1600x800)",
                }}
              ></span>
              <div className="wrap aligncenter">
                <h1>
                  <strong>Netflix's Culture</strong>
                </h1>
                <p className="text-symbols">* * * </p>
                <p>
                  <a
                    className="button ghost"
                    href="https://webslides.tv/webslides-latest.zip"
                    title="Download WebSlides for free"
                  >
                    WebSlides
                  </a>
                </p>
              </div>
            </section>
            <section>
              <div className="wrap size-50 bg-white">
                <h2>
                  <strong>A bit of context</strong>
                </h2>
                <hr />
                <p>
                  <a href="http://firstround.com/review/The-woman-behind-the-Netflix-Culture-doc/">
                    Patty McCord
                  </a>{" "}
                  created{" "}
                  <a href="https://jobs.netflix.com/life-at-netflix">
                    Netflix's culture
                  </a>
                  . She wrote the document called{" "}
                  <strong>"Netflix Culture: Freedom & Responsibility."</strong>{" "}
                  (2009). So far, it's been shared over 16 million times on{" "}
                  <a href="https://www.slideshare.net/reed2001/culture-1798664">
                    Slideshare
                  </a>{" "}
                  and has been called "the most important document ever to come
                  out of the Valley" by Sheryl Sandberg.
                </p>
              </div>
            </section>
            <section>
              <div className="wrap">
                <div className="grid vertical-align">
                  <div className="column">
                    <h3>
                      <strong>We seek excellence</strong>
                    </h3>
                  </div>
                  <div className="column">
                    <p className="text-intro">
                      We value candor, transparency, and courage.{" "}
                      <strong>We embrace context and avoid control</strong>,
                      seeking insight and understanding to make sound decisions.
                    </p>
                  </div>
                </div>
              </div>
            </section>
            <section className="bg-red">
              <span
                className="background"
                style={{
                  backgroundImage:
                    "url('https://source.unsplash.com/BYYu5nvQoUM/1600x800')",
                }}
              ></span>
              <div className="wrap aligncenter fadeInUp">
                <h3>
                  <strong>Diversity & Inclusiveness</strong>
                </h3>
              </div>
            </section>
            <section>
              <div className="wrap size-50">
                <h2>
                  <strong>7 Aspects</strong> of our Culture
                </h2>
                <hr />
                <ol className="text-cols">
                  <li>
                    <strong>Values are what we Value</strong>
                  </li>
                  <li>High Performance</li>
                  <li>Freedom & Responsibility</li>
                  <li>Context, not Control</li>
                  <li>Highly Alined, Loosely Coupled</li>
                  <li>Pay Top of Market</li>
                  <li>Promotions & Development</li>
                </ol>
                ``{" "}
              </div>
            </section>
          </article>
        </main>

        <footer>
          <div className="wrap">
            <p>
              <span className="alignright">
                <a href="http://netflix.com" title="Netflix">
                  <img
                    src="../webslides-latest/static/images/logos/netflix.svg"
                    alt="Netflix"
                  />
                </a>
              </span>
            </p>
          </div>
        </footer>
      </body>
    </>
  );
}
