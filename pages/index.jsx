export default function Home() {
  return (
    <div className="flex flex-col items-center justify-start min-h-screen py-2">
      <header className="flex flex-row items-stretch justify-between w-10/12 m-6">
        <p className="font-bold">
          <a href="/" className="hover:text-purple-500 focus:text-purple-500">
            Personal Metrics
          </a>
        </p>
        <p>
          <a href="/profile" className="hover:text-purple-500 focus:text-purple-500">
            Sign In
          </a>
        </p>
      </header>

      <div className="flex md:flex-row justify-center my-6">
        <h1 className="text-6xl font-bold mt-6">
          Welcome to my <a href="/" className="hover:text-purple-500 focus:text-purple-500">Personal Metrics Tracker</a>
        </h1>

        <div
          className="flex flex-col md:flex-row gap-6 min-h-screen md:w-3/5 w-full items-center md:justiy-between justify-center"
        >
          <p className="mx-6">
            My aim for this is the make a customizable web application used to track whatever metrics you want.
          </p>
        </div>
      </div>
    </div>
  )
}
