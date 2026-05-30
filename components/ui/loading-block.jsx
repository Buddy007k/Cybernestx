import Spinner from "./spinner";

export default function LoadingBlock({ label = "Loading..." }) {
  return (
    <div className="flex flex-col items-center justify-center gap-3 py-8">
      <Spinner size="md" />
      <p className="text-sm text-muted">{label}</p>
    </div>
  );
}
