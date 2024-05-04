import { IconActivity } from "@tabler/icons-react";
import { useState } from "react";

const tabs = [
  { name: "Recent Activity", href: "#", current: true },
  { name: "Notifications", href: "#", current: false },
];

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

function renderContent(route: string) {
  switch (route) {
    case "activity":
      return (
        <div className="mt-6 w-full border border-[#E851EB]/10 rounded-md flex-col justify-center py-12">
          <div className="mx-auto p-3 w-fit bg-[#E851EB]/25 rounded-md">
            <IconActivity className="text-zinc-400 w-6 h-6" />
          </div>
          <h4 className="mt-4 font-plex font-semibold text-lg text-center text-zinc-400">
            No Activity Yet.
          </h4>
          <p className="mt-2 mx-auto w-3/4 font-plex font-light text-base text-center text-zinc-500">
            Complete courses or challenges to show activity!
          </p>
        </div>
      );
    case "notifications":
      return <></>;
  }
}

export default function Tabs() {
  const [active, setActive] = useState<string>("activity");
  return (
    <>
      <div>
        <div className="sm:hidden">
          <label htmlFor="tabs" className="sr-only">
            Select a tab
          </label>
          {/* Use an "onChange" listener to redirect the user to the selected tab URL. */}
          <select
            id="tabs"
            name="tabs"
            className="block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
            defaultValue={tabs?.find((tab) => tab?.current)?.name}
          >
            {tabs.map((tab) => (
              <option key={tab.name}>{tab.name}</option>
            ))}
          </select>
        </div>
        <div className="hidden sm:block">
          <nav
            className="isolate flex divide-x divide-zinc-700/50 font-plex rounded-lg shadow"
            aria-label="Tabs"
          >
            {tabs.map((tab, tabIdx) => (
              <a
                key={tab.name}
                href={tab.href}
                className={classNames(
                  tab.current
                    ? "text-zinc-300"
                    : "text-zinc-500 hover:text-zinc-400",
                  tabIdx === 0 ? "rounded-l-lg" : "",
                  tabIdx === tabs.length - 1 ? "rounded-r-lg" : "",
                  "group relative min-w-0 flex-1 overflow-hidden bg-zinc-900 py-4 px-4 text-center text-sm font-medium hover:bg-zinc-700 focus:z-10"
                )}
                aria-current={tab.current ? "page" : undefined}
              >
                <span>{tab.name}</span>
                <span
                  aria-hidden="true"
                  className={classNames(
                    tab.current ? "bg-[#E40DB5]" : "bg-transparent",
                    "absolute inset-x-0 bottom-0 h-0.5"
                  )}
                />
              </a>
            ))}
          </nav>
        </div>
      </div>
      <div className="overflow-x-hidden">{renderContent(active)}</div>
    </>
  );
}
