export default function UserProfile({params}: any) {
    return (
      <div>
        <h1>Profile Page with ID params</h1>
        <hr />
        <p>Id passed in params is: {params.id}</p>
      </div>
    );
  }
  