type TextProps = {
  text: string;
  loading?: boolean;
};

const Text = ({ text, loading = false }: TextProps) => {
  return (
    <div
      style={{
        marginTop: 20,
        whiteSpace: "pre-wrap",
        display: "flex",
        flexBasis: "auto",
      }}
    >
      {loading ? <p style={{ color: "#555" }}>Procesando...</p> : <p>{text}</p>}
    </div>
  );
};

export default Text;
