
import Link from "next/link";

import Image from "next/image"



import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <>

      <Link href='/deshboard'> Login Deshboard</Link>
      <main className="">
        <Navbar />
        <section class="bg-gray-900 pt-16">
          <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
            <div class="mr-auto place-self-center lg:col-span-7">
              <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">CREATE A WEDDING WEBSITE</h1>
              <p class="max-w-2xl mb-6 font-light lg:mb-8 md:text-lg lg:text-xl text-gray-400">Create a beautiful wedding website with a free trial today. Add a custom domain name, photo galleries, registry information, and even take RSVPs.</p>
              <a href="#" class="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 focus:ring-primary-900">
                Get started
                <svg class="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
              </a>
              <a href="#" class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg text-white border-gray-700 hover:bg-gray-700 focus:ring-gray-800">
                Wedding
              </a>
            </div>
            <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
              <Image src={"/img/gallery/9.png"} alt="mockup" width={600} height={600} />
            </div>
          </div>
        </section>

        <section>
          <div className="max-w-screen-xl px-4 py-8 mx-auto">

            <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
              <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl text-white">Our Photo Gallery</h1>
              <p class="mb-8 text-lg font-normal lg:text-xl sm:px-16 xl:px-48 text-gray-400">Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div>
                <Image className="rounded-lg" src={"/img/gallery/1.png"} alt="no image" width={400} height={400} />
              </div>
              <div>
                <Image className="rounded-lg" src={"/img/gallery/2.png"} alt="no image" width={400} height={400} />
              </div>
              <div>
                <Image className="rounded-lg" src={"/img/gallery/3.png"} alt="no image" width={400} height={400} />
              </div>
              <div>
                <Image className="rounded-lg" src={"/img/gallery/4.png"} alt="no image" width={400} height={400} />
              </div>
              <div>
                <Image className="rounded-lg" src={"/img/gallery/5.png"} alt="no image" width={400} height={400} />
              </div>
              <div>
                <Image className="rounded-lg" src={"/img/gallery/6.png"} alt="no image" width={400} height={400} />
              </div>
              <div>
                <Image className="rounded-lg" src={"/img/gallery/7.png"} alt="no image" width={400} height={400} />
              </div>
              <div>
                <Image className="rounded-lg" src={"/img/gallery/8.png"} alt="no image" width={400} height={400} />
              </div>
              <div>
                <Image className="rounded-lg" src={"/img/gallery/9.png"} alt="no image" width={400} height={400} />
              </div>

            </div>
          </div>
        </section>


        <section class="bg-gray-800">

          <div class="py-4 px-2 mx-auto max-w-screen-xl text-center lg:py-8 lg:px-6">
            <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl text-white">Our Story</h1>
          </div>
          <aside aria-label="Related articles" class="py-2 lg:py-12 bg-gray-800">
            <div class="px-4 mx-auto max-w-screen-xl">
              <div class="grid gap-12 sm:grid-cols-2 lg:grid-cols-4 justify-center">
                <article class="max-w-xs">
                  <a href="#">

                    <Image className="mb-5 rounded-lg" src={"/img/blog/blog_3.png"} alt="no image" width={300} height={200} />
                  </a>
                  <h2 class="mb-2 text-xl font-bold leading-tight text-white">
                    <a href="#">Our first Meet</a>
                  </h2>
                  <p class="mb-4 text-gray-500 dark:text-gray-400">Second divided from form fish beast made every of seas all gathered us saying he our</p>
                  <a href="#" class="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline">
                    Read in 2 minutes
                  </a>
                </article>
                <article class="max-w-xs">
                  <a href="#">
                    <Image className="mb-5 rounded-lg" src={"/img/blog/blog_1.png"} alt="no image" width={300} height={200} />
                  </a>
                  <h2 class="mb-2 text-xl font-bold leading-tight text-white">
                    <a href="#">Enterprise our relaction</a>
                  </h2>
                  <p class="mb-4  text-gray-500 dark:text-gray-400">Over the past year, Volosoft has undergone many changes! After months of preparation.</p>
                  <a href="#" class="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline">
                    Read in 12 minutes
                  </a>
                </article>
                <article class="max-w-xs">
                  <a href="#">
                    <Image className="mb-5 rounded-lg" src={"/img/blog/blog_2.png"} alt="no image" width={300} height={200} />
                  </a>
                  <h2 class="mb-2 text-xl font-bold leading-tight text-white">
                    <a href="#">We partnered</a>
                  </h2>
                  <p class="mb-4  text-gray-500 dark:text-gray-400">Over the past year, Volosoft has undergone many changes! After months of preparation.</p>
                  <a href="#" class="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline">
                    Read in 8 minutes
                  </a>
                </article>
                <article class="max-w-xs">
                  <a href="#">
                    <Image className="mb-5 rounded-lg" src={"/img/blog/blog_3.png"} alt="no image" width={300} height={200} />
                  </a>
                  <h2 class="mb-2 text-xl font-bold leading-tight text-white">
                    <a href="#">Our first day</a>
                  </h2>
                  <p class="mb-4  text-gray-500 dark:text-gray-400">Over the past year, Volosoft has undergone many changes! After months of preparation.</p>
                  <a href="#" class="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline">
                    Read in 4 minutes
                  </a>
                </article>
              </div>
            </div>
          </aside>
        </section>
      </main>






      <footer class="rounded-lg shadow m-4bg-gray-800">
        <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="https://flowbite.com/" class="hover:underline">wedding™</a>. All Rights Reserved.
          </span>
          <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
            <li>
              <Link href="/" class="hover:underline me-4 md:me-6">Back to home</Link>
            </li>

          </ul>
        </div>
      </footer>


    </>

  );
}
