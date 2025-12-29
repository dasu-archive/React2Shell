'use server'

export async function vulnerableAction(formData: any) {
  // 취약점 포인트: 입력받은 객체를 그대로 클라이언트로 반환하여 직렬화를 유도함
  return formData;
}