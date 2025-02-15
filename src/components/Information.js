import Link from "next/link";

function Information({}) {
  return (
    <div className="bg-black-500 w-full px-5 pt-4 pb-5 flex flex-col gap-4 rounded-md text-neutral-400 font-light mt-0 mb-0">
      <h1 className="text-3xl sm:text-4xl font-medium text-neutral-100 mt-0 mb-0">
        Polyrhythmic Rings-sleep aid
      </h1>
      <p className="mt-0 mb-0">
        Built by{" "}
        <Link
          href={"https://www.abjt.dev/"}
          className="underline underline-offset-4 hover:text-neutral-200 transition-colors duration-150 ease-in-out"
        >
          ABJT
        </Link>
        , this application is made using Next.js, SVG Filters, SVG Animations,
        Framer Motion, and Radix UI. Project inspired by{" "}
        <Link
          href={"https://www.youtube.com/watch?v=Kt3DavtVGVE"}
          target="_blank"
          className="underline underline-offset-4 hover:text-neutral-200 transition-colors duration-150 ease-in-out"
        >
          Hyperplexed&apos;s video
        </Link>{" "}
        on their YouTube channel. You can read more about it{" "}
        <Link
          href="https://www.abjt.dev/lab/polyrhythmic-rings"
          className="underline underline-offset-4 hover:text-neutral-200 transition-colors duration-150 ease-in-out"
        >
          here
        </Link>{" "}
        on my website.
      </p>
      <Link
        href={"https://github.com/abjt14/polyrhythmic-rings"}
        target="_blank"
        className="mt-0 mb-0 w-fit self-end px-3 py-1 rounded-full bg-neutral-950 border border-neutral-700 hover:text-neutral-200 transition-colors duration-150 ease-in-out "
      >
        Code on GitHub
      </Link>
    </div>
  );
}

export default Information;
