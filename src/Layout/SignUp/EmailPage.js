function EmailPage({ formData, setFormData, handleSubmit }) {
    const handleChange = ({ target }) => {
        const value = target.value;
        setFormData({
            ...formData,
            [target.name]: value,
        });
    };

    return (
        <form
            className="flex rounded px-8 pt-6 pb-2 mb-4 flex-col w-[75%] justify-center"
            onSubmit={handleSubmit}
        >
            {/*Username*/}
            <div className="mb-6">
                <label
                    className="block text-white text-md font-bold mb-2"
                    htmlFor="username"
                >
                    Username
                </label>
                <input
                    id="username"
                    name="username"
                    type="username"
                    autoComplete="username"
                    required={true}
                    placeholder="Username"
                    onChange={handleChange}
                    value={formData.username}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight outline-none focus:border-indigo-500 focus:shadow-outline bg-slate-800"
                />
            </div>
            {/*Email*/}
            <div className="mb-2">
                <label
                    className="block text-white text-md font-bold mb-2"
                    htmlFor="email"
                >
                    Email Address
                </label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required={true}
                    placeholder="Email"
                    onChange={handleChange}
                    value={formData.email}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight outline-none focus:border-indigo-500 focus:shadow-outline bg-slate-800"
                />
            </div>
            {/*Confirm Email*/}
            <div className="mb-6">
                <label
                    className="block text-white text-md font-bold mb-2"
                    htmlFor="confirmEmail"
                >
                    Confirm Email Address
                </label>
                <input
                    id="confirmEmail"
                    name="confirmEmail"
                    type="email"
                    required={true}
                    placeholder="Email"
                    onChange={handleChange}
                    value={formData.confirmEmail}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight outline-none focus:border-indigo-500 focus:shadow-outline bg-slate-800"
                />
            </div>
            {/*Password*/}
            <div className="mb-2">
                <label
                    className="block text-white text-md font-bold mb-2"
                    htmlFor="password"
                >
                    Password
                </label>
                <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="password"
                    required={true}
                    placeholder="Password"
                    onChange={handleChange}
                    value={formData.password}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight outline-none focus:border-indigo-500 focus:shadow-outline bg-slate-800"
                />
            </div>
            {/*Confirm Password*/}
            <div className="mb-6">
                <label
                    className="block text-white text-md font-bold mb-2"
                    htmlFor="confirmPassword"
                >
                    Confirm Password
                </label>
                <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    required={true}
                    placeholder="Password"
                    onChange={handleChange}
                    value={formData.confirmPassword}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight outline-none focus:border-indigo-500 focus:shadow-outline bg-slate-800"
                />
            </div>
            <div className="flex items-center">
                <button
                    className=" bg-indigo-500 hover:bg-indigo-400 text-white font-bold py-2 px-4 w-full rounded focus:outline-none focus:shadow-outline"
                    type="submit"
                >
                    Create Account
                </button>
            </div>
        </form>
    );
}

export default EmailPage;
