const Sidebar = ()=> {
    return (
        <div className="bg-slate-200 rounded-xl p-6 flex flex-col gap-4 w:full md:w-2/5">
            <section className="bg-blue-600 rounded p-2 shadow-md">
                <h1>Summary</h1>
                <ul>
                    <li>26 total tasks</li>
                    <li>20 tasks completed</li>
                    <li>4 tasks ongoing</li>
                    <li>2 tasks remaining</li>
                </ul>
            </section>

            <section>
                <h1>Todays Quote</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam temporibus accusantium qui porro quo. Facere culpa saepe consectetur consequatur dolore.</p>
            </section>
            
        </div>
    )
}

export default Sidebar;
