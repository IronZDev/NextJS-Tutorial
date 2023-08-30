export default function Circle({ color = "red", diameter = 100 }) {
  return (
    <div
      style={{
        width: `${diameter}px`,
        height: `${diameter}px`,
        background: color,
        "border-radius": "50%",
      }}
    ></div>
  );
}
