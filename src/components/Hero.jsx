//Hero komponenten som visas som första sida för användare, finns en titel, förklarande text och två knappar.

const Hero = () => {

    const navigation = [
    { name: 'Upcoming', href: '#' },
    { name: 'Past', href: '#' },
    ]

    return (
        <div className="bg-white">
          <header className="absolute inset-x-0 top-0 z-50">
            <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
              <div className="flex lg:flex-1">
                <a href="#" className="-m-1.5 p-1.5">
                  <span className="sr-only">Golf Tracker</span>
                  <img
                    alt=""
                    src="https://www.titleist.se/dw/image/v2/AAZW_PRD/on/demandware.static/-/Sites-titleist-master/default/dw06e1c311/005PV1T/T2029S_03.png?sw=650&sh=650&sm=fit&sfrm=png"
                    className="h-8 w-auto"
                  />
                </a>
              </div>
    
              <div className="hidden lg:flex lg:gap-x-12">
                {navigation.map((item) => (
                  <a key={item.name} href={item.href} className="text-sm/6 font-semibold text-gray-900">
                    {item.name}
                  </a>
                ))}
              </div>
            </nav>
          </header>
    
          <div className="relative isolate px-6 pt-14 lg:px-8">
            <div
              aria-hidden="true"
              className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            >
              <div
                style={{
                  clipPath:
                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                }}
                className="relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-30 bg-linear-to-tr from-[#84cc16] to-[#15803d] opacity-30 sm:left-[calc(50%-30rem)] sm:w-288.75"
              />
            </div>
            <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
              <div className="text-center">
                <h1 className="text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl">
                  Golf Tournament Tracker
                </h1>
                <p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
                    Follow the latest PGA Tour tournaments and keep track of upcoming events.
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                  <a
                    href="#"
                    className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Past Events
                  </a>
                  <a href="#" className="text-sm/6 font-semibold text-gray-900">
                    Upcoming Events <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
            </div>
            <div
              aria-hidden="true"
              className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
            >
              <div
                style={{
                  clipPath:
                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                }}
                className="relative left-[calc(50%+3rem)] aspect-1155/678 w-144.5 -translate-x-1/2 bg-linear-to-tr from-[#84cc16] to-[#15803d] opacity-30 sm:left-[calc(50%+36rem)] sm:w-288.75"
              />
            </div>
          </div>
        </div>
    )
}

export default Hero