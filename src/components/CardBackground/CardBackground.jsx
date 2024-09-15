import './CardBackground.css'

const CardBackground = ({ title, description, icon: Icon, skills, highlight }) => {
  return (
    <div className="card">
      <div className="card-header">
        <h3>
          <Icon className="icon" /> {title}
        </h3>
        <p className="card-description">{description}</p>
      </div>
      <div className="card-content">
        <ul>
          {skills.map((skill, index) => (
            <li key={index}>
              <span className="icon">✔</span> {skill}
            </li>
          ))}
        </ul>
        <div className="card-footer">
          <p>{highlight}</p>
        </div>
      </div>
    </div>
  );
}

export default CardBackground