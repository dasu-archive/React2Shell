

// app/page.tsx
import { vulnerableAction } from "./actions";

export default async function Home({ searchParams }: { searchParams: any }) {
  // 이 과정에서 공격자가 주입한 객체가 역직렬화되며 실행됨
  const result = await vulnerableAction(new FormData());

  return (
    <main>
      <h1>CVE-2025-55182 Target</h1>
      <form action={vulnerableAction}>
        <button type="submit">Run Action</button>
      </form>
      
      {result && <div style={{ display: 'none' }}>{JSON.stringify(result)}</div>}
    </main>
  );
}