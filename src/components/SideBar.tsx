import {
  mainLinks,
  secondaryLinks,
  subscriptionLinks,
  helpLinks,
  textLinks,
} from "../constants";

const SideBar = () => {
  return (
    <div className="w-2/12 bg-[#212121] pr-5 overflow-auto pb-8 sidebar">
      <ul className="flex flex-col border-b-2 border-gray-700 mt-2">
        {mainLinks.map(({ icon, name }) => {
          return (
            <li key={name}>
              <button
                className={`flex items-center gap-3 pl-3 pr-3 w-full py-3
                 hover:bg-zinc-600 focus:bg-zinc-600
             ${name === "Home" ? "bg-slate-600" : ""}`}
              >
                {icon}
                <span className="text-sm tracking-wider">{name}</span>
              </button>
            </li>
          );
        })}
      </ul>
      <ul className="flex flex-col border-b-2 border-gray-700 mt-2">
        {secondaryLinks.map(({ icon, name }) => {
          return (
            <li key={name}>
              <button
                className={`flex items-center gap-3 pl-3 pr-3 w-full py-3
                 hover:bg-zinc-600 focus:bg-zinc-600
             ${name === "Home" ? "bg-slate-600" : ""}`}
              >
                {icon}
                <span className="text-sm tracking-wider">{name}</span>
              </button>
            </li>
          );
        })}
      </ul>
      <ul className="flex flex-col border-b-2 border-gray-700 mt-2">
        {subscriptionLinks.map(({ icon, name }) => {
          return (
            <li key={name}>
              <button
                className={`flex items-center gap-3 pl-3 pr-3 w-full py-3
                 hover:bg-zinc-600 focus:bg-zinc-600
             ${name === "Home" ? "bg-slate-600" : ""}`}
              >
                {icon}
                <span className="text-sm tracking-wider">{name}</span>
              </button>
            </li>
          );
        })}
      </ul>
      <ul className="flex flex-col border-b-2 border-gray-700 mt-2">
        {helpLinks.map(({ icon, name }) => {
          return (
            <li key={name}>
              <button
                className={`flex items-center gap-3 pl-3 pr-3 w-full py-3
                 hover:bg-zinc-600 focus:bg-zinc-600
             ${name === "Home" ? "bg-slate-600" : ""}`}
              >
                {icon}
                <span className="text-sm tracking-wider">{name}</span>
              </button>
            </li>
          );
        })}
      </ul>
      <ul className="flex gap-2 flex-wrap text-sm p-4 text-zinc-400">
        {textLinks[0].map((name) => {
          return (
            <li key={name}>
              <button className="px-1 hover:bg-zinc-600 focus:bg-zinc-600 text-left">
                {name}
              </button>
            </li>
          );
        })}
      </ul>
      <ul className="flex gap-2 flex-wrap text-sm p-4 text-zinc-400">
        {textLinks[1].map((name) => {
          return (
            <li key={name}>
              <button className="px-1 hover:bg-zinc-600 focus:bg-zinc-600 text-left">
                {name}
              </button>
            </li>
          );
        })}
      </ul>
      <span className="px-4 text-sm text-zinc-400">&copy; 2024 Glooge</span>
      <br />
      <p className="px-4 pt-3 text-sm text-zinc-400">
        This clone is for educational purpose only.
      </p>
    </div>
  );
};

export default SideBar;
