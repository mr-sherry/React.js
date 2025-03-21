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
        borderRadius: "100% / 50%",
      };
      break;

    // ✅ Rectangle
    case "rectangle":
      shapeStyle = {
        backgroundColor: color,
        width: "150px",
        height: "75px",
      };
      break;

    // ✅ New Shape: Hexagon
    case "hexagon":
      shapeStyle = {
        width: "100px",
        height: "100px",
        backgroundColor: color,
        clipPath:
          "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
      };
      break;

    // ✅ New Shape: Star
    case "star":
      shapeStyle = {
        width: "0",
        height: "0",
        position: "relative",
        display: "block",
        margin: "50px",
        clipPath:
          "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
        backgroundColor: color,
        width: "100px",
        height: "100px",
      };
      break;

    default:
      shapeStyle = {};
  }

  return <div style={shapeStyle}></div>;
};

export default Shape;
