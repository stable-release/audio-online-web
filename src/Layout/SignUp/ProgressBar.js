function ProgressBar({ fillColor, completed, total }) {
    return (
        <div
            style={{
                height: 20,
                width: "100%",
                backgroundColor: "#e0e0de",
                borderRadius: 50,
                margin: 50,
            }}
        >
            <div
                style={{
                    height: "100%",
                    width: `${completed / total}`,
                    backgroundColor: fillColor,
                    borderRadius: "inherit",
                    textAlign: "left",
                }}
            >
                <span
                    style={{
                        padding: 5,
                        color: "white",
                    }}
                >
                    {`Part ${completed} of ${total}`}
                </span>
            </div>
        </div>
    );
}

export default ProgressBar;
