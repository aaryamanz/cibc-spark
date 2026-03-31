import { tools } from "@/lib/mockData";

export function generateMetadata({ params }) {
  const tool = tools.find((t) => t.id === params.toolId);
  return {
    title: tool ? `Learning — ${tool.name}` : "Learning Journey",
  };
}

export default function JourneyToolLayout({ children }) {
  return children;
}
