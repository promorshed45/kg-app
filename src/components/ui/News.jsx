import { FaRegUser } from "react-icons/fa6";
import { FaRegComments } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";


const News = () => {
    return (
        <div>
            <section className="px-20 mx-auto bg-gray-50 dark:bg-slate-950">
                <div className="mx-auto max-w-[1340px] px-4 py-12 sm:px-6 lg:me-0 lg:py-16 lg:pe-0 lg:ps-8 xl:py-24">
                    <div className="max-w-7xl items-end justify-between sm:flex sm:pe-6 lg:pe-8">
                        <h1 class="md:text-5xl text-2xl font-semibold title-font mb-4 dark:text-gray-300"> Campus News </h1>
                        <div className="mt-8 flex gap-4 lg:mt-0">
                            <button
                                aria-label="Previous slide"
                                id="keen-slider-previous"
                                className="rounded-full border border-secondaryDeep p-3 text-secondaryDeep transition hover:bg-secondaryDeep hover:text-white"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="h-5 w-5 rtl:rotate-180"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                                </svg>
                            </button>

                            <button
                                aria-label="Next slide"
                                id="keen-slider-next"
                                className="rounded-full border border-secondaryDeep p-3 text-secondaryDeep transition hover:bg-secondaryDeep hover:text-white"
                            >
                                <svg
                                    className="h-5 w-5 rtl:rotate-180"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M9 5l7 7-7 7"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>

                    <div className="-mx-6 mt-8 lg:col-span-2 lg:mx-0">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                           
                           {kgnews.map((data, index) =>(
                            <Link key={index} href="#" className="group relative block overflow-hidden">
                                <div className='relative '>
                                    <button
                                        className="absolute left-6 bottom-4 z-10 rounded-sm bg-yellow-500 p-1.5 text-white transition hover:text-secondaryDeep">
                                        <span className="sr-only">Wishlist</span>
                                        <p> 24 Jan 2024</p>
                                    </button>

                                    <Image 
                                        width={550} height={500}
                                        src={data.photo}
                                        alt="news photo"
                                        className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
                                    />
                                </div>

                                <div className="relative border border-gray-100 bg-white p-6">

                                    <div className=''>
                                        <div className="flex items-center gap-2">
                                            <span className="hidden text-gray-600 sm:block pr-3">
                                                <FaRegComments className="text-primary text-2xl hover:text-secondary" />
                                            </span>
                                            <div className='flex gap-1 items-center hover:text-primary'>
                                                <p className="text-xl text-secondary hover:text-primary"> 155 </p>
                                                <p className="text-lg text-gray-500"> comments </p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span className="hidden text-gray-600 sm:block pr-3">
                                                <FaRegUser className="text-primary text-2xl hover:text-secondary" />
                                            </span>
                                            <div className='flex gap-1 items-center pt-1'>
                                                <p className="text-md text-gray-500">by</p>
                                                <p className="text-lg font-medium text-secondary hover:text-primary whitespace-nowrap"> {data.author} </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="h-12"><h3 className="mt-4 text-lg font-medium text-gray-900"> {data.title} </h3></div>
                                    <form className="mt-4">
                                        <button className="block w-full text-slate-950 rounded bg-yellow-400 p-3 text-md font-medium transition hover:scale-105">
                                            View Details
                                        </button>
                                    </form>
                                </div>
                            </Link>
                           ))}

                            

                           
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default News;

const kgnews = [
      {
        "photo": "/news/1.jpg",
        "title": "New Kindergarten Playground Opens",
        "description": "Our school is excited to announce the opening of our new playground! It's designed to stimulate creativity and encourage outdoor play.",
        "quote": {
          "text": "Play is the highest form of research.",
          "author": "Albert Einstein"
        },
        "author": "School Administration",
        "postDate": "2024-01-15",
        "comments": [
          {
            "name": "Parent123",
            "commentsDate": "2024-01-16",
            "photo": "parent123.jpg",
            "description": "This is fantastic news! My child loves playing outdoors and this new playground looks amazing."
          },
          {
            "name": "Teacher456",
            "commentsDate": "2024-01-17",
            "photo": "teacher456.jpg",
            "description": "The new playground will provide so many opportunities for active play and learning. Great job!"
          }
        ]
      },
      {
        "photo": "/news/2.jpg",
        "title": "Kindergarten Science Fair Success",
        "description": "Our students showcased their science projects at the annual science fair. It was a fantastic display of curiosity and creativity!",
        "quote": {
          "text": "Every child is a scientist in the classroom.",
          "author": "Lisa Murphy"
        },
        "author": "Science Department",
        "postDate": "2024-02-01",
        "comments": [
          {
            "name": "Parent789",
            "commentsDate": "2024-02-02",
            "photo": "parent789.jpg",
            "description": "I'm so proud of my child's project! It was a great learning experience for them."
          }
        ]
      },
      {
        "photo": "/news/3.jpg",
        "title": "Kindergarten Reading Month Celebration",
        "description": "We celebrated Reading Month with various activities and events, promoting a love for reading among our students.",
        "quote": {
          "text": "The more that you read, the more things you will know. The more that you learn, the more places you'll go.",
          "author": "Dr. Seuss"
        },
        "author": "English Department",
        "postDate": "2024-02-15",
        "comments": [
            {
              "name": "Teacher789",
              "commentsDate": "2024-03-06",
              "photo": "teacher789.jpg",
              "description": "The art exhibition was a great success! Our students put so much effort into their artwork."
            }
          ]
      },
      // {
      //   "photo": "/news/4.jpg",
      //   "title": "Art Exhibition Showcases Students' Creativity",
      //   "description": "Our students' artwork was displayed at the annual art exhibition. It was inspiring to see their creativity and talent!",
      //   "quote": {
      //     "text": "Every child is an artist.",
      //     "author": "Pablo Picasso"
      //   },
      //   "author": "Art Department",
      //   "postDate": "2024-03-05",
      //   "comments": [
      //     {
      //       "name": "Teacher789",
      //       "commentsDate": "2024-03-06",
      //       "photo": "teacher789.jpg",
      //       "description": "The art exhibition was a great success! Our students put so much effort into their artwork."
      //     }
      //   ]
      // },
      // {
      //   "photo": "/news/5.jpg",
      //   "title": "Kindergarten Sports Day Fun",
      //   "description": "Our annual Sports Day was filled with fun and excitement! Students participated in various sports activities and races.",
      //   "quote": {
      //     "text": "The important thing in life is not the triumph but the struggle, the essential thing is not to have conquered but to have fought well.",
      //     "author": "Pierre de Coubertin"
      //   },
      //   "author": "Physical Education Department",
      //   "postDate": "2024-04-10",
      //   "comments": [
      //       {
      //         "name": "Teacher789",
      //         "commentsDate": "2024-03-06",
      //         "photo": "teacher789.jpg",
      //         "description": "The art exhibition was a great success! Our students put so much effort into their artwork."
      //       }
      //     ]
      // },
      // {
      //   "photo": "/news/6.jpg",
      //   "title": "Kindergarten Music Concert Delights Audience",
      //   "description": "Our students performed beautifully at the annual music concert. It was a joyous celebration of talent and passion for music!",
      //   "quote": {
      //     "text": "Music gives a soul to the universe, wings to the mind, flight to the imagination, and life to everything.",
      //     "author": "Plato"
      //   },
      //   "author": "Music Department",
      //   "postDate": "2024-05-02",
      //   "comments": [
      //       {
      //         "name": "Teacher789",
      //         "commentsDate": "2024-03-06",
      //         "photo": "teacher789.jpg",
      //         "description": "The art exhibition was a great success! Our students put so much effort into their artwork."
      //       }
      //     ]
      // },
      // {
      //   "photo": "/news/7.jpg",
      //   "title": "Kindergarten Charity Drive Success",
      //   "description": "Our charity drive was a huge success, thanks to the generous contributions from our students and parents. We're proud to support our community!",
      //   "quote": {
      //     "text": "The best way to find yourself is to lose yourself in the service of others.",
      //     "author": "Mahatma Gandhi"
      //   },
      //   "author": "Student Council",
      //   "postDate": "2024-05-20",
      //   "comments": [
      //       {
      //         "name": "Teacher789",
      //         "commentsDate": "2024-03-06",
      //         "photo": "teacher789.jpg",
      //         "description": "The art exhibition was a great success! Our students put so much effort into their artwork."
      //       }
      //     ]
      // }
    ]
    