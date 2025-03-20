const Shape = ({ type, color }) => {
  let shapeStyle = {};

  switch (type) {
    case "circle":
      shapeStyle = {
        backgroundColor: color,
        width: "100px",
        height: "100px",
        borderRadius: "50%",
      };
      break;

    case "square":
      shapeStyle = {
        backgroundColor: color,
        width: "100px",
        height: "100px",
      };
      break;

    case "triangle":
      shapeStyle = {
        width: "0",
        height: "0",
        borderLeft: "50px solid transparent",
        borderRight: "50px solid transparent",
        borderBottom: `100px solid ${color}`,
        backgroundColor: "transparent",
      };
      break;

    case "oval":
      shapeStyle = {
        backgroundColor: color,
        width: "100px",
        height: "100px",
        borderRadius: "50% / 30%",
      };
      break;

    default:
      shapeStyle = {};
  }

  return <div style={shapeStyle}></div>;
};

export default Shape;
