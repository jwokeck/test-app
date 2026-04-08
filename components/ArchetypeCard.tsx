import type { ArtchetypeData } from "../utils/types";

export default function ArchetypeCard({ data }: { data: ArtchetypeData }) {
  return <div>{data.archetypeName}</div>;
}
