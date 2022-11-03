import React from "react";
import pic from "../profilepic.jpeg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <section className="bg-white dark:bg-gray-900">
        <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
          <img className="rounded-lg dark:hidden" src={pic} alt="dashboard" />
          <div className="mt-4 md:mt-0">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              RRC Health Coaching
            </h2>
            <p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">
              Let's face it, change is rough. It's not impossible; it's just
              challenging.
            </p>
            <Link
              to="/mystory"
              className="inline-flex items-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900"
            >
              Meet Me!
              <svg
                className="ml-2 -mr-1 w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-8 lg:px-3">
          <div className="max-w-screen-lg text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 className="mb-4 text-4xl tracking-tight font-bold text-gray-900 dark:text-white">
              Health Goals
            </h2>
            <ul className="mb-4 font-light">
              <li>- Eat a nourishing diet</li>
              <li>- Avoid junk food</li>
              <li>- Get good sleep</li>
              <li>- Figure out a sustainable exercise routine</li>
              <li>- Spend time outside</li>
              <li>- Limit electronics at night</li>
              <li>- Support my gut</li>
              <li>- Manage my stress</li>
              <li>- Take time to play</li>
              <li>- Avoid toxins</li>
              <li>- Be intentional about my social connections</li>
            </ul>
            <p className="mb-4 font-light">
              ...and the list can go on and on. These are all valid, worthwhile
              and proven goals that will enrich your quality of life and could
              even extend it. Perhaps you are already working on some of these
              goals, but you want to add a few more into your life. Maybe you
              have a deep interest in them because you've read about the
              advantages of enacting some of them, but you're not sure how to go
              about it. It's possible you've seen a friend or two take on a
              couple of these items on the checklist, they are thriving, and you
              want that for yourself. So what are the reasons it isn't happening
              for you?
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white dark:bg-gray-900">
        <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
          <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              WHY? Now that's a great question!
            </h2>
            <ul className="mb-4 font-light">
              <li>
                Have you ever given yourself the opportunity to figure out your
                “WHY”?
              </li>
              <li>
                What are the reasons you'd want to make changes to your current
                health situation?
              </li>
              <li>Where do you see yourself, years down the road?</li>
              <li>How are you living your life in that dream-future?</li>
              <li>What's it like to be the ideal YOU in the coming years?</li>
              <li>What has to change inside you?</li>
              <li>
                What new belief (value, strength, assumption, identity) is
                necessary?
              </li>
              <li>
                How does this shift you desire change the story you're living
                now?
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-white dark:bg-gray-900">
        <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
          <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Your WHY, your intention, is where your motivation comes from.
            </h2>
            <p className="mb-4 font-light">
              There are infinite ways of traveling towards a destination. With
              clear intentions and trust in your reasons for making the journey,
              you'll find the wherewithal and energy to move in your chosen
              “right” direction.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white dark:bg-gray-900">
        <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
          <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              How does health coaching work to get you there?
            </h2>
            <p className="mb-4 font-light">
              We'll start with a guided thought journey - some time for you to
              step into a place of possibility where you get to dream about your
              ideal future, give yourself permission to imagine your best life.
              I'll hold that space of possibility for you so you can say (even
              declare!) what you hope for. There's no judgment, just
              unconditional acceptance for you and your inner wisdom.
            </p>
            <p className="mb-4 font-light">
              Then I'll help you pull out some Long Term Goals, maybe 3-6 months
              out or whatever feels right for you. From those Long Term Goals,
              you'll begin to create Short Term Goals- Experiments or Actions
              Steps that you can begin to try that will be structured using the{" "}
              <a
                className="text-primary-500 hover:underline"
                href="https://kresserinstitute.com/why-it-makes-sense-to-set-smart-goals-for-health/"
              >
                SMART model.
              </a>{" "}
              We'll use this format because then we can really hone in on and
              monitor your progress, keeping what works, tweaking or removing
              what doesn't. Along the way, you'll really get to know yourself
              and all the ways that result in success- YOUR wins, YOUR way!
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-sm">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Testimonials
            </h2>
            <p className="mb-8 font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">
              Estibulum bibendum nulla erat, in sollicitudin turpis hendrerit a.
              Pellentesque posuere sollicitudin urna vitae vestibulum.
            </p>
          </div>
          <div className="grid mb-8 lg:mb-12 lg:grid-cols-2">
            <figure className="flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-b border-gray-200 md:p-12 lg:border-r dark:bg-gray-800 dark:border-gray-700">
              <blockquote className="mx-auto mb-8 max-w-2xl text-gray-500 dark:text-gray-400">
                <p className="my-4">
                  "Rachel is one of the most kind and empathetic individuals
                  I've ever met. She's endlessly patient and cares so much about
                  helping you work through your thoughts and ideas. She's been
                  so helpful on my journey of finding a new job, working on some
                  health issues and more. I can't recommend her enough!!"
                </p>
              </blockquote>
              <figcaption className="flex justify-center items-center space-x-3">
                <img
                  className="w-9 h-9 rounded-full"
                  src="https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg"
                  alt="..."
                />
                <div className="space-y-0.5 font-medium dark:text-white text-left">
                  <div>N. G.</div>
                  <div className="text-sm font-light text-gray-500 dark:text-gray-400">
                    From Colorado
                  </div>
                </div>
              </figcaption>
            </figure>

            <figure className="flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-b border-gray-200 md:p-12 dark:bg-gray-800 dark:border-gray-700">
              <blockquote className="mx-auto mb-8 max-w-2xl text-gray-500 dark:text-gray-400">
                <p className="my-4">
                  “Rachel's coaching has not only helped me to set clear and
                  powerful goals (and actually achieve them!) but also to unpack
                  defeatist beliefs and change my mindset. This has helped me to
                  get unstuck in areas that have been frustrating for years!"
                </p>
              </blockquote>
              <figcaption className="flex justify-center items-center space-x-3">
                <img
                  className="w-9 h-9 rounded-full"
                  src="https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg"
                  alt="..."
                />
                <div className="space-y-0.5 font-medium dark:text-white text-left">
                  <div>B. R.</div>
                  <div className="text-sm font-light text-gray-500 dark:text-gray-400">
                    From Canada
                  </div>
                </div>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
