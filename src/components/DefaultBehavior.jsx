const DefaultBehavior = () => {
  return (
    <form onSubmit={() => alert("Submitting")}>
      <input type="text" />
      <button>Submit</button>
    </form>
  );
};

export default DefaultBehavior;
