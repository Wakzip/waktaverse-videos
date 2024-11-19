import jwt from "jsonwebtoken";

export async function handleToken(token) {
  try {
    const userData = jwt.verify(token, process.env.JWT_SECRET);
    console.log("연동된 사용자 정보:", userData);
  } catch (error) {
    console.error("토큰 검증 실패:", error);
  }
}

export default function CallbackPage({ searchParams }) {
  const { token } = searchParams;

  if (!token) {
    return <div>토큰이 없습니다. 연동 실패.</div>;
  }

  useEffect(() => {
    handleToken(token);
  }, [token]);

  return <div>연동 성공! 환영합니다.</div>;
}
