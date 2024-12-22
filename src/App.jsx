import  { useEffect, useState } from "react";

function ProfileDisplay() {
  const [profile, setProfile] = useState({
    firstName: "John",
    lastName: "Doe",
    gender: "Male",
    phoneNumber: "+1 234 567 8900",
    imageUrl: "/placeholder.svg",
  });

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await fetch("https://randomuser.me/api/");
        const data = await response.json();
        const user = data.results[0];

        setProfile({
          firstName: user.name.first,
          lastName: user.name.last,
          gender: user.gender,
          phoneNumber: user.phone,
          imageUrl: user.picture.large,
        });
      } catch (error) {
        console.error("Failed to fetch profile:", error);
      }
    };

    fetchProfile();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "600px",
        padding: "20px",
        border: "1px solid black",
        borderRadius: "8px",
        margin: "0 auto",
      }}
    >
      <div
        style={{
          width: "150px",
          height: "150px",
          border: "1px solid black",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          src={profile.imageUrl}
          alt="Profile picture"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>
      <div style={{ flex: 1, paddingLeft: "20px" }}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            <div style={{ fontWeight: "bold" }}>First Name</div>
            <div>{profile.firstName}</div>
          </div>
          <div>
            <div style={{ fontWeight: "bold" }}>Last Name</div>
            <div>{profile.lastName}</div>
          </div>
        </div>
        <div style={{ marginTop: "10px" }}>
          <div style={{ fontWeight: "bold" }}>Gender</div>
          <div>{profile.gender}</div>
        </div>
        <div style={{ marginTop: "10px" }}>
          <div style={{ fontWeight: "bold" }}>Phone Number</div>
          <div>{profile.phoneNumber}</div>
        </div>
      </div>
    </div>
  );
}

export default ProfileDisplay;
