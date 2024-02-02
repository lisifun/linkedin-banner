import profile from "./assets/profile.jpg";

export function App() {
  return (
    <div
      style={{
        backgroundColor: "#81cfd8",
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          borderRadius: "16px",
          boxShadow: "0 4px 8px #0000001a",
          width: "30vw",
          height: "30vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "12px",
          padding: "12px 0px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "40px",
            alignItems: "center",
          }}
        >
          <div
            style={{
              // borderBottom: "1px solid black",
              paddingBottom: "8px",
              fontSize: "2.5rem",
            }}
          >
            <b>Lisandra Fundora</b>
          </div>
          {/* <img
            src={profile}
            style={{
              width: "100px",
              height: "100px",
              borderRadius: "50%",
              objectFit: "cover",
            }}
          /> */}
          {/* <div
            style={{ borderBottom: "1px solid black", paddingBottom: "16px" }}
          >
            <b>Fundora</b>
          </div> */}
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ borderBottom: "1px solid black", width: "5vw" }}></div>
          <div
            style={{ padding: "20px", fontSize: "2rem", textAlign: "center" }}
          >
            <b>WEB DEVELOPER</b>
          </div>
          <div style={{ borderBottom: "1px solid black", width: "5vw" }}></div>
        </div>
        <div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            <div
              style={{
                display: "flex",
                gap: "12px",
                alignItems: "center",
                fontSize: "1.2rem",
              }}
            >
              <i className="fas fa-envelope"></i>
              <div>lisandrafj99@gmail.com</div>
            </div>
            <div
              style={{
                display: "flex",
                gap: "12px",
                alignItems: "center",
                fontSize: "1.2rem",
              }}
            >
              <i className="fab fa-github"></i>
              <div>github.com/lisifun</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
