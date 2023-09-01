import { useHistory } from "react-router-dom";

function CodePage({ formData, setFormData, handleCode, sendCode }) {
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
            onSubmit={handleCode}
        >
            {/*Send Code*/}
            <div className="mb-6">
                <label
                    className="block text-white text-md font-bold mb-2"
                    htmlFor="code"
                >
                    Code
                    <button
                        className="text-indigo-500"
                        style={{ float: "right" }}
                        onClick={() => sendCode()}
                        type="button"
                    >
                        Send Code
                    </button>
                </label>

                <input
                    id="code"
                    name="code"
                    required={true}
                    placeholder="Code"
                    onChange={handleChange}
                    value={formData.code}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight outline-none focus:border-indigo-500 focus:shadow-outline bg-slate-800"
                />
            </div>
            <div className="flex items-center">
                <button
                    className=" bg-indigo-500 hover:bg-indigo-400 text-white font-bold py-2 px-4 w-full rounded focus:outline-none focus:shadow-outline"
                    type="submit"
                >
                    Verify
                </button>
            </div>
        </form>
    );
}

export default CodePage;
