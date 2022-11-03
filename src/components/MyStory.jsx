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
              <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">
                My Story
              </h1>
            </header>
            <p className="lead">Process of Self-Discovery</p>
            <p>
              I was raised in an Asian family (my parents, sister and I were 1st
              generation immigrants). Filipinos tend to value the tribe over
              individuality. What that means is if I had a specific need, idea,
              or belief, they usually got brushed aside in favor of what the
              entire family unit needed or wanted. So I learned that my desires
              didn't really matter, that in fact, if I voiced my opinions or
              desires too loudly, I was being selfish or self-centered. Worse
              yet, I was invalidated with being overly dramatic or ridiculous.
              The consequence of believing this mental habit pattern was that I
              didn't trust myself; I wasn't allowed to. I had a lot of
              self-doubt, self-worth issues, that any idea I offered wasn't
              worth listening to.
            </p>
            <p>
              But life has a funny way of working so that I was basically forced
              to be my own advocate. Over the years, divorce being the main
              impetus, I had to learn to use my voice. I found deep value in
              therapy (being heard and feeling validated by a tremendously
              compassionate therapist). I experienced illness that resulted in
              multiple miscarriages, mysterious symptoms that landed me in the
              ER a couple of times, and fatigue and depression that likely
              contributed to my marriage falling apart. Then I discovered
              Functional Medicine and the Ancestral Lifestyle that basically
              turned my physical health around. Having gone through significant
              life changes myself, what I longed for was that space of
              validation, encouragement and celebration. Why am I sharing all of
              this? Because if you're anything like me and this story resonates
              for you, being heard, making declarations about WHY you want to
              make changes in how you live and operate, will be the beginning of
              a significant turning point in your life.
            </p>
            <figure>
              <img className="rounded-lg" src={pic} alt="" />
              <figcaption>Picture of me and my dogs</figcaption>
            </figure>
            <h2>Who am I? How can I help you?</h2>
            <p>
              I am a connector. When you work with me, I'll listen calmly,
              patiently, and carefully for what your needs and desires are. I'll
              help you find ways to meet those longings. Amazingly, health
              coaching is a client-centered profession where you'll use your own
              intuitive resources to find the answers that ring true for you. My
              biggest desire as a health coach is to help clients learn how to
              listen to their instincts and encourage and support their capacity
              to be their own hero. You don't have to be directed by anyone to
              achieve what you desire; answers are available from within if you
              are given the space to contemplate and listen to your inner
              wisdom. I can help you by being the container, the space from
              which your possibilities can happen.
            </p>
            <h2>What is my WHY for being a Health Coach?</h2>
            <p>I believe in you.</p>
            <p>
              I don't say that lightly. In our health coach training program,
              there is a phrase that represents the totality of a coaching
              session that I strive to embody: Unconditional positive regard.
              This means that regardless of what you bring to the session to get
              coaching on, whatever way you show up, there will be NO JUDGMENT.
              Period. My job is to be your companion along the way, and to be
              your mirror so you can see for yourself what you may not recognize
              that could help you move forward.
            </p>
            <h2>Currently...</h2>
            <p>
              I am a newly graduated health & wellness coach, having trained in
              the year-long intensive ADAPT Functional Health Coach Training
              Program through the Kresser Institute. I am working to complete
              the final requirements to acquire program certification (A-CFHC).
              After that, I'll be moving toward National Board Certification
              (NBC-HWC).
            </p>
            {/* <h2>More Stuff About Something</h2>
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
            </p> */}
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
