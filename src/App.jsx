import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <img
        src="https://images.unsplash.com/photo-1682685797208-c741d58c2eff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80"
        alt="photo"
        className="profile"
      />
      <div className="container">
        <h1>Jonas Schemmater</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita qui
          molestiae tenetur alias quisquam nihil. Ab suscipit mollitia
          repudiandae consequatur.
        </p>
        <div className="tag-container">
          <Tag text="JavaScript" icon="🤩" bg="green" />
          <Tag text="Python" icon="🤩" bg="red" />
          <Tag text="C++" icon="🤩" bg="yellow" />
          <Tag text="Java" icon="🤩" bg="orange" />
          <Tag text="Web Development" icon="🤩" bg="pink" />
        </div>
      </div>
    </div>
  );
}

function Tag({ text, icon, bg }) {
  return (
    <p
      className="tag"
      style={{
        background: bg
      }}
    >
      {text} {icon}
    </p>
  );
}
