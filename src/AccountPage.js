import { useNavigate } from "react-router-dom";

const AccountPage = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.setItem("loggedIn", "false");
    setIsLoggedIn(false);
    navigate("/signin");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h1>Account Page</h1>
      <button
        onClick={handleLogout}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          border: "1px solid #ccc",
          backgroundColor: "white",
          cursor: "pointer",
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default AccountPage;
