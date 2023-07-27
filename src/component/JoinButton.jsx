const JoinButton = ({ age }) => {
  return (
    <>
      <button disabled={age < 19}>가입하기</button>
      {age < 19 ? (
        <h3 style={{ color: "red" }}>19세 미만은 가입할 수 없습니다.</h3>
      ) : (
        <h3 style={{ color: "green" }}>가입 가능합니다.</h3>
      )}
    </>
  );
};

export default JoinButton;
