const UpcomingEventsList = ({schedule}) => {
  return (
    <div className="mx-auto max-w-3xl px-6" id="upcoming-events">
        <h2 className="flex justify-center text-3xl font-semibold tracking-tight text-gray-900 m-8">Upcoming Events in 2026</h2>
        <ul role="list" className="divide-y divide-gray-200">
            {schedule.map((event) => (
                <li key={event.tournId} className="flex justify-between gap-x-6 py-5">
                <div className="flex min-w-0 gap-x-4">
                    <div className="min-w-0 flex-auto">
                    <p className="text-sm/6 font-semibold text-black">{event.name}</p>
                    <p className="mt-1 truncate text-xs/5 text-gray-600">{event.format}</p>
                    </div>
                </div>
                <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                    <time className="text-sm/6 text-black">{event.date.start.slice(0, 10)}</time>
                </div>
                </li>
            ))}
        </ul>
    </div>
  );
}
export default UpcomingEventsList
  