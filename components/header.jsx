export default function Header() {
  return (
    <header className="flex flex-row items-stretch justify-between w-10/12 m-6">
        <p className="font-bold">
          <a href="/" className="hover:text-green-500 focus:text-green-500 text-lg">
            Personal Metrics
          </a>
        </p>
        <div className="flex flex-row">
          <p className="mr-4">
            <a href="/pricing" className="hover:text-green-500 focus:text-green-500 text-lg">
              Pricing
            </a>
          </p>
          <p>
            <a href="/profile" className="hover:text-green-500 focus:text-green-500 text-lg">
              Profile
            </a>
          </p>
        </div>
      </header>
  );
}
