import Layout from '../components/layout';

export default function Home() {
  return (
    <Layout>
      <div className="flex flex-col min-h-screen md:w-2/5 w-4/5 justify-center items-center gap-6">
        <h1 className="text-6xl font-bold text-center">
        Welcome to my <a href="/" className="hover:text-purple-500 focus:text-purple-500">Personal Metrics Tracker</a>
        </h1>
        <p
          className="text-center md:text-left"
        >
          Customizable metrics tracker
        </p>
        <a href="/profile/signup">
          <button
            className="bg-white border rounded-xl border-gray-300 p-2 hover:bg-purple-500 hover:text-white focus:bg-purple-500 focus:text-white"
          >
            Sign Up
          </button>
        </a>
        <svg
          x="0px"
          y="0px"
          className="md:h-8 md:w-8 h-12 w-12 animate-bounce"
          viewBox="0 0 255 255">
          <style>
            enable-background:new 0 0 255 255;
          </style>
          <g>
            <g id="arrow-drop-down">
              <polygon points="0,63.75 127.5,191.25 255,63.75"/>
            </g>
          </g>
        </svg>
      </div>

      <div
        className="flex flex-col md:flex-row gap-6 min-h-screen md:w-3/5 w-full items-center md:justiy-between justify-center"
      >
        <p className="mx-6">
          My aim for this is to make a customizable web application used to track whatever metrics you want.
        </p>
      </div>
    </Layout>
  )
}
