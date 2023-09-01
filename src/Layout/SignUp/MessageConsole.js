function MessageConsole({ message }) {
    return (
        <div className="flex rounded px-8 flex-col w-[75%] justify-center">
            <div className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight h-8 outline-none focus:border-indigo-500 focus:shadow-outline bg-slate-800 flex items-center">
                {message ? `> ${message}` : ""}
            </div>
        </div>
    );
}

export default MessageConsole;
