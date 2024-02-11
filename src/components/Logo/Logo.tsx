export const Logo = () => {
    return (
        <div style={{
            height: '80vh',
            backgroundColor: "#7FFFD4",
            display: "flex",
            flexDirection: "row-reverse",
            alignItems: "center",
            boxShadow: "10px 2px 10px 10px rgba(0, 0, 0, 0.2)"

        }}>
            <div style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                height: "80%",
                width: "100%"
            }}>
                <img width={70} style={{ transform: "rotate(180deg)" }} src={require("./assets/icon.webp")} alt="a" />
                <h3 style={{ fontWeight: "bolder", marginTop: "10px", fontStyle: "italic" }}>CleanMyCar</h3>
                <p> India's first waterless <br />car cleaning company</p>
            </div>
        </div >
    )
}