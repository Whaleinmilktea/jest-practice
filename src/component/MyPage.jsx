const MyPage = ({ user }) => {
  return (
    <>
      {user && user.name ? (
        <h1>{user.name}님 환영합니다.</h1>
      ) : (
        <h1>
          로그인이 필요합니다.
          <button>로그인</button>
        </h1>
      )}
    </>
  );
};

export default MyPage;