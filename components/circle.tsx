interface CircleProps {
  color: string;
  diameter: number;
}

export default function Circle({ color = "red", diameter = 100 }:CircleProps) {
  return (
    <div
      style={{
        width: `${diameter}px`,
        height: `${diameter}px`,
        background: color,
        borderRadius: "50%",
      }}
    ></div>
  );
}
