export function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="container max-w-360 mx-auto px-20 max-[1200px]:px-15 max-[768px]:px-10 max-[520px]:px-5">
      {children}
    </div>
  );
}
