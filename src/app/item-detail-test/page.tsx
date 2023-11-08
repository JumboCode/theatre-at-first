export default function itemDetailTest(name: string, tags: string[], description: string) {

  name = "Item Name";
  tags = ["tag1", "longtag2", "reallyreallylongtag3", "tag4"];
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

  return (
    <main className="">
      <div className="flex flex-col gap-10 items-left p-20 m-10 bg-white w-[50%]">
        <div className="text-4xl font-bold">
          {name}
        </div>
        <div className="flex flex-row gap-6 overflow-scroll">
          {tags.map((tag) => (
            <div key={tag} className="border-2 border-black rounded-lg px-6 py-2 bg-gray-50">
              <p>{tag}</p>
            </div>
          ))}
        </div>
        <hr style={{ borderTop: '1px solid #888888' }} />
        <div>
          <div className="text-xl font-bold mb-5">
            Description
          </div>
          {description}
        </div>
      </div>
    </main>
  )
}
