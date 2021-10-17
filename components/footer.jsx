const links = {
  '/': {
    text: 'Home',
  },
  '/profile/signup': {
    text: 'Sign Up',
  },
  '/contact': {
    text: 'Contact',
  },
  '/credits': {
    text: 'Credits',
  },
}

export default function Footer() {
  return (
    <footer className="justify-self-end w-10/12 m-6 mt-32">
      <div className="flex flex-row justify-center gap-4">
        {
          Object.entries(links).map(([key, value]) => {
            return (
              <p>
                <a href={key} className="hover:text-green-500 focus:text-green-500 text-lg">
                  {value.text}
                </a>
              </p>
            )
          })
        }
      </div>
      <p className="mt-6 text-center">Made in Houston, Texas.</p>
    </footer>
  );
}
