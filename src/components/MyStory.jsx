import React from "react";
import pic from "../fillerpic.png";
import { Link } from "react-router-dom";

const MyStory = () => {
  return (
    <div>
      <main className="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white dark:bg-gray-900">
        <div className="flex justify-between px-4 mx-auto max-w-screen-xl ">
          <article className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
            <header className="mb-4 lg:mb-6 not-format">
              {/* <address className="flex items-center mb-6 not-italic">
                <div className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
                  <img
                    className="mr-4 w-16 h-16 rounded-full"
                    src="https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg"
                    alt="Rachel Cruz"
                  />
                  <div>
                    <a
                      href="..."
                      rel="author"
                      className="text-xl font-bold text-gray-900 dark:text-white"
                    >
                      Rachel Cruz
                    </a>
                    <p className="text-base font-light text-gray-500 dark:text-gray-400">
                      Health Coach
                    </p>
                    <p className="text-base font-light text-gray-500 dark:text-gray-400">
                      <div>RRC Health Coaching</div>
                    </p>
                  </div>
                </div>
              </address> */}
              <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">
                My Story
              </h1>
            </header>
            <p className="lead">
              Headline content headline content headline content headline
              content headline content headline content headline content
              headline content headline content headline content.
            </p>
            <p>
              Body content body content body content body content body content
              body content body content body content body content body content
              body content body content body content.
            </p>
            <p>
              Body content body content body content body content body content
              body content body content body content body content body content
              body content body content body content.
            </p>
            <figure>
              <img className="rounded-lg" src={pic} alt="" />
              <figcaption>Picture of me and my dogs</figcaption>
            </figure>
            <h2>My Journey</h2>
            <p>
              Body content body content body content body content body content
              body content body content body content body content body content
              body content body content body content.
            </p>
            <p>
              Body content body content body content body content body content
              body content body content body content body content body content
              body content body content body content.
            </p>
            <p>
              Body content body content body content body content body content
              body content body content body content body content body content
              body content body content body content.
            </p>
            <p>
              Body content body content body content body content body content
              body content body content body content body content body content
              body content body content body content.
            </p>
            <h2>More Stuff About Something</h2>
            <p>
              Body content body content body content body content body content
              body content body content body content body content body content
              body content body content body content.
            </p>
            <ol>
              <li>
                <strong>Something</strong>. Body content body content body
                content body content body content body content body content body
                content body content body content body content body content body
                content.
              </li>
              <li>
                <strong>Something</strong>. Body content body content body
                content body content body content body content body content body
                content body content body content body content body content body
                content.
              </li>
              <li>
                <strong>Something</strong>. Body content body content body
                content body content body content body content body content body
                content body content body content body content body content body
                content.
              </li>
              <li>
                <strong>Something</strong>. Body content body content body
                content body content body content body content body content body
                content body content body content body content body content body
                content.
              </li>
            </ol>
            <h3>More Stuff and Things</h3>
            <p>Body content body content body content body content:</p>
            <blockquote>
              <p>
                Body content body content body content body content body content
                body content body content body content body content body content
                body content body content body content.
              </p>
            </blockquote>

            <h4>Pricing?</h4>
            <p>
              Body content body content body content body content body content
              body content body content body content body content body content
              body content body content body content.
            </p>
            <table>
              <thead>
                <tr>
                  <th>Something</th>
                  <th>Something</th>
                  <th>Something</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Something</td>
                  <td>April 21, 2022</td>
                  <td>
                    <strong>$2,300.00</strong>
                  </td>
                </tr>
                <tr>
                  <td>Something</td>
                  <td>May 31, 2022</td>
                  <td>
                    <strong>$300.00</strong>
                  </td>
                </tr>
                <tr>
                  <td>Something</td>
                  <td>June 3, 2022</td>
                  <td>
                    <strong>$2,500.00</strong>
                  </td>
                </tr>
                <tr>
                  <td>Something</td>
                  <td>June 23, 2022</td>
                  <td>
                    <strong>$3,543.00</strong>
                  </td>
                </tr>
                <tr>
                  <td>Something</td>
                  <td>July 6, 2022</td>
                  <td>
                    <strong>$99.00</strong>
                  </td>
                </tr>
                <tr>
                  <td>Something</td>
                  <td>August 23, 2022</td>
                  <td>
                    <strong>$2,540.00</strong>
                  </td>
                </tr>
              </tbody>
            </table>
            <h3>Closing Statement</h3>
            <p>
              <strong>Are you</strong> ready to something about body content
              body content body content body content body content body content
              body content body content body content body content body content
              body content body content.
            </p>
            <p>
              Body content body content body content body content body content
              body content body content!
            </p>
            <p>- Rachel Cruz</p>
          </article>
        </div>
      </main>

      <aside
        aria-label="Related articles"
        className="py-8 lg:py-24 bg-gray-50 dark:bg-gray-800"
      >
        <div className="px-4 mx-auto max-w-screen-xl">
          <h2 className="mb-8 text-2xl font-bold text-gray-900 dark:text-white">
            My Blogs
          </h2>
          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
            <article className="max-w-xs">
              <Link to="/comingsoon">
                <img src={pic} className="mb-5 rounded-lg" alt="..." />
              </Link>
              <h2 className="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
                <Link to="/comingsoon">Title</Link>
              </h2>
              <p className="mb-4 font-light text-gray-500 dark:text-gray-400">
                Description description description description description
                description description description.
              </p>
              <Link
                to="/comingsoon"
                className="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline"
              >
                Read in 2 minutes
              </Link>
            </article>

            <article className="max-w-xs">
              <Link to="/comingsoon">
                <img src={pic} className="mb-5 rounded-lg" alt="..." />
              </Link>
              <h2 className="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
                <Link to="/comingsoon">Title</Link>
              </h2>
              <p className="mb-4 font-light text-gray-500 dark:text-gray-400">
                Description description description description description
                description description description.
              </p>
              <Link
                to="/comingsoon"
                className="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline"
              >
                Read in 12 minutes
              </Link>
            </article>

            <article className="max-w-xs">
              <Link to="/comingsoon">
                <img src={pic} className="mb-5 rounded-lg" alt="..." />
              </Link>
              <h2 className="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
                <Link to="/comingsoon">Title</Link>
              </h2>
              <p className="mb-4 font-light text-gray-500 dark:text-gray-400">
                Description description description description description
                description description description.
              </p>
              <Link
                to="/comingsoon"
                className="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline"
              >
                Read in 8 minutes
              </Link>
            </article>

            <article className="max-w-xs">
              <Link to="/comingsoon">
                <img src={pic} className="mb-5 rounded-lg" alt="..." />
              </Link>
              <h2 className="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
                <Link to="/comingsoon">Title</Link>
              </h2>
              <p className="mb-4 font-light text-gray-500 dark:text-gray-400">
                Description description description description description
                description description description.
              </p>
              <Link
                to="/comingsoon"
                className="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline"
              >
                Read in 4 minutes
              </Link>
            </article>
          </div>
        </div>
      </aside>
      {/* <div>Process of healing from sickness etc</div>
      <div>How I found functional health</div>
      <div>Why I decided to become a health coach</div>
      <div>How im hoping i can help people</div> */}
    </div>
  );
};

export default MyStory;
