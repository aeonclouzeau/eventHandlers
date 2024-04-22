const PreventDefault = () => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        alert("Preventing default behavior");
      }}
    >
      <input type="text" />
      <button>Submit</button>
    </form>
  );
};

export default PreventDefault;
